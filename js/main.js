$(document).ready(function() {
	$('#about').click(function(){
		$(this).toggleClass('animated flip');
		$('.about').fadeToggle('fast');
		$('#official-logo').toggleClass('logofy', 400);
	});
	$('#work').click(function(){
		$(this).toggleClass('animated flip');
		$('.work').fadeToggle('fast');
		$('#official-logo').toggleClass('logofy', 400);
	});
	$('#contact').click(function(){
		$(this).toggleClass('animated flip');
		$('.contact').fadeToggle('fast');
		$('#official-logo').toggleClass('logofy', 400);
	});
});