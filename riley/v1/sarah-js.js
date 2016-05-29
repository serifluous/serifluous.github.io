$(document).ready(function() {
	var identities = [
		"can&rsquo;t stop running",
		"abuses emoji",
		"watches Liam Neeson films",
		"codes like a girl",
		"refuses to wear pants"
		];
	var randIdentity = identities[Math.floor( Math.random() * identities.length )];
	$('#random-header').html( randIdentity ).text();

	$('h1.display').fitText(1.3, { maxFontSize: '36px' });
	$('h2.display').fitText(2, { maxFontSize: '22px' });
});

// function hoverBox(){
// 	$('#navigation li').hover(function() {
// 		$(this).addClass('has-background');
// 	},function() {
// 		$(this).removeClass('has-background');
// 	});
// };