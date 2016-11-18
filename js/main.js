//efecto del boton que me de mi curriculum
$(document).ready(function(){
	$('.btn-cur').mouseleave(function(){
		$(this).slideUp(1002).slideDown(1002);
	});
	$('.frase').mouseleave(function(){
		$(this).toggle('scale');
		
	});
	$('.frase').mouseleave(function(){
		$(this).show('scale');
		
	});

	$('a').mouseleave(function(){
		$(this).css('color', '#00FFFF');
	});
	
	$('img').mouseleave(function(){
		$(this).slideUp(1002).slideDown(1002);

	});
	$('img').mouseleave(function(){
		$(this).css('');

	});


		
});