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
          $(".beercontainer-7 ").append(" < div > " + beer.nameOfBeer + " < /div");
        } else if (beer.abv >= 12.51 && beer.abv <= 14.3) {
          $('.beercontainer-8').append("<div>" + beer.nameOfBeer + "</div");
        } else
        if (beer.abv >= 14.31 && beer.abv <= 16.1) {
          $('.beercontainer-9').append("<div>" + beer.nameOfBeer + "</div");
        } else {
          $('.beercontainer-10').append("<div>" + beer.nameOfBeer + "</div");
        }
      });
    }

  });
});
