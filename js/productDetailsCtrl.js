angular.module("assessment").controller('productDetailsCtrl', function($scope,$state,$stateParams,shopSrv){
  $scope.idx = $stateParams.productID
  console.log($scope.idx)
  $scope.getProductById = shopSrv.getProductById
  $scope.getProductById($scope.idx).then(function(response){
    $scope.productById = response;
  })
})
