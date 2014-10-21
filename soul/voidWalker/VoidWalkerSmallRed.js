"use strict";

var VoidWalker = function ( glob, id, x, y )  { 
  
  var self       = require( "../../globROCK/RockContent" )( glob, id, x, y );

  var EventEmitter = require( 'events').EventEmitter;
  self.eventEmitter = new EventEmitter;


  self.toonList  = 	[ 

  					{ viz:0, id:'birth',  speed:.2, complete:'stage0'  },
  					
            { viz:0, id:'stage0', speed:.1                     },
            { viz:0, id:'stage1', speed:.1                     },
            { viz:0, id:'stage2', speed:.1                     },
            { viz:0, id:'stage3', speed:.1                     },
            
            { viz:0, id:'death',  speed:.3, end:'destroy'      },

  					];

  self.birthTime  = 0;
  self.lifeSpan   = 1000 * 10;
  self.deathTime  = 0;

  self.stage      = 0;

  self.friction   = .95;
  self.vx = 0;
  self.vy = 0;

  self.x = 0;
  self.y = 0;

  self.awake = function( glob ){
    self.show('birth');

    self.birthTime = glob.time;
    self.deathTime = self.birthTime + self.lifeSpan;
    self.render = self.lifeCheck;

    self.display.setInteractive(true);
    
    // set the mousedown and touchstart callback..
    self.display.mouseup  = self.display.touchend = self.click;
    
  }

  self.click = function(){
    trace("you have clicked teh beast " );
    self.deathTime += 1000;
  }



  self.destroy = function( ){
    //self.display.parent.removeChild( self.display );
    trace("destroy");
    self.display.visible = false; // THIS IS BADDD!!!!!!!
    self.eventEmitter.emit( "DEATH", self );

    //remove the display
  }

  self.move = function (){
      self.vx += Math.random() * .2 - .1;
      self.vy += Math.random() * .2 - .1;

      self.display.x += self.vx;
      self.display.y += self.vy;

      self.vx *= self.friction;
      self.vy *= self.friction;

  } 

  
  self.death = function(){
    self.show( 'death' );
    self.render = function(){ };
  }



  self.lifeCheck = function(){

    
    var current    = self.glob.time - self.birthTime;
    var lifeSpan  = self.deathTime - self.birthTime;
    var past      =  current/lifeSpan;


    if ( past >= 1  ) return self.death();
    
    self.move();


    if ( past >= .7 ) return self.show('stage3');
    if ( past >= .5 ) return self.show('stage2');
    if ( past >= .3 ) return self.show('stage1');

  }

                  

  self.graphics = {"birth":["/soul/voidWalker/birth/VoidWalkerToons 2_00000.png","/soul/voidWalker/birth/VoidWalkerToons 2_00001.png","/soul/voidWalker/birth/VoidWalkerToons 2_00002.png","/soul/voidWalker/birth/VoidWalkerToons 2_00003.png","/soul/voidWalker/birth/VoidWalkerToons 2_00004.png","/soul/voidWalker/birth/VoidWalkerToons 2_00005.png","/soul/voidWalker/birth/VoidWalkerToons 2_00006.png","/soul/voidWalker/birth/VoidWalkerToons 2_00007.png","/soul/voidWalker/birth/VoidWalkerToons 2_00008.png","/soul/voidWalker/birth/VoidWalkerToons 2_00009.png","/soul/voidWalker/birth/VoidWalkerToons 2_00010.png","/soul/voidWalker/birth/VoidWalkerToons 2_00011.png","/soul/voidWalker/birth/VoidWalkerToons 2_00012.png","/soul/voidWalker/birth/VoidWalkerToons 2_00013.png","/soul/voidWalker/birth/VoidWalkerToons 2_00014.png","/soul/voidWalker/birth/VoidWalkerToons 2_00015.png","/soul/voidWalker/birth/VoidWalkerToons 2_00016.png","/soul/voidWalker/birth/VoidWalkerToons 2_00017.png","/soul/voidWalker/birth/VoidWalkerToons 2_00018.png","/soul/voidWalker/birth/VoidWalkerToons 2_00019.png"],"death":["/soul/voidWalker/death/VoidWalkerToons 2_00100.png","/soul/voidWalker/death/VoidWalkerToons 2_00101.png","/soul/voidWalker/death/VoidWalkerToons 2_00102.png","/soul/voidWalker/death/VoidWalkerToons 2_00103.png","/soul/voidWalker/death/VoidWalkerToons 2_00104.png","/soul/voidWalker/death/VoidWalkerToons 2_00105.png","/soul/voidWalker/death/VoidWalkerToons 2_00106.png","/soul/voidWalker/death/VoidWalkerToons 2_00107.png","/soul/voidWalker/death/VoidWalkerToons 2_00108.png","/soul/voidWalker/death/VoidWalkerToons 2_00109.png","/soul/voidWalker/death/VoidWalkerToons 2_00110.png","/soul/voidWalker/death/VoidWalkerToons 2_00111.png","/soul/voidWalker/death/VoidWalkerToons 2_00112.png","/soul/voidWalker/death/VoidWalkerToons 2_00113.png","/soul/voidWalker/death/VoidWalkerToons 2_00114.png","/soul/voidWalker/death/VoidWalkerToons 2_00115.png","/soul/voidWalker/death/VoidWalkerToons 2_00116.png","/soul/voidWalker/death/VoidWalkerToons 2_00117.png","/soul/voidWalker/death/VoidWalkerToons 2_00118.png"],"stage0":["/soul/voidWalker/stage0/VoidWalkerToons 2_00020.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00021.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00022.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00023.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00024.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00025.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00026.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00027.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00028.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00029.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00030.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00031.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00032.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00033.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00034.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00035.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00036.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00037.png","/soul/voidWalker/stage0/VoidWalkerToons 2_00038.png"],"stage1":["/soul/voidWalker/stage1/VoidWalkerToons 2_00040.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00041.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00042.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00043.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00044.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00045.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00046.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00047.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00048.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00049.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00050.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00051.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00052.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00053.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00054.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00055.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00056.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00057.png","/soul/voidWalker/stage1/VoidWalkerToons 2_00058.png"],"stage2":["/soul/voidWalker/stage2/VoidWalkerToons 2_00060.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00061.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00062.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00063.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00064.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00065.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00066.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00067.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00068.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00069.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00070.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00071.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00072.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00073.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00074.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00075.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00076.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00077.png","/soul/voidWalker/stage2/VoidWalkerToons 2_00078.png"],"stage3":["/soul/voidWalker/stage3/VoidWalkerToons 2_00080.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00081.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00082.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00083.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00084.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00085.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00086.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00087.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00088.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00089.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00090.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00091.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00092.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00093.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00094.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00095.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00096.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00097.png","/soul/voidWalker/stage3/VoidWalkerToons 2_00098.png"]};

  return self; 
};

exports = module.exports = VoidWalker;