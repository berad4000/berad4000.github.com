"use strict";

window.trace = function (msg){
      if ( console == null ) return;
      console.log( "LOG: " + msg );
      };

var GlobContent = function ( glob ) { 
	
  var self      = Object.create( module, {
  core:         { value: glob.core  },
  control:      { value: glob.control },
  });

  self.glob = glob;
  self.glob.content = self;
  self.htmlContainer = null;

  self.showPercent = .85;

  self.init = function (){

    var div = document.getElementById("globROCK");    

    self.core.width = div.width = window.innerWidth;
    self.core.height = div.height = window.innerHeight * self.showPercent;

    var control = self.control;
   
    self.renderer  = new PIXI.CanvasRenderer( self.core.width, self.core.height, div );
    
    var view = self.view = self.renderer.view; // need to figure out with this is 
    
   // view.style.position = "absolute";
   // view.webkitImageSmoothingEnabled = false;
   // var HIGH_MODE = self.renderer instanceof PIXI.WebGLRenderer;
    var interactive = false;
    self.core.stage = self.stage = new PIXI.Stage(0x00FF00, interactive);
    
    //self.resize( self.core.glob );
    self.update();     
    
    self.core.display     = self.display      = new PIXI.DisplayObjectContainer;
    self.core.environment = self.environment  = new PIXI.DisplayObjectContainer;
    self.core.soulLayer   = self.soulLayer    = new PIXI.DisplayObjectContainer;
    
    self.display.addChild( self.environment );
    self.display.addChild( self.soulLayer );
    self.stage.addChild( self.display  );
      
    window.onresize = function( event ) { self.resize() };

    window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { return window.setTimeout(callback, 1000 / 60); };


    window.setInterval( self.update, 1000 / 60);

    return self.core.glob;
  }



  self.addChild = function ( child ){  
    //self.display.addChild( child.content.display ); NOT WORKING FOR NOW
  }

  self.stageContains = function( rock ){

    if ( rock == null ) return false;

    for ( var i = self.stage.children.length - 1; i >= 0; i-- ) {
         if ( self.stage.children[i] === rock.display ) return true;
    } 

    return false;
  }

  self.resize = function(){

    //self.core.width = div.width = window.innerWidth;
    //self.core.height = div.height = window.innerHeight * self.showPercent;

    //self.renderer.resize( self.core.width, self.core.height );
     //if ( self.core.form != null ) self.core.form.render(); 
  }

  self.update = function (){
    self.glob.execute( self.glob );

    self.renderer.render( self.stage);
    self.execute();
    self.render();
    
    }


//  self.renderRocks = function(){
    
//    if ( self.core.rockList == null ) return;
    
//    var max = self.core.rockList.length;

//    for ( var i = 0; i < max; i++ ){
//      var rock = self.core.rockList[ i ];
//      rock.render();
//    }
//  }

  //http://padilicious.com/code/touchevents/swipesensejs.html
  self.touchStart = function(event,passedName) {
    // disable the standard ability to select the touched object
    //event.preventDefault();
    // get the total number of fingers touching the screen
    //fingerCount = event.touches.length;
    // since we're looking for a swipe (single finger) and not a gesture (multiple fingers),
    // check that only one finger was used
    //if ( fingerCount == 1 ) {
      // get the coordinates of the touch
    //  startX = event.touches[0].pageX;
    //  startY = event.touches[0].pageY;
      // store the triggering element ID
    //  triggerElementID = passedName;
    //} else {
      // more than one finger touched so cancel
    //  touchCancel(event);
    // }
  }



  //stub functions
  self.execute = function(){}
  self.render = function(){}
  
  /*

  */

 

	return self; 
  
};

exports = module.exports = GlobContent;