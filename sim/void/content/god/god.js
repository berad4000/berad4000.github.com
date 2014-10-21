"use strict";

var God = function ( glob, id, x, y )  { 
  
  var self       = require( "../../../../globROCK/RockContent" )( glob, id, x, y );

  self.toonList = 	[ 
  					{ id:'graphics' } 
  					];
               
   
 

                                                                                                                                                                                                                                                                                                                                                                                                  self.graphics = {"graphics":["/sim/void/content/god/graphics/godFaceForSim.png"]};

  return self; 
};

exports = module.exports = God;