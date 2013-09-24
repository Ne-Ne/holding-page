// Main Site JS File

// On Page Load
$(document).ready(function(){

	// GLOBAL jQuery

		// Banner Content - SlideDown
		$(".content-banner").hide().slideDown("1000");

		// Accordion View Controller
		$(".collapse").collapse();

		// ACCORDION ICON CHANGE
		$(".accordion-toggle").on("click", function(){
			// Accordion (on open) adds .in
			// Find the toggled class above
			$(this).find(".in");
			// Toggle Change in ICON
			$(".accordion-icon", this).toggleClass("opened");
		});

		// Validate Contact - Forms
		$("#contactform").validate({
			invalidHandler: function(){
				$(".send-mssg").removeClass("btn-green").addClass("btn-red");
			}
		});

	// HOME (/)

		// Homepage Slider
		$('#promoSlider').bxSlider({
			auto:true,
			infiniteLoop:true,
			controls:false,
			pause:4000
		});

	// TRAINER PAGE

		// Trainer V-Slider = Direct Child
		$(".trainer-profiles > a.trainer-icon").on("click", function(e){
			e.preventDefault();
			$(this).parent().toggleClass("active");
		});

		// Trainer V-Slider = Toggle All (Retains Prior Active State)
		$("#trainerShowAll").on("click", function(e){
			e.preventDefault();
			$(".trainer-profiles").siblings().toggleClass("show-all");
		});


	// GMAP3 (Google Map API)

		// FOCUS - Contact Page
		$("#googleMap").gmap3({
			// Marker Settings
			marker:{
				address: "3-5 Thorpe Close, W10 5XL"
			},
			// MAP Settings
			map:{
				options:{
					zoom:14
				}
			}
		});


});