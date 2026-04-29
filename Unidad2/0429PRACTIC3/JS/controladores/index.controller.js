angular.module('app').controller('Index', Index);

Index.$inject = ['$scope', '$log'];

function Index($scope, $log) {

    $scope.formConsultaRuta = {
        fechaInicio: '',
        fechaFin: '',
        idProveedor: '',
        idAutomovil: '',
        idDriver: '',
        idRuta: '',
    }

    $scope.imprimirMensaje = () => {
        console.log($scope.formConsultaRuta);
    }

    $scope.optionEjemplo = {
        etiqueta: 'chevy',
        valor: 69
    }

    $scope.optionAutos = [ 
         {
        etiqueta: 'chevy',
        valor: 1
    },
       {
        etiqueta: 'camaro',
        valor: 2
    },
           {
        etiqueta: 'suburban',
        valor: 3
    },
           {
        etiqueta: 'aveo',
        valor: 4
    },
    ];
        $scope.optionProvedores = [ 
         {
        etiqueta: 'Panfilo',
        valor: 1
    },
       {
        etiqueta: 'Carlos',
        valor: 2
    },
           {
        etiqueta: 'Tomas',
        valor: 3
    },
           {
        etiqueta: 'Juan',
        valor: 4
    },
    ];
        $scope.optionDrivers = [ 
         {
        etiqueta: 'Marco',
        valor: 1
    },
       {
        etiqueta: 'Jhonas',
        valor: 2
    },
           {
        etiqueta: 'Charly',
        valor: 3
    },
           {
        etiqueta: 'Pedro',
        valor: 4
    },
    ];


}


