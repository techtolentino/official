$(document).ready(function() {
	$('#about').click(function(){
		$(this).toggleClass('animated flip');
		$('#official-logo').toggleClass('logofy', 400);
		$('#work').fadeToggle('fast');
		$('#contact').fadeToggle('fast');
		$('.about').fadeToggle('fast');
	});
	$('#work').click(function(){
		$(this).toggleClass('animated flip');
		$('#official-logo').toggleClass('logofy', 400);
		$('#about').fadeToggle('fast');
		$('#contact').fadeToggle('fast');
		$('.work').fadeToggle('fast');
	});
	$('#contact').click(function(){
		$(this).toggleClass('animated flip');
		$('#official-logo').toggleClass('logofy', 400);
		$('#about').fadeToggle('fast');
		$('#work').fadeToggle();
		$('.contact').fadeToggle('fast');
	});
});