// 7.2. Crie uma função chamada calcularIdadeCanina.
//Ela deve receber dois parâmetros: nomeCachorro e idadeHumana.
//Dentro da função, calcule a idade canina (multiplicando a idadeHumana por 7).
//Retorne a Template String: "O [nomeCachorro] tem [X] anos em idade de cachorro!".
//Execute a função dentro de um console.log() passando o nome do pet e a idade dele.//
function calcularIdadeCanina (nomeCachorro, idadeHumana) {
    let calculo = idadeHumana * 7
    return `O ${nomeCachorro} tem ${calculo} anos em idade de cachorro`
} console.log(calcularIdadeCanina("Shoove", 25))
