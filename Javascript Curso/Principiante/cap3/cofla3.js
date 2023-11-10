//let celular = prompt('tienes para elegir entre los siguientes teléfonos: A10, A20, A30');

class Celular{
    constructor(peso,resolucion,pantalla,ram){
        this.peso = peso;
        this.resolucion = resolucion;
        this.pantalla = pantalla;
        this.ram = ram;
        this.info = `Los datos de este telefonos son:<br>Peso: ${this.peso}<br>Resolucion: ${this.resolucion} 
        <br>Pantalla: ${this.pantalla} <br>Ram: ${this.ram}`  
        this.encendido = false;
    }
    encender(){
        if (this.encendido == false){
            alert('celular encendido');
            this.encendido = true;
        } else {
            alert('el celular ya esta encendido')
        }
    }
    apagar(){
        if (this.encendido == true){
            alert('se apagara el celular');
            this.encendido = false;
        } else {
            alert('el celular ya esta apagado')
        }
    }
    reiniciar(){
        if (this.encendido == true){
            'Reiniciando el telefono'
        } else {
            'el celular esta apagado'
        }
    }
    tomarFoto(){
        alert('Se ha tomado una foto');
    }
    grabarVideo(){
        alert('se ha grabado un video')
    }
    mostrarInfo(){
        document.write(this.info + '<br>')
    }

}

let cel1 = new Celular(1,2,3,4)
let cel2 = new Celular(1,2,'samsung',4)
let cel3 = new Celular(1,2,3,'megapixel')

cel1.mostrarInfo();
cel2.mostrarInfo();
cel3.mostrarInfo();

cel1.encender();
cel1.apagar();
