/*!
 * custom.js
 * Custom JS script for shahsyed-website 1.0.0
 * Written by Shah Syed
 */

 //if you click on the logo, then you go home, and make the home icon active
 $('body').delegate('.col-md-2 img.img-circle', 'click', function () {
 	$('.navbar-collapse').collapse('hide');
 	var $temp = $('.nav li a');
 	var $thisLi = $temp.parents('li:first');
 	var $ul = $thisLi.parents('ul:first');
 	if (!$thisLi.hasClass('active')){
 	  $ul.find('li.active').removeClass('active');
 	  $thisLi.addClass('active');
 	}
 });

 //if you click any link, make it active by highlighting it
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