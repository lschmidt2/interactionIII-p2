$(document).ready(function() {

  var userDamage = 0;

  function handleBoxClick() {
var abvNumber = parseInt($(this).attr('data-abv'));

      if (abvNumber >= 0 && abvNumber <= 7) {
        $('.beerresults').html('<div class="damage">Damage to Your Body</div><div class="quarter"> </div>');
      } else if (abvNumber >= 7.01 && abvNumber <= 12) {
        $('.beerresults').html('<div class="damage">Damage to Your Body</div><div class="half"> </div>');
      } else if (abvNumber >= 12.01 && abvNumber <= 18) {
        $('.beerresults').html('<div class="damage">Damage to Your Body</div><div class="threequarter"> </div>');
      } else {
        $('.beerresults').html('<div class="damage">Damage to Your Body</div><div class="full"> </div>');
      }
    }

  $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/lschmidt2/interactionIII-p2/master/json-attempt',
    dataType: 'json',
    success: function(data) {
      $.each(data, function(i, beer) {
        $('.beercontainer').append('<div data-abv="' + beer.abv + '" class="box">' + beer.nameOfBeer + '</div>');
      });

$('.box').click(handleBoxClick);
    },
  });

  $('.box').click(handleBoxClick);
  
});