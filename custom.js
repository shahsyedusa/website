/*!
 * custom.js
 * Custom JS script for s37syed-website 1.0.0
 * Written by Shah Syed
 */

$('body').delegate('.nav li a', 'click', function() {
  var $thisLi = $(this).parents('li:first');
  if (!$thisLi.hasClass('dropdown')) {
    $('.navbar-collapse').collapse('hide'); 
  }
  var $ul = $thisLi.parents('ul:first');
  if (!$thisLi.hasClass('active')){
    $ul.find('li.active').removeClass('active');
    $thisLi.addClass('active');
  }
});