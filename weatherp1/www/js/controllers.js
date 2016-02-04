weatherApp.controller('MainCtrl', function ($scope, $state, WeatherData) {
	var latitude  = 42.589611;
	var longitude = -70.819806;

	//call getCurrentWeather method in factory
	WeatherData.getCurrentWeather(latitude,longitude).then(function (resp) {
	    $scope.weather = resp.data;
	    console.log('GOT CURRENT', $scope.weather);
	}, function(error) {
	    alert('Unable to get current conditions');
	    console.error(error);
	});
    }
);






