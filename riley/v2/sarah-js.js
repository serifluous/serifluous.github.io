$(document).ready(function() {
	$('.box-work').hover(function() {
		$('h2' , this).css("color","#E39B17");
		$('.box-work__image' , this).css("background-color","#F2F2F2")
	},function() {
		$('h2' , this).css("color","#515151");
		$('.box-work__image' , this).css("background-color","#EEE")
	});

	$('.em-grey_question').hover(function() {
		$(this).switchClass("em-grey_question","em-exclamation");
	},function() {
		$(this).switchClass("em-exclamation","em-grey_question");
	});
});