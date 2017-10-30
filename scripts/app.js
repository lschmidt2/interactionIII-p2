$(document).ready(function(){     
	var userScore = 0;

$('.answer').click(function() {
	var answerNumber = parseInt($(this).attr('data-number'));
	userScore = userScore + answerNumber;
	$('#total').text(userScore);
	$(this).addClass("clicked");
})


$('.answer').click(function() {
  var cur = parseInt($('.equation').text());
  if (cur >= 0 && cur <= 7) {
		$('.link').attr('href', 'http://omg.kikkoooo.com/interaction-3/');
  } else if (cur >= 7.1 && cur <= 11) {
		$('.link').attr('href', 'http://www.twitter.com/');
  } else if (cur >= 11.1 && cur <= 15) {
		$('.link').attr('href', 'http://www.instagram.com/');
  } else {
		$('.link').attr('href', 'http://www.facebook.com/');
  }
});

});
