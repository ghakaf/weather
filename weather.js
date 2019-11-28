<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="owmApiKey.js" type="text/javascript"></script>	

function getWeather(searchQuery) {
  $(".error-message").text("");
  $(".city-name").text("");
  $(".temp").text("");
  $(".description").text("");
  $(".weather-main").text("");
  $(".temp").text(""); 
  

	 var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID="+myApiKey;

    $.ajax(url, {

      success: function(result) {

		
        $( ".city-name" ).text("City: " + result.name);
		        
        $(".description").text("Description: " + (result.weather && result.weather[0] && result.weather[0].description));

        $(".weather-main").text("Main forecast: " + (result.weather && result.weather[0] && result.weather[0].main));
		
		$(".wind-speed").text("Wind speed: " + result.wind.speed);
		$(".temp").text("Temp: " + result.main.temp + " C");
		$(".country").text("Country: " + result.sys.country);
		
      },
      error: function(result) {
        console.log('error', result)
        $(".error").text(result.error)
      }
    });
  }
  
function searchWeather() {
  var searchQuery = $('.search').val(); // grab value from search input
  getWeather(searchQuery);
}
