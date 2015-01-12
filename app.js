angular.module('myApp',[])
.controller('formCtrl', function($scope) {

})
.directive('loginName', function() {
	return {
		restrict : 'E',
		transclude : true,
		template: '<div class="right"><span ng-transclude></span>!</div>',
		replace : true
	}
})