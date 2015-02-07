$(document).ready(function() {
	$('#about').click(function(){
		$(this).toggleClass('animated fadeInRight');
		$('.about').fadeToggle();
		$('#official-logo').fadeToggle();
		$('#work').fadeToggle('fast');
		$('#contact').fadeToggle('fast');
	});
	$('#work').click(function(){
		$(this).toggleClass('animated fadeInRight');
		$('.work').fadeToggle();
		$('#official-logo').fadeToggle();
		$('#about').fadeToggle('fast');
		$('#contact').fadeToggle('fast');
	});
	$('#contact').click(function(){
		$(this).toggleClass('animated fadeInRight');
		$('.contact').fadeToggle();
		$('#official-logo').fadeToggle();
		$('#about').fadeToggle('fast');
		$('#work').fadeToggle('fast');
	});
});