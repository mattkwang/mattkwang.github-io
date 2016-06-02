$(document).ready(function(){
	$('.overlay').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;	
	});

	$('#back').fadeOut(1000);
});