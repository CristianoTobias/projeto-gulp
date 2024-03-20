// Solicitar ao usuário que insira seu nome
var nome = prompt("Por favor, digite seu nome:");

// Verificar se o usuário inseriu um nome
if (nome) {
    // Exibir mensagem de boas-vindas com o nome do usuário
    alert("Olá, " + nome + "! Bem-vindo!");
} else {
    // Exibir mensagem caso o usuário não tenha inserido um nome
    alert("Você não inseriu um nome. Por favor, recarregue a página e tente novamente.");
}