/**************************************************************************************************************************
 * This is a modified version of http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
 * It uses body classes and ID's to fire up your custom code.
 * Another approach - using data-* attributes can be found on 
 * http://viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution
 *************************************************************************************************************************/

var DUMMYSITE = {
  // This should get fired on all pages
  common: {
    init: function() {
      // put your app code here
    },
    finalize: function() {
      // put your app code here
    }
  },
  // only on the startpage with id home
  home: {
    init: function() {
      // put your app code here
    }
  }
}

var UTIL = {
  fire: function( controller, action, args ) {
    var ns = DUMMYSITE;
    action = ( action === undefined ) ? "init" : action;
    
    if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
      ns[controller][action](args);
    }
  },
  
  loadEvents: function() {
    
    var bodyId = document.body.id;
    
    //Fire up common no matter of the page
    UTIL.fire('common');
    
    // do all the classes too.
    $.each(document.body.className.split(/\s+/),function(i,classnm){
      UTIL.fire(classnm);
      UTIL.fire(classnm,bodyId);
    });
    
    UTIL.fire('common', 'finalize');
  }
}

$(document).ready(UTIL.loadEvents);
