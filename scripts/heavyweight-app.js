$(document).ready(function() {
      $.ajax({
        type: 'GET',
        //insert your the url of your JSON file hosted by github
        url: 'https://raw.githubusercontent.com/lschmidt2/interactionIII-p2/master/json-attempt',
        dataType: 'json',
        success: function(data) {

          $.each(data, function(i, beer) {
                if (beer.abv >= 0 && beer.abv <= 7) {
                  $('.beercontainergood').append("<div>" + beer.nameOfBeer + "</div");
                } else if (beer.abv >= 7.1 && beer.abv <= 11) {
                  $('.beercontainermedium').append("<div>" + beer.nameOfBeer + "</div");
                } else(beer.abv >= 11.1 && beer.abv <= 15)
                $('.beercontainerbad').append("<div>" + beer.nameOfBeer + "</div");

              });



            }
          });

      });
