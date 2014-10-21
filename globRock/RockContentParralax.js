"use strict";

var RockContentParralax = function ( glob, id, x, y ) {

  
  var self      = glob.rockBase( id, x, y );
	self.toons = {}; //Holds the DIFFERENT ANIMATIONS

	self.display 		= new  PIXI.DisplayObjectContainer();
	
  //self.display.preUpdate 	= function(){};
	//self.display.postUpdate = function(){};
	//self.display.hasLoaded 	= function(){};
	//self.display.update 	= function(){};

	self.render = function(){ 
  
      //var glob = self.core.glob;
      //var midpointX = glob.core.width * .25;
      //self.display.x = midpointX;
      //self.display.y = self.core.y;


 }

	self.create = function(  ){

    var toonList = self.toonList;
    var max = toonList.length;

  	self.layer={};
  	self.layerList=[];

    for ( var i = 0; i < max; i++ )
    {
      var toon = toonList[ i ];
      self.buildToon( toon );
    }

    self.render();


   	//self.core.glob.landscapeLayer.addChild( rock.display );
   
	}

	self.buildToon = function( toon  ){

    var textureList = [];

    if ( toon.frames == null ) toon.frames = self.graphics[ toon.id ];
    if ( toon.frames == null ) return;

    var frames = toon.frames;
    var urls   = self.graphics[ toon.id ];
    frames = self.replaceFramesWithURLs( frames, urls );

    //self.display = new PIXI.MovieClip.prototype.fromImages( frames );
    
    var display = new PIXI.MovieClip.prototype.fromImages( frames );
    //self.display.addChild( display );

    setTimeout(function() { self.buildLandscape ( toon, display, frames ); }, 100 );

  	//old
    //var max;
	  //if ( toon.src != null )    max = toon.src.length;
  	//if ( toon.frames != null ) max = toon.frames.length;
  	//var textureList = [];

    //trace("building the TOOON$");

  	//for ( var i = 0; i < max; i++ ){
    //var index = i;
    //if ( toon.frames != null )  index = toon.frames[ i ];
    //if ( toon.frames == null )  index = toon.src[ i  ];

    //trace("what does the index look like " + index );
       
    //var texture = PIXI.Texture.fromImage( index );
    //if ( texture != null ) textureList.push( texture );
    //}

  	//var display = new PIXI.MovieClip( textureList );
  
  	//setTimeout(function() { self.buildLandscape ( toon, display, textureList ); }, 100 );
  
  	}

    self.replaceFramesWithURLs = function( frames , urls ){

        var newFrames = [];
        var max = frames.length;

        for ( var i = 0; i < max; i++ ){
          var frame = frames[i];
          var url = urls[ frame - 1 ];// the frames are based on the idea of 1
          newFrames.push( url );
        }

        return newFrames;
    }


	self.buildLandscape = function( toon,  display, textureList ){
     
    var src = self.layer[ toon.src ] = {};
    self.layerList.push( src );
    src.sprites = [];
    
    //GOING TO HARD CODE FOR NOW
    //src.spriteWidth = display.width;
    src.spriteWidth = 1920;
    
    
    src.speed = toon.speed;

    if ( src.speed == null ) src.speed = 1;

    var numNeed = 0;
    if ( src.spriteWidth == 1 ) src.spriteWidth = 500;
    numNeed = Math.ceil( self.core.glob.width / src.spriteWidth );
    //numNeed += 1;

    if ( numNeed == 1 ) numNeed += 3;

    numNeed = 3;

    var d = numNeed;
    
    //* numNeed > d && (d = numNeed ); //should be abstarcted out into the amount that would fill the space
    //* self.display.addChild( display );

    //* return;

    var totalWidth = 0;

    for (var e = 0; e < d; e++) {
      
      var f = new PIXI.MovieClip.prototype.fromImages( textureList );

      f.visible = true;
      if ( toon.y != null ) f.position.y = toon.y;
      if ( toon.y == null ) f.position.y = 0;
        
      f.position.x = 0;
      self.display.addChild(f);
      src.sprites.push(f);

      totalWidth += f.width;

      //* if ( file.stop != null ) f.gotoAndStop( file.stop );   
    }


    src.totalWidth = totalWidth;

    display.visible = true;

    self.updateLandscapeX( 5000 );

    //* self.display.addChild( display );
}

  self.updateLandscapeX = function( x ){

    if ( self.layerList == null ) return  
    var max = self.layerList.length;
    
    for ( var i = 0; i < max; i++ ){
      var layer = self.layerList[ i ];
      self.updateLayerPosX( x, layer )
    }

  }

  self.updateLayerPosX = function( x, layer ){

    var spriteList  = layer.sprites;    //all the subpanels    soul.sprites[c]
    var spriteWidth = layer.spriteWidth;  //width of the entire clip
   
    var max = layer.sprites.length;          //the maximum amount of panels   soul.sprites.length 
    var speed = layer.speed;                   // parralax speed
    if ( speed == null ) speed = 1;

    if ( speed == 0 ) { return  }

     for (var b = spriteWidth, c = 0; c < max ; c++) {
       
        //var d = -x * speed,
        //    d = d + c * b,
        //    d = d % (b *  max),
        //    d = d + 0 * b;

        var d = -x * speed;
        var e = d + c * b;
        var f = e % ( b * max );
        var g = f + 1 * b;

        var h = Math.floor( g );

        spriteList[c].position.x = h;


        //trace(" D " + g );


        //    trace("looking at d " + d );
            //d -= layer.totalWidth * .5;
            //trace( "looking for d " +  );
        //     = Math.floor(d);
            
            //layer.spriteWidth =  spriteList[c].width; 

            //spriteList[c].position.x  +=  layer.spriteWidth *.5; 
            //trace("pos " +  spriteList[c].position.x );
            

            //if ( soul.world  == null ) spriteList[c].position.x = Math.floor(d);
            //if ( soul.world  != null ) spriteList[c].position.x = soul.world.viewPort.width - Math.floor(d);  
            
          }
  }



	return self;
 }


exports = module.exports = RockContentParralax;