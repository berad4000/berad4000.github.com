"use strict";

//ROCK CONTENT IS THE VIEW OF ALL ROCKS
//IT CAN BE SWITCH IN AND OUT
//IT CAN EXIST WITHOUT A ROCK TO HOLD IT

var RockContent = function ( glob, id, x, y ) {

 	var self      	 =  Object.create( module, {
 		core: 			{ value:null , writable:true },
 		control: 		{ value:null , writable:true },
 	} );

 	self.glob 		 	= glob;
	self.toons 		 	= {}; //Holds the DIFFERENT ANIMATIONS
	self.currentToon 	= null;
	self.currentToonID 	= null;

	self.display 				= new  PIXI.DisplayObjectContainer();
	
	Object.defineProperty( self, "width", 	{ configurable:true, get:function()			{ return self.display.width	}} );
	Object.defineProperty( self, "height", 	{ configurable:true, get:function()			{ return self.display.height}} );

	self.setPos = function( x, y, pastX, pastY, targetX, targetY ){ 
		
		self.control.setPos( x, y, pastX, pastY, targetX, targetY );

		if ( self.x > self.pastX ) self.display.scale.x =  1;
		if ( self.x < self.pastX ) self.display.scale.x = -1;

		return self;
	}


	self.create = function(){  self.setUpToons();	}
	self.awake = function(){ }

	self.setUpToons = function(){
	
	var toonList = self.toonList;
	if (toonList == null ) return trace('u have no toon list');
	var max = toonList.length;
	
    for ( var i = 0; i < max; i++ )
    {
      var toon = toonList[ i ];
      self.buildToon( toon );

    }

    //self.display.position.x = self.core.x; //WHERE THE CORE???
	//self.display.position.y = self.core.y;
    self.render( self );
		
	}

	self.show = function ( id ){
   
  		
  	if ( self.currentToon != null ) {
  		if ( id == self.currentToonID ) return
  	}
    
    if ( self.currentToon != null ) self.currentToon.visible = false;

    var display = self.toons[ id ];
  
    if ( display == null ) return
    
    display.visible = true;
  	
  	display.gotoAndPlay( 1 );
    self.currentToon 	= display;
    self.currentToonID 	= id;
    return display;
	
	}

	self.render = function(){
		
		//if ( self.targetX == self.x ) 	return
		//if ( self.targetX == null ) 		return
		//if ( self.targetY == null ) 		return			

    	//self.display.position.x = self.core.x; //YOU GOT NOW MORE CORE
		//self.display.position.y = self.core.y;
		//	return
		//}		
		
		//self.display.position.x = self.core.x;
		//self.display.position.y = self.core.y;
	}

	//OPTIONS
	//complete: triggers a new toon

	self.buildToon = function( data ){
		
		var textureList = [];		
		var frames = data.frames;

		var urls   = self.graphics[ data.id ];

		if ( urls == null ) return trace( "No graphics present for [ " + data.id + ' ] ' );
		
		if ( frames != null )  frames = self.replaceFramesWithURLs( frames, urls );
		if ( frames == null )  frames = urls;

  		var toon = new PIXI.MovieClip.prototype.fromImages( frames );
  		//OPTIONS
		
		//'speed' CONTROLS THE SPEED OF THE TOON
		if ( data.speed != null)  toon.animationSpeed = data.speed;
  		
  		if ( data.complete != null ) {
  			
  			toon.loop = false;
  			toon.onComplete = function() { 			
  			if ( toon.visible == false ) return;
  			self.show ( data.complete ); 
  			} 
  		};

  		//'end' TRIGGERS A FUNCTION TO CALL AT THE END OF THE TOON

		if ( data.end != null ) {
  
  			toon.loop = false;
  			toon.onComplete = function() { self[ data.end ](); }; 
  		
  		};

  		if ( data.viz == null ){
  			toon.visible 		= true;
  		}

  		else if ( data.viz == "1" ) {
			toon.play();
  			if ( self.currentToon 	!= null ) self.currentToon.visible = false;
  			self.currentToon 	= toon;
  			toon.visible 		= true;
  		}
  		else{
  			toon.visible 		= false;	
  		}


  		self.toons[ data.id ] = toon;
  		if ( self.display == null ) return trace("YOU HAVE NO DISPLAY");
  		self.display.addChild( toon );


		
	}

	 self.replaceFramesWithURLs = function( frames , urls ){

    		var newFrames = [];
    		var max = frames.length;

    		if ( urls == null ) trace(" u have no urls for the toon " );

    		for ( var i = 0; i < max; i++ ){
    			var frame = frames[i];
    			var url = urls[ frame - 1 ];// the frames are based on the idea of 1
    			newFrames.push( url );
    		}

    		return newFrames;
    }


	return self;
 }


exports = module.exports = RockContent;