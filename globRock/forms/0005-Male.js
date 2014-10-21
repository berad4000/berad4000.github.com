"use strict";

var Form = function ()  { 
  
  var self   = require( './Form'  )();

  self.id = '0005';
  self.label = 'Male';
  self.triggerList  = [ 100000];
  self.formList    = [ '0006' ];

  return self; 

};

exports = module.exports = Form;