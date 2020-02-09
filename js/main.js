$(document).ready(function () {
	// Counter Up 2 Init 
	jQuery(function ($) {
		"use strict";

		var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

		var $counters = $(".count_area .counter");

		/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint({
				element: $(this),
				handler: function () {
					counterUp(counter, {
						duration: 2000,
						delay: 16
					});
					this.destroy();
				},
				offset: 'bottom-in-view',
			});
		});

	});
	//Skill Bar Init
	(function ($) {
		'use strict';

		$('.after').rProgressbar({
			percentage: 85,
			fillBackgroundColor: '#766dff',
			backgroundColor: '#86e7ff'
		});
		$('.photoshop').rProgressbar({
			percentage: 90,
			fillBackgroundColor: '#766dff',
			backgroundColor: '#86e7ff'
		});



		$('.illus').rProgressbar({
			percentage: 70,
			fillBackgroundColor: '#766dff',
			backgroundColor: '#86e7ff'
		});



		$('.sublime').rProgressbar({
			percentage: 95,
			fillBackgroundColor: '#766dff',
			backgroundColor: '#86e7ff'
		});



		$('.sketch').rProgressbar({
			percentage: 75,
			fillBackgroundColor: '#766dff',
			backgroundColor: '#86e7ff'
		});


	})(jQuery);

	//Sticy Nav init
	(function($){
		"use strict"
		var nav_offset_top = $('.header_area').height()+100; 
		/*-------------------------------------------------------------------------------
		  Navbar 
		-------------------------------------------------------------------------------*/
	
		//* Navbar Fixed  
		function navbarFixed(){
			if ( $('.header_area').length ){ 
				$(window).scroll(function() {
					var scroll = $(window).scrollTop();   
					if (scroll >= nav_offset_top ) {
						$(".header_area").addClass("navbar_fixed");
					} else {
						$(".header_area").removeClass("navbar_fixed");
					}
				});
			};
		};
		navbarFixed();
	
	})(jQuery)
	/*---------gallery isotope js-----------*/
	let $btns = $('.project_gallery .button-group button');


    $btns.click(function (e) {

        $('.project_gallery .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project_gallery .gallery_inner').isotope({
            filter: selector
        });

        return false;
    })

    $('.project_gallery .button-group #btn1').trigger('click');

    $('.project_gallery .gallery_inner .light').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
	});
	
	//Owl init
	$(' .testimonial_area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })


})