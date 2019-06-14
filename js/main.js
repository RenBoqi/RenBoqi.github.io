(function ($) {
	"use strict";
	var nav = $('nav');
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
		  },1500);

		  $('#navbar2').text("Tester");
		  $('#navbar2').attr("href","#test");
		  $("#navbar").append('<li id="logout" class="nav-item"> <a class="nav-link js-scroll active" href="#">Logout</a> </li>');
	  }
	  return false;
  });

  $("#navbar").on("click",function () {
	  var navbar =document.getElementById("navbar");
	  var list=document.getElementsByTagName("li");
	  for(var i=0; i<list.length;i++){
	  	if (i==2){
	  		navbar.removeChild(navbar.lastChild);
			$('#title').text("Login for get more infos");
			$("input").show();
			$('#navbar2').text("Login");
			$('#navbar2').attr("href","#login");
			$("#life").hide();
			$("#login").show();
		}
	  }
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
