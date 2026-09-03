/* ==========================================================================
   EduVista - Responsive Navigation Menu Controller
   ========================================================================== */

(function($) {
  'use strict';

  $(document).ready(function() {
    
    // Ensure overlay element exists
    if ($('.overlapblackbg').length === 0) {
      $('<div class="overlapblackbg"></div>').prependTo('.wsmenu');
    }

    // Toggle Mobile Navigation Drawer
    $(document).on('click', '#wsnavtoggle, .wsanimated-arrow', function(e) {
      e.preventDefault();
      $('body').toggleClass('wsactive');
    });

    // Close Mobile Drawer when clicking dark backdrop overlay
    $(document).on('click', '.overlapblackbg', function(e) {
      e.preventDefault();
      $('body').removeClass('wsactive');
    });

    // Close Mobile Drawer when clicking any direct link (except dropdown toggles)
    $(document).on('click', '.wsmenu > a:not(.wsmenu-dropdown-toggle), .wsmenu-dropdown-menu a', function() {
      if ($(window).width() < 992) {
        $('body').removeClass('wsactive');
      }
    });

    // Mobile Accordion Toggle for Countries Dropdown
    $(document).on('click', '.wsmenu-dropdown > a', function(e) {
      if ($(window).width() < 992) {
        e.preventDefault();
        e.stopPropagation();
        var $dropdown = $(this).closest('.wsmenu-dropdown');
        $dropdown.toggleClass('is-open');
        $dropdown.find('.wsmenu-dropdown-menu').slideToggle(250);
        $(this).find('i.fa-chevron-down, i.fa-chevron-up').toggleClass('fa-chevron-down fa-chevron-up');
      }
    });

    // Window Resize Handler
    $(window).on('resize orientationchange', function() {
      if ($(window).width() >= 992) {
        $('body').removeClass('wsactive');
        $('.wsmenu-dropdown').removeClass('is-open');
        $('.wsmenu-dropdown-menu').removeAttr('style');
        $('.wsmenu-dropdown > a i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      }
    });

  });

})(jQuery);
