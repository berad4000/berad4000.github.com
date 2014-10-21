"use strict";

var Title = function ()  { 
  
  var self    = require( "../../globROCK/GlobContent" )( require( '../../globROCK/0-GlobForm')() );

  self.source  = 1000;
  self.sourceIcon = null;

  self.rise = 0;
  self.riseAmount = 1;

  self.coverH = 2000;
  self.coverW = 1080;

  self.layer1Pos = 1300;
  self.layer2Pos = 1350;
  self.layer3Pos = 1400;
  self.layer4Pos = 1400;
  self.layer5Pos = 1500;

  self.layer1Mod = .25;
  self.layer2Mod = .2;
  self.layer3Mod = .15;
  self.layer4Mod = .1;
  
  self.create = function( glob ){
    
    var loc1 = "./story/content/background/backPlain.png";
    var loc2 = "./story/content/background/treeLine.png";
    var loc3 = "./story/content/background/river.png";
    var loc4 = "./story/content/background/riverBank.png";
    var loc5 = "./story/content/background/foreGround.png";

    self.layer1   = new PIXI.Sprite(  PIXI.Texture.fromImage( loc1 )  );
    self.layer1.y = self.layer1Pos;

    self.layer2   = new PIXI.Sprite(  PIXI.Texture.fromImage( loc2 )  );
    self.layer2.y = self.layer2Pos;

    self.layer3   = new PIXI.Sprite(  PIXI.Texture.fromImage( loc3 )  );
    self.layer3.y = self.layer3Pos;

    self.layer4   = new PIXI.Sprite(  PIXI.Texture.fromImage( loc4 )  );
    self.layer4.y = self.layer4Pos;

    self.layer5   = new PIXI.Sprite(  PIXI.Texture.fromImage( loc5 )  );
    self.layer5.y = self.layer5Pos;

    self.display.addChild( self.layer1 );
    self.display.addChild( self.layer3 );
    
    self.display.addChild( self.layer2 );
    self.display.addChild( self.layer4 );
    self.display.addChild( self.layer5 );
    
  }

  self.awake = function( glob ){ }

  self.render = function(){  
    
    if ( self.display == null ) return

    if ( self.ratio == null )
    {
    self.ratio = self.glob.width / self.coverW;
    self.display.scale.x = self.ratio;
    self.display.scale.y = self.ratio;
    return;
    }

    self.rise += self.riseAmount;

    var sizeH = self.ratio * self.coverH;
    sizeH -= self.rise;

    var sizeW = self.ratio * self.coverW;

    trace( 'height '  + self.ratio  );

    self.layer1.y = self.layer1Pos - self.rise * self.layer1Mod;
    self.layer2.y = self.layer2Pos - self.rise * self.layer2Mod;
    self.layer3.y = self.layer3Pos - self.rise * self.layer3Mod;
    self.layer4.y = self.layer4Pos - self.rise * self.layer4Mod;

    self.display.x =  self.glob.width * .5 - sizeW * .5; 
    self.display.y = self.glob.height - sizeH;  
  }

  return self; 
 
};


exports = module.exports = Title;


$(document).ready(function() {


var view = Title();
view.showPercent = .66;
view.init();
setTimeout( view.core.glob.create, 100 );

});
