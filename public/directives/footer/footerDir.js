angular.module('PTApp')
	.directive('pageFooter', function () {
		return {
			restrict: 'E'
			, templateUrl: './directives/footer/footerTmpl.html'
		}

	});
