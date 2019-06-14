(function ($) {
	"use strict";
	var nav = $('nav');
	var userCookie;
  var navHeight = nav.outerHeight();



  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function (){
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

	$(window).on('beforeunload', function(){
		return "your data will not be saved";
	});
	
	$(window).on('unload', function(){
		alert("shuxin");
		return "您可能有数据没有保存lalala";
	});
  $('#submitBtn').on('click',function () {

	  var account = document.getElementById("account").value;
	  var password = document.getElementById("password").value;
	  if (account == "test" && password == "test") {
		  $('#title').text("login successful");
		  $("#input").hide();
		  $("#login").hide();
		  $("#test").show();
		  setTimeout(function () {
			  $("#test").hide();
			  $("#life").show();
			  $("#navitem1").hide();
			  $("#navitem2").show();
			  $("#navitem3").show();
			  $("#navitem4").show();
		  },1500);
		  $('#hello').text("Hello Tester!");

	  }
	  return false;
  });

  $("#navitem4").on("click",function () {
	  $('#hello').text("Hello World!");
	  $('#title').text("Login for get more infos");
	  //$("input").show();
	  $("#life").hide();
	  $("#navitem1").show();
	  $("#navitem2").hide();
	  $("#navitem3").hide();
	  $("#navitem4").hide();
	  $("#login").show();
	  return false;
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/**function onclickfunction(){
		var account = document.getElementById("account").value;
		var password = document.getElementById("password").value;
		var loginSection = document.getElementById("login");
		var testSection = document.getElementById("test");
		var title=document.getElementById("title");
		if(account == "test" && password =="test"){

			if(testSection.style.display == "none"){
				title.innerHTML="ok";
				loginSection.style.display="none";
				testSection.style.display="block";
			}
		}else{
			alert("wrong account or password");
		}

	}*/

})(jQuery);
