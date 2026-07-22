//2. Verificação de Acesso (Operador &&)
//Crie duas variáveis: idade e temConvite (booleano). Escreva um if/else: para acessar a festa, a pessoa precisa ter 18 anos
//  ou mais E (&&) ter convite (true). Exiba "Acesso liberado" ou "Acesso negado".
let idade = 18;
let temConvite = true;
if (idade >= 18 && temConvite) {
    console.log("Acesso Liberado")
} else {
    console.log("Acesso Negado")
}