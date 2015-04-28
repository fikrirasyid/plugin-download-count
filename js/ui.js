jQuery(document).ready(function($) {
	if( $('.plugin-download-count').length > 0 ){

		setInterval(function() {

			$('.plugin-download-count').each(function(){

				var pdc = $(this);
				var type = pdc.attr('data-type');
				var slug = pdc.attr('data-slug');

				$.ajax({
					url: wp.ajaxurl,
					type: 'POST',
					data: {
						action: 'count',
						type: type,
						slug: slug
					},
					success: function(response) {
						var existingResponse = pdc.html();
						if (existingResponse == response) {
						} else {				
							pdc.fadeOut(function() {
								$(this).html(response).fadeIn();
							});
						}
					}
				});


			});
			
		}, wp.interval);
			
	}
});