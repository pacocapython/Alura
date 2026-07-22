//10. Formatador de Texto
//Crie uma Arrow Function chamada formatarTexto que receba uma string. Ela deve retornar o texto em letras minúsculas
// (usando .toLowerCase()) e exibir quantos caracteres ele tem (usando .length).
const formatarTexto = string => {
    return `texto: ${string.toLowerCase()} tamanho: ${string.length}`;
}
console.log(formatarTexto('Oi GALERA'))