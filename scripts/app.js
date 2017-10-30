$(document).ready(function(){     
	var userScore = 0;
var userHeight = 0;
var userWeight = 0;

$('.answer').click(function() {
	var answerNumber = parseInt($(this).attr('data-number'));
	userScore = userScore + answerNumber;
	$('#total').text(userScore);
});


$('#foot').click(function() {
	var inputFoot = parseInt($(this).attr('data-inch'));
	userHeight = userHeight + inputFoot;
	$('#heightresult').text(userHeight + " in");
});

$('#inch').click(function() {
	var inputInch = parseInt($(this).attr('data-inch'));
	userHeight = userHeight + inputInch;
	$('#heightresult').text(userHeight + " in");
});

$('#hundred').click(function() {
	var inputPound = parseInt($(this).attr('data-pound'));
	userWeight = userWeight + inputPound;
	$('#weightresult').text(userWeight + " lbs");
});

$('#fifty').click(function() {
	var inputPound = parseInt($(this).attr('data-pound'));
	userWeight = userWeight + inputPound;
	$('#weightresult').text(userWeight + " lbs");
});

$('#twentyfive').click(function() {
	var inputPound = parseInt($(this).attr('data-pound'));
	userWeight = userWeight + inputPound;
	$('#weightresult').text(userWeight + " lbs");
});

$('#ten').click(function() {
	var inputPound = parseInt($(this).attr('data-pound'));
	userWeight = userWeight + inputPound;
	$('#weightresult').text(userWeight + " lbs");
});

$('#five').click(function() {
	var inputPound = parseInt($(this).attr('data-pound'));
	userWeight = userWeight + inputPound;
	$('#weightresult').text(userWeight + " lbs");
});


$('.answer').click(function() {
  var cur = parseInt($('.equation').text());
  if (cur >= 0 && cur <= 7) {
		$('.link').attr('href', "html/lightweight.html");
  } else if (cur >= 7.1 && cur <= 11) {
		$('.link').attr('href', "html/mediumweight.html");
  } else (cur >= 11.1 && cur <= 15) 
		$('.link').attr('href', "html/heavyweight.html");
  
});

$(".answer").click(function () {
   $(this).addClass("clicked");
});

});
