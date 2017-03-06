angular.module("assessment").controller('shopCtrl', function($scope,$state,$stateParams,shopSrv){


  $scope.getProducts = shopSrv.getProducts
  $scope.getProducts().then(function(response){
    $scope.products = response;
    // console.log($scope.products)
  })


})
