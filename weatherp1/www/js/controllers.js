weatherApp.controller('MainCtrl', function ($scope, $state, WeatherData) {
	var latitude  = 42.589611;
	var longitude = -70.819806;

	var weather = this;

	//call getCurrentWeather method in factory
	WeatherData.getCurrentWeather(latitude,longitude).then(function (resp) {
	    $scope.weather = resp.data;
	    //$scope.todayName = getTodayName();
	    console.log('GOT CURRENT', $scope.weather);
	}, function(error) {
	    alert('Unable to get current conditions');
	    console.error(error);
	});

	 //weather.forecast = WeatherData;


    }
);






