"use strict";

var Sky = function ()  { 
  
  var self   = require( './Form'  )();

  self.id = '0001';
  self.label = 'Sky';
  self.triggerList  = [];
  self.formList    	= [];

  return self; 

};

exports = module.exports = Sky;