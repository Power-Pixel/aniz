var myApp=angular.module("myApp",[]); 
myApp.controller("prueba", function($scope) {
$scope.formulario=function(){
	$scope.NombreCompleto=$scope.Nombre+" "+$scope.Apellido;
}	

})
