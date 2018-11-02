'use strict';

// Define the `phonecatApp` module
var cinemaApp = angular.module('cinemaApp', []);

// Controller to retreive a film
cinemaApp.controller('FilmController1', function FilmController1($scope,$http) {
  $scope.films = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM� with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM�',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

$scope.update = function(user) {
        //$scope.master = angular.copy(user);
		console.log($scope.rate)
		console.log(($scope.selectedFilm))
		$http.put('/api/cinema/film', {title:($scope.selectedFilm)['title'],rate:$scope.rate}, 'json').then(function (response) {
      // Drawback: instead of page reloading it can be handled in a better way
   location.reload()
// This function handles success
}, function (response) {
// this function handles error
});};

$http.get("/api/cinema/all")
  .then(function(response) {
      $scope.message = response.data['message'];
	  $scope.test='hello'
	  
  });


});

// Controller to add a film
cinemaApp.controller('FilmController2', function FilmController2($scope,$http) {
  $scope.films = [
    {
      name: 'Nedddddddd',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM� with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM�',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  $scope.add = function(user) {
        //$scope.master = angular.copy(user);
		console.log('{' + 'title:' + $scope.title+','+'year:'+$scope.year+','+'kind:'+$scope.kind+','+'natio:'+$scope.nationality+'}')

    $http({
  method: 'POST',
  url: '/api/cinema/film',
  data: JSON.stringify({title:$scope.title,year:$scope.year,kind:$scope.kind,natio:$scope.nationality})
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
   // Drawback: instead of page reloading it can be handled in a better way
   location.reload()

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.

  });

    
		};
  
});

// Controller to update/delete a film
cinemaApp.controller('FilmController3', function FilmController3($scope,$http) {
  $scope.films = [
    {
      name: 'Nedddddddd',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM� with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM�',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];


 $http({
  method: 'GET',
  url: '/api/cinema/all',
  
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.message = response.data['message'];

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.

  });

  console.log($scope.selectedFilm)



  $scope.modify = function(user) {
        //$scope.master = angular.copy(user);
		console.log('{' + 'title:' + $scope.selectedFilm.title+','+'year:'+$scope.selectedFilm.year+','+'kind:'+$scope.selectedFilm.kind+','+'nation:'+$scope.selectedFilm.natio+'}')

    $http({
  method: 'POST',
  url: '/api/cinema/film',
  data: JSON.stringify({title:$scope.selectedFilm.title,year:$scope.selectedFilm.year,kind:$scope.selectedFilm.kind,natio:$scope.selectedFilm.natio})
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    /*
        message = response.data['message'];
        if(response.data['message'] == 'SUCCESS'){
          console.log('SUCCESS')

        }
        */

        // Drawback: instead of page reloading it can be handled in a better way
   location.reload()
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.

  });

    
		};

    $scope.delete = function(user) {
      console.log('{' + 'title:' + $scope.selectedFilm.title+'}')

      $http({
  method: 'DELETE',
  url: '/api/cinema/film',
  //params: JSON.stringify({title:$scope.selectedFilm.title,year:$scope.selectedFilm.year,kind:$scope.selectedFilm.kind,natio:$scope.selectedFilm.natio})
  params: {title: $scope.selectedFilm.title}

}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    // Drawback: instead of page reloading it can be handled in a better way
   location.reload()

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.

  });





    }

    



  
});


