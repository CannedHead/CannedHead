/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


(function() {
  
  var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
    openbtn = document.getElementById( 'open-button' ),
    closebtn = document.getElementById( 'close-button'),
    closebtn2 = document.getElementById( 'close-button2'),
    closebtn3 = document.getElementById( 'close-button3'),
    closebtn4 = document.getElementById( 'close-button4'),
    closebtn5 = document.getElementById( 'close-button5'),
    closebtn6 = document.getElementById( 'close-button6'),
    closebtn7 = document.getElementById( 'close-button7'),
    isOpen = false;

  function init() {
    initEvents();
  }

  function initEvents() {
    openbtn.addEventListener( 'click', toggleMenu );
    if( closebtn) {
      closebtn.addEventListener( 'click', toggleMenu );
    }

    if( closebtn2) {
      closebtn2.addEventListener( 'click', toggleMenu );
    }

    if( closebtn3) {
      closebtn3.addEventListener( 'click', toggleMenu );
    }

    if( closebtn4) {
      closebtn4.addEventListener( 'click', toggleMenu );
    }

    if( closebtn5) {
      closebtn5.addEventListener( 'click', toggleMenu );
    }

    if( closebtn6) {
      closebtn6.addEventListener( 'click', toggleMenu );
    }

    if( closebtn7) {
      closebtn7.addEventListener( 'click', toggleMenu );
    }

    

    // close the menu element if the target it´s not the menu element or one of its descendants..
    content.addEventListener( 'click', function(ev) {
      var target = ev.target;
      if( isOpen && target !== openbtn ) {
        toggleMenu();
      }
    } );
  }





  function toggleMenu() {
    if( isOpen ) {
      classie.remove( bodyEl, 'show-menu' );
    }
    else {
      classie.add( bodyEl, 'show-menu' );
    }
    isOpen = !isOpen;
  }

  init();

})();

































/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
-----------------------------------------------------------------------*/
(function ($) {
 
    $.fn.fakeLoader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide:1200, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex 
            bgColor: '#2ecc71', // Default background color
            spinner:'spinner7', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);

        //Customized Spinners
        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4"><img src="img/logoChapa.svg" class="logoLoader"></div>'; 
        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 

        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each 
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }

                //Add customized loader image

                if (settings.imagePath !='') {
                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
                    centerLoader();
                }
        });

        //Time to hide fakeLoader
        setTimeout(function(){
            $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader
 

        //Center Spinner
        function centerLoader() {

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });

        }

        $(window).load(function(){
                centerLoader();
              $(window).resize(function(){
                centerLoader();
              });
        });


}(jQuery));




