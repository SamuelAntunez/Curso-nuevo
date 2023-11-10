let juan = 0;
let pedro = 0;
let pepe = 0;

juan = parseInt(prompt('Cuanto dinero tienes?'))
pedro =  parseInt(prompt('Cuanto dinero tienes?'))
pepe =  parseInt(prompt('Cuanto dinero tienes?'));




let total = juan + pedro + pepe
document.write(total)
const chocolate = 100;
const vainilla = 80;
const oreo = 100;
const mantecado = 90;

if (total >= chocolate && chocolate === oreo) {
    let vuelto = total - chocolate
    alert(`El helado mas caro que puedes comprar es el de Chocolate o el Oreo y tienes un vuelto de ${vuelto} bolivares`)
} else if (total >= mantecado && total <= chocolate) {
    alert('El helado mas caro que puedes comprar es el mantecado')
} else if (total >= vainilla && total <= mantecado) {
    alert('El helado mas caro que puedes comprar es el de vainilla')
} else {
    alert('No tienes suficiente dinero')
}