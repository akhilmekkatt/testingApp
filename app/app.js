var app = angular.module('myTestingApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
}).filter("reverse",[function(){
    return function(string)
    {
        return string.split('').reverse().join('');
    }

}]);