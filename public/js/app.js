angular.module('PTApp', ['ui.router'])

.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'features/home/homeView.html',
      caseInsenstive: true,
      controller: 'homeCtrl'
    })

  $locationProvider.html5Mode(true);
});
