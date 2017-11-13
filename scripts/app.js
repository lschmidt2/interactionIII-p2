$(document).ready(function() {
  
  var userScore = 0;

$('.answer').click(function() {
	var answerNumber = parseInt($(this).attr('data-number'));
	userScore = userScore + answerNumber;
	$('#total').text(userScore);
	$(this).addClass("clicked");
})

  
  
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
      
      'other': function() {
	    $('#other').click();
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

         $('body').scrollTo($('#results-panel'), 1000, function() {});
        
        var resultPage;
		var cur = parseInt($('.equation').text());

		if (cur >= 0 && cur <= 6) {
			resultPage = 'heavy';
		} else if (cur >= 6.1 && cur <= 17) {
			resultPage = 'medium';
		} else {
			resultPage = 'light';
		}
		
        displayResults(resultPage);
      },
      
      'start over': function() {
	  	location.reload();
	  	$(window).scrollTop(0);

      }
    };
   
    
    

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
  
  
  var displayResults = function(resultPage) {


	  $.ajax({
	    type: 'GET',
	    //insert your the url of your JSON file hosted by github
	    url: 'https://raw.githubusercontent.com/lschmidt2/interactionIII-p2/master/json-attempt',
	    dataType: 'json',
	    success: function(data) {
				
			
			$('#results-panel').fadeIn();
				
			if (resultPage == 'light') {
			      $.each(data, function(i, beer) {
			        if (beer.abv >= 0 && beer.abv <= 1) {
			          $('.beercontainer-1').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 1.1 && beer.abv <= 2) {
			          $('.beercontainer-2').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 2.1 && beer.abv <= 3) {
			          $('.beercontainer-3').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 3 && beer.abv <= 4) {
			          $('.beercontainer-4').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 4.1 && beer.abv <= 6) {
			          $('.beercontainer-5').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 6.1 && beer.abv <= 8) {
			          $('.beercontainer-6').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 8.1 && beer.abv <= 11.5) {
			          $(".beercontainer-7 ").append("<div> " + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 11.51 && beer.abv <= 13.3) {
			          $('.beercontainer-8').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 13.31 && beer.abv <= 15.1) {
			          $('.beercontainer-9').append("<div>" + beer.nameOfBeer + "</div");
			        } else {
			          $('.beercontainer-10').append("<div>" + beer.nameOfBeer + "</div");
			        }
			      });
			} else if (resultPage == 'medium') {
			      $.each(data, function(i, beer) {
			        if (beer.abv >= 0 && beer.abv <= 1.7) {
			          $('.beercontainer-1').append("<div class='abvresults'>ABV 0-1</div>" , "<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 1.71 && beer.abv <= 3.5) {
			          $('.beercontainer-2').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 3.51 && beer.abv <= 5.3) {
			          $('.beercontainer-3').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 5.31 && beer.abv <= 7) {
			          $('.beercontainer-4').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 7.1 && beer.abv <= 8.8) {
			          $('.beercontainer-5').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 8.81 && beer.abv <= 10.6) {
			          $('.beercontainer-6').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 10.61 && beer.abv <= 12.5) {
			          $(".beercontainer-7 ").append("<div> " + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 12.51 && beer.abv <= 14.3) {
			          $('.beercontainer-8').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 14.31 && beer.abv <= 16.1) {
			          $('.beercontainer-9').append("<div>" + beer.nameOfBeer + "</div");
			        } else {
			          $('.beercontainer-10').append("<div>" + beer.nameOfBeer + "</div");
			        }
			      });
			} else if (resultPage == 'heavy') {
			      $.each(data, function(i, beer) {
			        if (beer.abv >= 0 && beer.abv <= 9) {
			          $('.beercontainer-1').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 9 && beer.abv <= 13) {
			          $('.beercontainer-2').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 13.1 && beer.abv <= 15) {
			          $('.beercontainer-3').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 15.1 && beer.abv <= 16) {
			          $('.beercontainer-4').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 16.1 && beer.abv <= 17) {
			          $('.beercontainer-5').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 17.1 && beer.abv <= 18) {
			          $('.beercontainer-6').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 18.1 && beer.abv <= 19) {
			          $(".beercontainer-7 ").append("<div> " + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 19.1 && beer.abv <= 20) {
			          $('.beercontainer-8').append("<div>" + beer.nameOfBeer + "</div");
			        } else if (beer.abv >= 20.1 && beer.abv <= 20) {
			          $('.beercontainer-9').append("<div>" + beer.nameOfBeer + "</div");
			        } else {
			          $('.beercontainer-10').append("<div>" + beer.nameOfBeer + "</div");
			        }
			      });
			}
		
	    }
	
	  });
	  
	  
  }

});
