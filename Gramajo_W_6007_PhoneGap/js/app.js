// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var TroopsApp = angular.module('TroopsApp', ['ionic', 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

TroopsApp.controller('TroopsController', function($scope, $http){
  $scope.loadBlogs = function(){
    $http.get("http://troops.waltergramajo.com/").success(function(response){
      console.log(response);
      $scope.troops = response;
    })
    .finally(function(){
      $scope.$broadcast('scroll.refreshComplete');
    })
  }
})

TroopsApp.controller('DetailsController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.troopId = $routeParams.troopId;
    $http.get('details.php?troopid=' + $routeParams.troopId).success(function(response) {
      console.log(response);
      $scope.troopId = response;
  });
}]);


TroopsApp.config(function($routeProvider) {
  $routeProvider
    .when('/troop-list', {
      controller: 'TroopsController',
      templateUrl: 'partials/troop-list.html'
    })
    .when('/details/:troopId', {
      controller: 'DetailsController',
      templateUrl: 'partials/troop-detail.html'
    })
    .otherwise({ redirectTo: '/troop-list' });
});


// .config(function($stateProvider, $urlRouterProvider) {

//   $stateProvider

//     .state('index', {
//       url: "/index",
//       templateUrl: "index.html"
//     });

    
//     // if none of the above states are matched, use this as the fallback
//   $urlRouterProvider.otherwise('/index');
// });


// BlogApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/index', {
//         templateUrl: 'index.html',
//         controller: 'PhoneListCtrl'
//       }).
//       when('/phones/:phoneId', {
//         templateUrl: 'partials/phone-detail.html',
//         controller: 'PhoneDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/index'
//       });
//   }]);