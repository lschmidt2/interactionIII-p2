$(document).ready(function() {
  
  var userScore = 0;

$('.answer').click(function() {
	var answerNumber = parseInt($(this).attr('data-number'));
	userScore = userScore + answerNumber;
	$('#total').text(userScore);
	$(this).addClass("clicked");
})


$('.answer').click(function() {
  var cur = parseInt($('.equation').text());
  if (cur >= 0 && cur <= 10) {
		$('.link').attr('href', 'html/lightweight.html');
  } else if (cur >= 10.1 && cur <= 17) {
		$('.link').attr('href', 'html/mediumweight.html');
  } else {
		$('.link').attr('href', 'html/heavyweight.html');
  }
});
  
  
  $(".hello-answer").click(function() {
    $('body').scrollTo($('#question-1'), 1000, function() {});
  });
  
  $(".ques-1-ans").click(function() {
    $('body').scrollTo($('#question-2'), 1000, function() {});
  });

  $(".ques-2-ans").click(function() {
    $('body').scrollTo($('#question-3'), 1000, function() {});
  });

  $(".ques-3-ans").click(function() {
    $('body').scrollTo($('#question-4'), 1000, function() {});
  });

  $(".ques-4-ans").click(function() {
    $('body').scrollTo($('#question-5'), 1000, function() {});
  });

  $(".ques-5-ans").click(function() {
    $('body').scrollTo($('#question-6'), 1000, function() {});
  });

  $(".ques-6-ans").click(function() {
    $('body').scrollTo($('#question-7'), 1000, function() {});
  });


  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call


    var commands = {
      'hello': function() {
        $('#hello').click();
      },
      
      'male': function() {
        $('#male').click();
      },

      'female': function() {
        $('#female').click();
      },
      
      'skin and bones': function() {
        $('#skin').click();
      },
      
      'barely there': function() {
        $('#barely').click();
      },
      
      'middle ground': function() {
        $('#betty').click();
      },
     
     'dense': function() {
        $('#dense').click();
      },
      
      'large and in charge': function() {
        $('#incharge').click();
      },
      
      'fun sized': function() {
        $('#funsized').click();
      },
      
      'short': function() {
        $('#short').click();
      },
      
      'average': function() {
        $('#average').click();
      },
     
     'tall': function() {
        $('#tall').click();
      },
      
      'giant': function() {
        $('#giant').click();
      },
            
      'white': function() {
        $('#white').click();
      },

      'black': function() {
        $('#african').click();
      },
      
      'african american': function() {
        $('#african').click();
      },

      'native american': function() {
        $('#native').click();
      },
      
      'asian': function() {
        $('#asian').click();
      },
      
      'hispanic': function() {
        $('#hispanic').click();
      },

      'light': function() {
        $('#light').click();
      },
      
      'moderate': function() {
        $('#moderate').click();
      },

      'high': function() {
        $('#high').click();
      },
      
      'zero': function() {
        $('#zero').click();
      },
      
      'one to three': function() {
        $('#onetothree').click();
      },

      'four to six': function() {
        $('#fourtosix').click();
      },
      
      'seven to ten': function() {
        $('#seventoten').click();
      },

      'ten plus': function() {
        $('#tenplus').click();
      },
      
      'finished': function() {
        $('#linkresult').click();
      }
      
    };
   
    
    

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }

});
