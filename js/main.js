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



})