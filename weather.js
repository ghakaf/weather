// This function gets a text input and passes it to form the URL needed to get the entered city weather 
// from the openweathermap.org api and then displaying the results

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
	$(".country").text("Country: " + result.sys.country);        
	$(".weather-main").text("Main forecast: " + (result.weather && result.weather[0] && result.weather[0].main));
	$(".description").text("Description: " + (result.weather && result.weather[0] && result.weather[0].description));
	$(".wind-speed").text("Wind speed: " + result.wind.speed);
	$(".temp").text("Temp: " + result.main.temp + " C");

      },
      error: function(result) {
        console.log('error', result)
        $(".error").text(result.error)
      }
    });
  }
  
function searchWeather() {
  var searchQuery = $('.search').val();
  getWeather(searchQuery);
}
