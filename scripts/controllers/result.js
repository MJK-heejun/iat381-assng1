'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('vancouverApp')
  .controller('ResultCtrl', function ($scope, globals, score, $location) {

    $("#header-text").text("Result");
    $("#big-home img").click(function(){
        $location.path('/home');
        $scope.$apply();
    });

    $scope.pageClass = "page-result";
    $scope.lions = false;

    //retrive the result
    $scope.total_current_category_score = score.getFinalScore(globals.current_category);


    $scope.q_lists = globals.q_lists;
    $scope.q_index = 0;
    $scope.q_index_assign = 0;
    $scope.q_length = $scope.q_lists.length;

    $scope.swipeAction = function(num){
      $scope.q_index += num;
      if($scope.q_index < 0)
        $scope.q_index = $scope.q_length - 1;
      else if($scope.q_index >= $scope.q_length)
        $scope.q_index = 0;   

    };

    $scope.isCurrentIndex = function(index){
      if(index == $scope.q_index)
        return true;
      else
        return false;
    };





    

    //if -1, it means that the user refreshed or manually opened the page
    if($scope.total_current_category_score == -1){
      //navigate back to home
      $location.path('/home');
    }



  });
