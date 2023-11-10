class animal {
    constructor(especie,edad,color){
        this.especie = especie; 
        this.edad = edad;
        this.color = color
    }
    verInfo(){
        document.write(this.especie)
    }
}

let perro = new animal('perro',5,'rojo');

document.write(perro.color + '<br>');  
console.log(perro.color)

perro.verInfo();