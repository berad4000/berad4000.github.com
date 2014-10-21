"use strict";

var Source = function ()  { 
  
  var self   = require( './Form'  )();

  self.id = '0000';
  self.label = 'Source';
  self.triggerList  = [ 0, 0, 0 ];
  self.formList    = [ '0003', '0002', '0001' ];

  return self; 

};

exports = module.exports = Source;