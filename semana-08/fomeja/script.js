// Exercício — De HTML Fixo para App FomeJá
// Você deverá transformar uma página estática do FomeJá em uma aplicação dinâmica utilizando JavaScript.

// 1. Categorias
// Implemente a interação dos botões de categoria:

// Ao clicar em um botão de categoria, somente ele deve receber a classe ativa.

// Os demais botões devem perder essa classe.

// A classe ativa já está definida no arquivo CSS e deve ser reutilizada.

// 2. Pedidos
// Implemente a interação dos cards e botões de pedido:

// Crie, no CSS, a classe .pedido-ativo, utilizando uma borda verde e um fundo claro.

// No JavaScript, o card clicado deve receber a classe .pedido-ativo.

// O card selecionado anteriormente deve perder essa classe.

// O botão clicado deve alterar seu estilo, utilizando fundo verde e o texto "Pedido!".

// O elemento de resultado deve ser preenchido utilizando innerHTML,
// com uma mensagem como: "Pedido enviado para Burger Lab!".

// 3. Técnicas obrigatórias
// A implementação deve utilizar obrigatoriamente:

// addEventListener para escutar os cliques.

// classList para adicionar e remover classes.

// style para alterar pelo menos uma propriedade CSS.

// innerHTML para montar a mensagem do pedido.

// Objetivo
// Praticar a manipulação do DOM, o gerenciamento de classes CSS,
// a criação de interações com eventos de clique e a atualização dinâmica do conteúdo de uma página HTML.

const categorias = document.querySelectorAll(".categoria");
const botoesPedir = document.querySelectorAll(".botao-pedir");
const resultado = document.getElementById("resultado");

console.log(categorias);

categorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const ativa = document.querySelector(".categoria.ativa");

    if (ativa) {
      ativa.classList.remove("ativa");
    }

    botao.classList.add("ativa");
  });
});

botoesPedir.forEach((botao) => {
  botao.addEventListener("click", () => {
    const cardAtivo = document.querySelector(".pedido-ativo");
    const botaoAtivo = document.querySelector(".botao-pedir.pedido-confirmado");
    const card = botao.closest(".restaurante-card");
    const restaurante = card.querySelector(".nome-restaurante").textContent;

    if (cardAtivo) {
      cardAtivo.classList.remove("pedido-ativo");
    }

    if (botaoAtivo) {
      botaoAtivo.classList.remove("pedido-confirmado");
      botaoAtivo.textContent = "Pedir";
      botaoAtivo.style.backgroundColor = "";
    }

    card.classList.add("pedido-ativo");
    botao.classList.add("pedido-confirmado");
    botao.textContent = "Pedido!";
    botao.style.backgroundColor = "#16a34a";
    resultado.innerHTML = `Pedido enviado para <strong>${restaurante}</strong>!`;
  });
});
