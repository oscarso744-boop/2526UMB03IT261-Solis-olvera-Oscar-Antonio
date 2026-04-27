angular.module('app').controler('index', index);
index.$inject = ['$scope', '$log'];
function index($scope){
    console.log('controlador')
    $scope.mensaje1 = " hola soy una variable desde el controlador ";
    alert ("hola")
}