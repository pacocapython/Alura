//1. Desconto na Loja
//Crie uma variável valorCompra = 120. Se o valor for maior ou igual a 100, aplique 10% de desconto (multiplicando por 0.9) 
// e exiba no console via template string: "Valor com desconto: R$ X". Senão, exiba "Valor sem desconto: R$ X".
let valorCompra = 120;
if (valorCompra >= 100) {
   const desconto = valorCompra * 0.9;
    console.log(`Valor com desconto: R$ ${desconto}`)
} else {
    console.log(`Valor sem desconto: R$ ${valorCompra}`)
}