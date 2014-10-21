"use strict";

var SoulStoneData = function ( id )  { 
  
  var self   = Object.create( module, {} );

  self.id = null;
  self.name = 'SoulStoneData';
  self.triggerList  = [];
  self.formList    = [];
  self.value = 0;

  return self; 

};

exports = module.exports = SoulStoneData;