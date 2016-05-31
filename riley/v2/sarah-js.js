$(document).ready(function() {
	$('.box-work').hover(function() {
		$(this).css("color","#E39B17");
	},function() {
		$(this).css("color","black");
	});

	$('.em-grey_question').hover(function() {
		$(this).switchClass("em-grey_question","em-exclamation");
	},function() {
		$(this).switchClass("em-exclamation","em-grey_question");
	});
});