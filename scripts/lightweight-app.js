$(document).ready(function() {
      $.ajax({
        type: 'GET',
        //insert your the url of your JSON file hosted by github
        url: 'https://raw.githubusercontent.com/lschmidt2/interactionIII-p2/master/json-attempt',
        dataType: 'json',
        success: function(data) {

          $.each(data, function(i, beer) {
                if (beer.abv >= 0 && beer.abv <= 7) {
                  $('.beercontainer-1').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 7.1 && beer.abv <= 11) {
                  $('.beercontainer-2').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainer-3').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainer-4').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainer-5').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainer-6').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainer-7').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainer-8').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainer-9').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainer-10').append("<div>" + beer.nameOfBeer + "</div");

              });



            }
          });

      });
