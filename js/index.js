$(document).ready(function() { // Função para gerar um número aleatório maior que o último número gerado
 function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Obtém a última contagem de alunos do armazenamento local ou define como 0 se não existir
  var ultimoNumero = parseInt(localStorage.getItem('ultimoNumero')) || 0;

  // Incrementa o último número gerado para a próxima contagem
  var novoNumero = ultimoNumero + 1;

  // Atualiza o texto da badge com o novo número
  document.getElementById('contador-alunos').textContent = novoNumero;

  // Armazena o novo número gerado no armazenamento local para a próxima vez que a página for carregada
  localStorage.setItem('ultimoNumero', novoNumero);


  $('ul>li:even').css('color', '#00f08e')

});