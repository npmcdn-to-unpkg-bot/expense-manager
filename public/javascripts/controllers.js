var expenseControllers = angular.module('expenseControllers', []);

expenseControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/api/expenses')
        .success(function (data) {
            $scope.expenses = data;
            $scope.expenseOrder = 'expense';
        })
        .error(function (error) {
            console.log(error);
        });
}]);

expenseControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    var id = $routeParams.id;

    $http.get('/api/expenses/'+id)
        .success(function (data) {
            console.log(data);
            $scope.expense = data;
        })
        .error(function (error) {
            console.log(error);
        });
}]);

expenseControllers.controller('AddController', ['$scope', '$http', '$window', function ($scope, $http, $window) {

    $scope.save = function (data) {
        $http.post('/api/expenses', data)
            .success(function () {
                $window.location.href = '#/list';
            })
            .error(function () {
                console.log(error);
            });
    }

    // $http.get('/api/expenses/'+id)
    //     .success(function (data) {
    //         console.log(data);
    //         $scope.expense = data;
    //     })
    //     .error(function (error) {
    //         console.log(error);
    //     });
}]);
