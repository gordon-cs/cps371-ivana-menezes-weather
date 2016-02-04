weatherApp.factory('WeatherData', function($http, ForecastApiKey) {
	var url = 'https://api.forecast.io/forecast/' + ForecastApiKey + '/';

	return {
	    getCurrentWeather: function(lat, lng) {
        return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
      }
  }
});
