$(document).ready(function() {
	$('.box-work').hover(function() {
		$('h2' , this).css("color","#EFAB76");
		$('.box-work__image' , this).css("background-color","#F2F2F2")
	},function() {
		$('h2' , this).css("color","#F19650");
		$('.box-work__image' , this).css("background-color","#EEE")
	});

	$('.em-grey_question').hover(function() {
		$(this).switchClass("em-grey_question","em-exclamation");
	},function() {
		$(this).switchClass("em-exclamation","em-grey_question");
	});

	var identities = [
		"can&rsquo;t stop running",
		"refuses to wear pants",
		"made you look",
		"can be found at Boba Guys",
		"provides free succulent-naming services"
		];
	var randIdentity = identities[Math.floor( Math.random() * identities.length )];
	$('#random-header').html( randIdentity ).text();
});