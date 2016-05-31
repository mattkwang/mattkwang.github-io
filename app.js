$(document).ready(function(){
    // $('#img').css('opacity','0').load(function() {
    //     $(this).animate({
    //         opacity: 1
    //     }, 500);
    // });
	
	$('.overlay').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;	
	});

	$('#back').fadeOut(800);
});