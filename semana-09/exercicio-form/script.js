const formulario = document.querySelector("form");
const trilha = document.querySelector("#trilha");

const resumo = document.createElement("section");
// Defino ID do Elemento para utilizar depois
resumo.id = "resumo";

formulario.after(resumo);

const trilhas = [
  { value: "fundamentos", label: "Fundamentos de React Native" },
  { value: "interfaces", label: "Interfaces para dispositivos móveis" },
  { value: "navegacao", label: "Navegação em aplicativos" },
];

trilhas.forEach((opcao) => {
  const option = document.createElement("option");
  option.value = opcao.value;
  option.textContent = opcao.label;
  trilha.appendChild(option);
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const temas = [];

  document
    .querySelectorAll('input[name="temas"]:checked')
    .forEach((tema) => temas.push(tema.value));

  const nivel = document.querySelector("input[name='nivel']:checked").value;

  const dados = {
    nome: document.getElementById("name").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value,
    idade: document.getElementById("age").value,
    nascimento: document.getElementById("nascimento").value,
    trilha: document.getElementById("trilha").value,
    nivel: nivel ? nivel : "Não informado",
    temas: temas,
    apresentacao: document.getElementById("apresentacao").value,
  };

  resumo.innerHTML = `
    <h2>Resumo da Inscrição: ${dados.nome}</h2>
    <p><strong>Nome Completo:</strong> ${dados.nome}</p>
    <p><strong>E-mail:</strong> ${dados.email}</p>
    <p><strong>Senha:</strong> ${dados.senha}</p>
    <p><strong>Idade:</strong> ${dados.idade}</p>
    <p><strong>Data de nascimento:</strong> ${new Date(dados.nascimento).toLocaleDateString("pt-BR")}</p>
    <p><strong>Trilha:</strong> ${dados.trilha}</p>
    <p><strong>Nível:</strong> ${dados.nivel}</p>
    <p><strong>Temas:</strong> ${dados.temas.length > 0 ? dados.temas.join(", ") : "Nenhum Informado"}</p>
    <p><strong>Apresentação:</strong> ${dados.apresentacao || "Nenhum Informada"}</p>
  `;
});
