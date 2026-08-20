// Exercício — De HTML Fixo para App FomeJá
// Você deverá transformar uma página estática do FomeJá em uma aplicação dinâmica utilizando JavaScript.

// 1. Categorias
// Implemente a interação dos botões de categoria:

// Ao clicar em um botão de categoria, somente ele deve receber a classe ativa.

// Os demais botões devem perder essa classe.

// A classe ativa já está definida no arquivo CSS e deve ser reutilizada.
const resultado = document.getElementById("resultado");
const categorias = document.querySelectorAll(".categoria");
categorias.
categorias.forEach((el) => {
    i
} )

console.log(resultado);
console.log(categorias);

// 2. Pedidos
// Implemente a interação dos cards e botões de pedido:

// Crie, no CSS, a classe .pedido-ativo, utilizando uma borda verde e um fundo claro.

// No JavaScript, o card clicado deve receber a classe .pedido-ativo.

// O card selecionado anteriormente deve perder essa classe.

// O botão clicado deve alterar seu estilo, utilizando fundo verde e o texto "Pedido!".

// O elemento de resultado deve ser preenchido utilizando innerHTML, com uma mensagem como: "Pedido enviado para Burger Lab!".

// 3. Técnicas obrigatórias
// A implementação deve utilizar obrigatoriamente:

// addEventListener para escutar os cliques.

// classList para adicionar e remover classes.

// style para alterar pelo menos uma propriedade CSS.

// innerHTML para montar a mensagem do pedido.

// Objetivo
// Praticar a manipulação do DOM, o gerenciamento de classes CSS, a criação de interações com eventos de clique e a atualização dinâmica do conteúdo de uma página HTML.

// // Exemplo: assim você encontra elementos na tela

// const resultado = document.getElementById("resultado");
// const categorias = document.querySelectorAll(".categoria");

// console.log(resultado);
// console.log(categorias);

// // Agora selecione os botões Pedir e continue o desafio
// //
// // Dica:
// // 1. Percorra as categorias com forEach e use addEventListener("click")
// // 2. No clique, tire a classe "ativa" de quem já tem e coloque no botão clicado
// // 3. Faça o mesmo com os botões Pedir
// // 4. No clique em Pedir: destaque o card (classList), mude o botão (style)
// //    e escreva a mensagem em #resultado (innerHTML)

