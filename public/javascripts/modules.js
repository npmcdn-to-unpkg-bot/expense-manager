var myApp = angular.module('myApp', [
    'ngRoute',
    'expenseControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/list',
            controller: 'ListController'
        })
        .when('/details/:id', {
            templateUrl: 'partials/details',
            controller: 'DetailsController'
        })
        .when('/add', {
            templateUrl: 'partials/add',
            controller: 'AddController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);