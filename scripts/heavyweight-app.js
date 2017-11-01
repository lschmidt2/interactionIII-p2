$(document).ready(function() {
      $.ajax({
        type: 'GET',
        //insert your the url of your JSON file hosted by github
        url: 'https://raw.githubusercontent.com/lschmidt2/interactionIII-p2/master/json-attempt',
        dataType: 'json',
        success: function(data) {

         $.each(data, function(i, beer) {
                if (beer.abv >= 0 && beer.abv <= 1.7) {
                  $('.beercontainer-1').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 1.8 && beer.abv <= 3.5) {
                  $('.beercontainer-2').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 3.6 && beer.abv <= 5.3)
                $('.beercontainer-3').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 5.4 && beer.abv <= 7)
                $('.beercontainer-4').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 7.1 && beer.abv <= 8.8)
                $('.beercontainer-5').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 8.9 h && beer.abv <= 10.6)
                $('.beercontainer-6').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 10.7 && beer.abv <= 12.5)
                $('.beercontainer-7').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 12.6 && beer.abv <= 14.3)
                $('.beercontainer-8').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 16.1 && beer.abv <= 17.8)
                $('.beercontainer-9').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 17.9 && beer.abv <= 18.5)
                $('.beercontainer-10').append("<div>" + beer.nameOfBeer + "</div");

              });



            }
          });

      });
