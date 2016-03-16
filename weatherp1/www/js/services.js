weatherApp.factory('WeatherData', function($http, ForecastApiKey, ApiCallFactory) {
	var url = 'https://api.forecast.io/forecast/' + ForecastApiKey + '/';
	//var forecast = {};

	return {
	    getCurrentWeather: function(lat, lng) {
        return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
      }
  }



  // sample code, probably not right yet

   var now = new Date();
   var today = now.getDay();  // 0 for Sunday, 1 for Monday, etc.
   var dayNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var todayName = dayNames[today];




  ApiCallFactory.then(function (response) {
         var data = response.data;
         console.log(data);

         //today
         forecast.today = {
             day: data.daily.data[0].time * 1000,
             state: normalizeState(data.currently.icon, true),
             precipitation: Math.round(data.currently.precipProbability * 100),
             humidity: Math.round(data.currently.humidity * 100),
             currentTemp: Math.round(data.currently.apparentTemperature),
             windSpeed: Math.round(data.currently.windSpeed)
         };

         //week
         forecast.week = new Array();

         for (var i = 0; i < 7; i++) {
             forecast.week.push({
                 day: data.daily.data[i].time * 1000,
                 state: normalizeState(data.daily.data[i].icon, false),
                 high: Math.round(data.daily.data[i].temperatureMax),
                 low: Math.round(data.daily.data[i].temperatureMin),
                 precipitation: Math.round(data.daily.data[i].precipProbability * 100),
                 humidity: Math.round(data.daily.data[i].humidity * 100),
                 windSpeed: Math.round(data.daily.data[i].windSpeed)
             });


         };

         $ionicLoading.hide();
     }, function(error) {
         console.log(error);
         $ionicLoading.hide();
     });


     /* Converts the state of a day to a known state if different */
    /* function normalizeState(state, today) {
         var newState = state;
         if(!today) {
             if(state == 'clear-night') {
                 newState = 'clear-day';
             }
             else if (state == 'partly-cloudy-night') {
                 newState = 'partly-cloudy-day';
             }
         }
         if (state == 'sleet') {
             newState = 'snow';
         }
         else if (state == 'wind' || state == 'fog') {
             newState = 'cloudy';
         }
         return newState;
     };*/

     return forecast;




  }

  );
