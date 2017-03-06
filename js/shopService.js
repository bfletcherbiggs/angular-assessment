angular.module("assessment").service('shopSrv', function($http,$q){

  this.getProducts = function(){
    return $http.get('http://practiceapi.devmounta.in/products').then(function(response){
      return response.data
    })
  }

  this.getProductById = function(idx){
    return $http.get('http://practiceapi.devmounta.in/products/'+idx).then(function(response){
      return response.data
    })
  }

})
