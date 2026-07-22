//4. Validação com Truthy/Falsy
//Crie uma variável nomeUsuario = "". Use uma estrutura if/else testando apenas a variável 
// (if (nomeUsuario)). Se for truthy, exiba "Bem-vindo, [nomeUsuario]". Se for falsy, exiba "Por favor, digite seu nome.".
const nomeUsuario = "";
if (nomeUsuario) {
    console.log(`Bem vindo, ${nomeUsuario}`)
} else {
    console.log("Por favor, digite o seu nome")
}