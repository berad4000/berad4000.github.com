"use strict";

var Bee = function ()  { 
  
  var self   = require( './Form'  )();

  self.id = '0003';
  self.label = 'Bee';
  self.triggerList  = [];
  self.formList    	= [];

  return self; 

};

exports = module.exports = Bee;