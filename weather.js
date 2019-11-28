// This function first resets the text fields to have no content.
// Then, it creates the URL to send to OpenWeatherMap, including the content from the page's 
//    search field.
// Then, it performs an AJAX call to that URL.
// If it's successful, the function takes the JSON data that was returned, and pulls the name 
//    and temperature out of the object, then uses jQuery to display them on the page.
// If there is an error, it shows an error message instead.
function getWeather(searchQuery) {
  $(".error-message").text("");
  $(".city-name").text("");
  $(".temp").text("");
  $(".description").text("");
  $(".weather-main").text("");
  $(".temp").text(""); 
  

	 var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID=f6acca7e7573d55ea30edb9aa6fc28af";

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