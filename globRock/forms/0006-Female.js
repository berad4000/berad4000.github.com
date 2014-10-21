"use strict";

var Form = function ()  { 
  
  var self   = require( './Form'  )();

  self.id = '0006';
  self.label = 'Female';
  self.triggerList  = [ 10000 ];
  self.formList     = [ '0011' ];

  return self; 

};

exports = module.exports = Form;