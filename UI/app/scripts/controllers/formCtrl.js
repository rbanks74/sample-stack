
var myApp = angular.module( 'myApp', [] );

myApp.controller('formCtrl', ['$scope', function($scope){

	var phoneReg = '/^\+?\d{3}[- ]?\d{3}[- ]?\d{4}$/',
		dateReg = '/^\+?\d{2}[- ]?\d{2}[- ]?\d{4}$/'; 




	$scope.user = {};
	$scope.user.limit = 13;
	$scope.user.text = '';
	$scope.user.phoneNumber = '';
	$scope.user.pattern = phoneReg;
	$scope.user.items = [
		'salad',
		'fries',
		'fruit'
	];
}]);