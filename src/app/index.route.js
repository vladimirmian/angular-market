(function() {
  'use strict';

  angular
    .module('angularMarket')
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .state('nav', {
          url: '/nav',
          templateUrl: 'app/nav/nav.html',
          controller: 'navcontroller',
          controllerAs: 'nav'
        })
    });
})();
