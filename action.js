var app = angular.module('llama_app', [])

app.controller('llama_controller', function ($scope, $http) {


$(".show_answer").hide();

    $scope.power = function () {
        console.log("hello");
        // var p = ((((num) * ((neck_length * velocity) / length)) * ((num) * ((neck_length * velocity) / length))) / ((age / 100) * level));

       $scope.i= ($scope.neck_length * $scope.velocity)/ $scope.length;
      $scope.j= ($scope.age / 100) * $scope.level;
       
       $scope.p= ($scope.i*$scope.i)/$scope.j;
       
       console.log( $scope.p);
       console.log( $scope.i);
       console.log( $scope.j);
       
       
$(".show_answer").show();

// console.log(p);    



}


 
     


});