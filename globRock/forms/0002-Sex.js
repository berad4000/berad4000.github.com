"use strict";

var Sex = function ()  { 
  
  var self   = require( './Form'  )();

  self.id = '0002';
  self.label = 'Sex';
  self.triggerList  = [ 100, 100 ];
  self.formList    	= [ "0005" , "0006"];

  return self; 

};

exports = module.exports = Sex;