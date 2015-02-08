$(document).ready(function() {
	$('#about').click(function(){
		$(this).toggleClass('animated fadeInRight');
		$('.about').fadeToggle('fast');
		$('#official-logo').toggleClass('logofy', 1000);
		$('#work').fadeToggle('fast');
		$('#contact').fadeToggle('fast');
	});
	$('#work').click(function(){
		$(this).toggleClass('animated fadeInRight');
		$('.work').fadeToggle('fast');
		$('#official-logo').toggleClass('logofy', 1000);
		$('#about').fadeToggle('fast');
		$('#contact').fadeToggle('fast');
	});
	$('#contact').click(function(){
		$(this).toggleClass('animated fadeInRight');
		$('.contact').fadeToggle('fast');
		$('#official-logo').toggleClass('logofy', 1000);
		$('#about').fadeToggle('fast');
		$('#work').fadeToggle('fast');
	});
});