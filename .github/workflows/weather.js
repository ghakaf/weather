$(document).ready(function() {
  $("#weather_button").click(function(e) {
    console.log(e)
    e.preventDefault();
    $.ajax({
      type: "POST",
      data: 'json',
      url: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=f6acca7e7573d55ea30edb9aa6fc28af',
      success: function(result) {
        console.log(result)
		
        $( ".city-name" ).text(result.name);
		        
        $(".description").text(result.weather && result.weather[0] && result.weather[0].description);

        $(".weather-main").text(result.weather && result.weather[0] && result.weather[0].main);
        $(".description").text(result.weather && result.weather[0] && result.weather[0].description);
		
		$(".wind-speed").text(result.wind.speed);
		$(".wind-deg").text(result.wind.deg);
		
      },
      error: function(result) {
        console.log('error', result)
        $(".error").text(result.error)
      }
    });
  });
});