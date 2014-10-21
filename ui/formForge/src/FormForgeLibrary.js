"use strict";

var GlobLibrary = function ( glob )  { 
  var self   = Object.create( module, {} );
  self.glob = glob;

  self.fetch = function( type, id, x, y ){
      
      var glob = self.glob;

      var rock;
      //if ( type == 'god') rock = require( '../content/god/god' )( glob, id, x, y );
      
      if ( rock.create != null )  rock.create( glob );
      if ( rock.awake != null )   rock.awake(  glob );
      
      return rock;
  }


  return self; 

};

exports = module.exports = GlobLibrary;