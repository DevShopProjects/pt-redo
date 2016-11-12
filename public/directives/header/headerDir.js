angular.module('WWRehabApp')
  .directive('pageHeader', function () {
    return {
      restrict: 'E',
      templateUrl: './directives/header/headerTemplate.html'
    }

  });
