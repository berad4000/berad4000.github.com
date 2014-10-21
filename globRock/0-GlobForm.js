"use strict";

var GlobForm = function ( io )  { 
  var self   = require( "../../server/globROCK/Glob" )( io );
  self.globLibrary = require( "./GlobLibrary" )( self );

  self.rockBase     = function( id, x, y ){
    var rock = require( "../../server/globROCK/Rock" )( self, id );
    if ( x != null) rock.x = x;
    if ( y != null) rock.y = y;
    return rock;
  }

  self.library = function( type, id, x, y ){ 
    return self.globLibrary.fetch( type, id, x, y );
  }


  return self; 

};

exports = module.exports = GlobForm;