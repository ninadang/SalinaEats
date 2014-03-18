$(function() {
	var viewportheight = $(window).height();
	$('#slide1', '#slide2').height(viewportheight);

	var words = new Array('eats', 'jams', 'wanders');
	var i = 0;
	setInterval(function() {
		$('.verb').empty().append(words[i]);
		if(i < words.length) {
			i++;
		} else {
			i = 0;
		}
	}, 2500);
});