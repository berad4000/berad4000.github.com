"use strict";

var GlobLibrary = function ( glob )  { 
  var self   = Object.create( module, {} );
  self.glob = glob;

  self.fetch = function( type, id, x, y ){
      
      var glob = self.glob;

      var content;
      if ( type == 'forge')         content = require( '../../../ui/formForge/forge/Forge' )( glob, id, x, y );
      if ( type == 'god')           content = require( '../content/god/god' )( glob, id, x, y );
      if ( type == 'voidWalkerRed') content = require( '../../../soul/voidWalker/VoidWalkerSmallRed' )( glob, id, x, y );

      var rock = glob.addRockContent( content );
      
      if ( rock.create != null )  rock.create( glob );
      if ( rock.awake != null )   rock.awake(  glob );

      return rock;
  }


  return self; 

};

exports = module.exports = GlobLibrary;