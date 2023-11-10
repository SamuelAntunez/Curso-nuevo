const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Pepe'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
]
const salarios = [
    {
        id: 1,
        nombre: 1000
    },
    {
        id: 2,
        nombre: 2000
    },
    {
        id: 3,
        nombre: 3000
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => {
        return e.id === id
    })?.nombre;

    if (empleado ){
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find( (e) => e.id === id)?.nombre

    if (salario) {
        callback(null, salario)
    } else {
        callback(`No hay salario existente con el id ${id}`)
    }
}

const id = 2

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if (err) {
            console.log('ERROR!');
            return console.log(err);
        }
        console.log('El empleado:', empleado + ' tiene un salario de: ' + salario)
    })
}) 

