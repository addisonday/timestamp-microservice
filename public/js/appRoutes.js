angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'public/index.html',
      controller: 'MainController'
    })

  $locationProvider.html5Mode(true);

}]);