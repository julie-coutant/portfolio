$(document).ready(function(){

	$('#gallery .grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 200,
		animate: true,
		percentPosition: true
	});
	
	$('#menu a').on('click', function(event) {
		event.preventDefault();
		$('#menu nav > div').removeClass('active');
		$(this).parents('div').addClass('active');


		var filter = $(this).data('filter');
		var $pictures = $('#gallery .grid-item');
		$pictures.removeClass('active');

		if (filter) {
			$pictures
				.hide()
				.filter('[data-category=' + filter + ']')
					.fadeIn();
					// effet d'apparition
		}
		else {
			$pictures.show();
		}
		
		setTimeout(function(){ $('.grid').masonry() }, 200);
	});
	
	$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
					$('.go-home').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
					$('.go-home').fadeOut(200);
				}
				if($(window).scrollTop() + $(window).height() < $(document).height() - $("#contact").height()) {
				$('.go-top').css("position","fixed");    //resetting it
				$('.go-home').css("position","fixed");    //resetting it
				$('.go-top').css("bottom","2em"); //resetting it
				$('.go-home').css("bottom","2em"); //resetting it
				}
				if($(window).scrollTop() + $(window).height() > $(document).height() - $("#contact").height()) {
				$('.go-top').css("bottom",$("#contact").height() + 32);
				$('.go-home').css("bottom",$("#contact").height() + 32);
				}
				
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});

});