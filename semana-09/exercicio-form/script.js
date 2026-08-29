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

  const dadosFormulario = new FormData(formulario);

  const nome = dadosFormulario.get("nome");
  const email = dadosFormulario.get("email");
  const senha = dadosFormulario.get("senha");
  const idade = dadosFormulario.get("idade");
  const nascimento = dadosFormulario.get("nascimento");
  const trilhaSelecionada = dadosFormulario.get("trilha");
  const nivel = dadosFormulario.get("nivel");
  const apresentacao = dadosFormulario.get("apresentacao");
  const temas = dadosFormulario.getAll("temas");

  document.querySelectorAll(".input-error").forEach((campo) => {
    campo.classList.remove("input-error");
  });

  document.querySelectorAll(".mensagem-erro").forEach((mensagem) => {
    mensagem.remove();
  });

  const erros = [];
  const possuiNumero = /\d/.test(senha);

  if (senha.length < 8) {
    erros.push({
      campo: document.getElementById("senha"),
      mensagem: "A senha deve ter pelo menos 8 caracteres.",
    });
  }

  if (!possuiNumero) {
    erros.push({
      campo: document.getElementById("senha"),
      mensagem: "A senha deve conter pelo menos um número.",
    });
  }

  if (temas.length === 0) {
    erros.push({
      campo: document.querySelector('input[name="temas"]'),
      mensagem: "Selecione pelo menos um tema de interesse.",
    });
  }

  if (apresentacao.trim().length < 20) {
    erros.push({
      campo: document.getElementById("apresentacao"),
      mensagem: "A apresentação deve ter pelo menos 20 caracteres.",
    });
  }

  if (erros.length > 0) {
    erros.forEach((el) => {
      el.campo.classList.add("input-error");
      const mensagem = document.createElement("span");
      mensagem.className = "mensagem-erro";
      mensagem.textContent = el.mensagem;
      const elementoMensagem = el.campo.closest("fieldset") || el.campo;
      elementoMensagem.after(mensagem);
    });

    return;
  }

  const dados = {
    nome,
    email,
    senha,
    idade,
    nascimento,
    trilha: trilhaSelecionada,
    nivel,
    temas,
    apresentacao,
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
