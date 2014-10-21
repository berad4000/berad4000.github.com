"use strict";

var FormForge= function ()  { 


  var globForm = require( '../../../globROCK/0-GlobForm')();
  window.GLOB = globForm;//there you go. are you happy.

  //globForm.globLibrary = require( "./VoidLibrary" )( globForm );
  var self    = require( "../../../globROCK/GlobContent" )( globForm  );

  self.bg = new PIXI.Graphics();

  self.locationID = 0;
  self.startTime  = 0;
  self.usedTime   = 0;
  
  self.create = function( glob ){
    
    self.bg.beginFill(  0x29020b );
    self.bg.drawRect(   0, 0, 1920, 1080);

    //self.updateForms();
  
   //self.createNetwork(); 

   var container = document.getElementById('tab');
   self.score = React.renderComponent( LifeDisplay ( { value:155 } ) , container );

    //var image = '../../button/bee.png';
    //self.icon =  React.renderComponent( FormDisplay( { fconImage:image } ) , container );
    //trace("do u have an item " + self.score );

    //i want this to be the main file 
    //i need to be able to create react components

  }


  self.calcTime = function(){

  }

  self.updateForms = function(){

   // var forms = '<a id="sky" > <img src="../../ui/button/see.png" /></a>';

   // var score = $('#forms').html( forms );
   // $('#sky').mousedown(  { id:'sky' }, self.formDown );
   // $('#sky').mouseup(    { id:'sky' }, self.formUp );
    

  }

  self.formDown = function( event ){
   // trace("formClick " + event.data.id );
   // $('#sky').css({ opacity: 0.5 });
  }

  self.formUp = function( event ){
   // trace("formClick " + event.data.id );
   // $('#sky').css({ opacity: 1 });
  }
  


  self.awake = function( glob ){
   // self.stage.addChildAt( self.bg, 0 );
   // self.startTime = self.glob.time;
   }

  self.render = function( glob ){ 

    //var a = self.glob.moment( [2008, 6] );
    //var b = self.glob.moment( [2007, 0] );

    var bonus = 6299000; //Can go over 1 hr 45 mins
    var bonus = 0; //Can go over 1 hr 45 mins
    
    var a = self.glob.moment( self.glob.time + bonus  );
    var b = self.glob.moment( self.startTime );
    
    var miliseconds = a.diff(b );
    var seconds     = a.diff(b, 'seconds');
    var min         = a.diff(b, 'minutes');
    var hours       = a.diff(b, 'hours');

    var hourLabel   = self.glob.moment.duration( hours,     "hour").humanize();
    
    var message = "";

    if ( hours != 0 ){
      message += hourLabel;
      min -= hours * 60;
    }
    
    var minuteLabel = self.glob.moment.duration( min,  "minutes").humanize();
    
    if ( min != 0 ){
      message +=  ' ' + minuteLabel + " ";
      seconds -= min * 60;
    } 

    if ( seconds != 0 ) {
      
      miliseconds -= min * 60000;
      miliseconds -= hours * 3600000;

      //var miliMin   = hours   * 60;
      //var miliSecs  = miliMin * 60;
      //miliseconds -= miliSecs * 1000;

      //miliseconds -= min * 36000; 


      var value = miliseconds/1000;
      message += value.toFixed(2) + " seconds ";
    }



    //var score = $('#score').text( message );
    //if ( self.score == null ) return;
    //self.score.replaceProps( {value:message } );

    //i want access to those components how

    //trace(  score );
  }

  self.createNetwork = function(){
    if ( window.socket == null ) return trace("Network not present "); //8080
    if ( window.socket != null ) trace("Network present YAY!!!! ");

    self.control.event.on('removeRock', self.removeRock );
    self.control.event.on('addRock',    self.addRock );
    self.control.event.on('createRock', self.createRock );

    window.socket.on('ready',           self.socketConnected  );
    window.socket.on('children',        self.control.childrenSocket        );
    window.socket.on('addRock',         self.control.childrenSocketAdd     );
    window.socket.on('removeRock',      self.control.childrenSocketRemove  ); 
    window.socket.on('ready',           self.socketConnected  )
    //var socket = window.socket; 
  }

  self.socketConnected = function( id ){
    self.socketID = id;
    
    var data = { socketID:self.socketID };
    trace("READY THE FORM FORGE " );
    window.socket.emit( 'formforgeReady', data ); 
  }

  self.createRock = function ( rockID, packet ){
     var rock = self.glob.library( packet.type, rockID, packet.x, packet.y );
     if ( rock == null ) return trace( 'Cant create rock ' + packet.type + ' from the library' );
     self.core.glob.addRock( rock );
  }

  self.addRock = function( rock ){
    if (  self.stageContains( rock ) == true ) return;
    self.stage.addChild( rock.display );
  }

  self.removeRock = function( rock ){
    trace(" are u removing ");
    if (  self.stageContains( rock ) == false ) return;
    self.stage.removeChild( rock.display );
  }
  


  return self; 
 
};


exports = module.exports = FormForge;


$(document).ready(function() {

var view = FormForge();
view.showPercent = .2;
view.init();
setTimeout( view.core.glob.create, 100 );

});
