$(document).ready(function() {
	$('#about').click(function(){
		$(this).toggleClass('animated fadeInDown');
		$('.about').fadeToggle();
		$('#official-logo').fadeToggle();
		$('#work').fadeToggle('fast');
		$('#contact').fadeToggle('fast');
	});
	$('#work').click(function(){
		$(this).toggleClass('animated fadeInDown');
		$('.work').fadeToggle();
		$('#official-logo').fadeToggle();
		$('#about').fadeToggle('fast');
		$('#contact').fadeToggle('fast');
	});
	$('#contact').click(function(){
		$(this).toggleClass('animated fadeInDown');
		$('.contact').fadeToggle();
		$('#official-logo').fadeToggle();
		$('#about').fadeToggle('fast');
		$('#work').fadeToggle('fast');
	});
});