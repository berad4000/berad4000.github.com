"use strict";

var Void = function ()  { 

  var globForm = require( '../../../globROCK/0-GlobForm')();

  globForm.globLibrary  = require( "./VoidLibrary" )( globForm );
  var self              = require( "../../../globROCK/GlobContent" )( globForm  );

  self.god              = self.glob.library('god');
  self.forge            = self.glob.library("forge");

  self.bg               = new PIXI.Graphics();
  self.locationID = 0;

  self.create = function( glob ){
    self.bg.beginFill( 0x29020b );
    self.bg.drawRect(0, 0, 1920, 1080);
    
    
    self.createNetwork(); 
    self.forge.content.eventEmitter.on( "FORGE",  self.forgeLife ); 
  }

  self.awake = function( glob ){
    self.stage.addChildAt( self.bg, 0 );

    self.stage.addChildAt( self.god.display, 1 );
    self.stage.addChildAt( self.forge.display, 2 );
    //self.addChild(  );
    //self.addChild( self.forge );
   }


  self.forgeLife = function( forge ){
    
    var count = 0;
    count += forge.sourceSky;
    count += forge.sourceSex;
    count += forge.sourceBee;

    if (count == 0 ) return;

    var life = self.glob.library( 'voidWalkerRed' );
    life.content.eventEmitter.on( "DEATH",  self.newDeath );
    self.stage.addChild( life.display );

    life.display.y = self.glob.height * Math.random();
    life.display.x = self.glob.width * Math.random();
  }

  self.newDeath = function( content ){
          trace(" NEW DEATH " + content );

          self.forge.content.source += 2;
  }


   self.render = function( glob ){ 

   }

  self.createNetwork = function(){
    if ( window.socket == null ) return trace("Network not present "); //8080
    if ( window.socket != null ) trace("Network present YAY!!!! ");

    self.control.event.on('removeRock', self.removeRock );
    self.control.event.on('addRock',    self.addRock );
    self.control.event.on('createRock', self.createRock );

    window.socket.on('ready',           self.socketConnected  );
    window.socket.on('children',         self.control.childrenSocket      );
    window.socket.on('addRock',          self.control.childrenSocketAdd   );
    window.socket.on('removeRock',       self.control.childrenSocketRemove  ); 
    window.socket.on('ready',           self.socketConnected  )
    //var socket = window.socket; 
  }

  self.socketConnected = function( id ){
    self.socketID = id;
    trace("SOCKET ID " + self.socketID );
    var data = { socketID:self.socketID, rockID:self.locationID };
    window.socket.emit( 'clientReady', data ); 
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
   // trace(" are u removing ");
   // if (  self.stageContains( rock ) == false ) return;
   // self.stage.removeChild( rock.display );
  }
  

  

  return self; 
 
};


exports = module.exports = Void;


$(document).ready(function() {

var view = Void();
view.showPercent = 1.1;
view.init();
setTimeout( view.core.glob.create, 100 );

});
