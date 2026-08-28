/*
  FIXAÇÃO — createElement vs innerHTML vs textContent

  createElement
    Use quando o elemento AINDA NÃO existe no HTML.
    Nesta página: as <option> do select, a seção de resumo e o botão de limpar.
    Você ganha uma variável do elemento e pode usar appendChild e addEventListener.

  innerHTML
    Use quando o container JÁ existe e você só quer preencher o visual
    (título + parágrafos). Ele SUBSTITUI tudo que estava dentro.
    Por isso o botão NÃO vai no innerHTML: o clique se perderia no próximo envio.

  textContent
    Use quando o conteúdo é só texto, sem tag HTML.
*/

const formulario = document.querySelector("form");
const trilha = document.querySelector("#trilha");

const trilhas = [
  { value: "fundamentos", label: "Fundamentos de React Native" },
  { value: "interfaces", label: "Interfaces para dispositivos móveis" },
  { value: "navegacao", label: "Navegação em aplicativos" },
];

// -----------------------------------------------------------------------------
// 1. Options do select → createElement
//    Os dados vêm de um array. Cada item vira um <option> de verdade.
//    Evite innerHTML += "<option>..." — mistura string com DOM e complica
//    quando a lista cresce.
//
//    Passos:
//    - percorra trilhas com forEach
//    - crie a option com document.createElement("option")
//    - defina option.value e option.textContent
//    - encaixe no select com trilha.appendChild(option)
// -----------------------------------------------------------------------------
trilhas.forEach((opcao) => {
  // seu código aqui
});

// -----------------------------------------------------------------------------
// 2. Estrutura do resumo → createElement
//    #resumo NÃO está no HTML. Monte o esqueleto uma vez só:
//    - section com id "resumo"
//    - um div só para o texto (é nele que o innerHTML vai entrar)
//    - um button type="button" com o texto "Fazer nova inscrição"
//
//    No clique do botão: formulario.reset(), limpe o div e esconda o resumo
//    (classList.remove("visivel")).
//
//    Encaixe: div e botão dentro da section, section depois do form
//    (formulario.after(resumo)).
// -----------------------------------------------------------------------------
const resumo = document.createElement("section");
const conteudoResumo = document.createElement("div");
const botaoNovaInscricao = document.createElement("button");

// seu código aqui: id, type, textContent, addEventListener, appendChild, after


// -----------------------------------------------------------------------------
// 3. Submit → FormData para ler, innerHTML só no conteúdo visual
//    Não use um getElementById por campo. new FormData(formulario) lê todos
//    os campos que têm name de uma vez.
//
//    innerHTML é a escolha certa para o resumo: título e parágrafos,
//    sem botão dentro.
//
//    Errado:
//      resumo.innerHTML = `<h2>...</h2><button id="limpar">...</button>`;
//      document.getElementById("limpar").addEventListener(...)
//    No próximo envio o innerHTML recria o botão e o listener some.
// -----------------------------------------------------------------------------
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // 3a. Recupere os dados com FormData — o name de cada campo é a chave.
  //     const dados = new FormData(formulario);
  //     dados.get("nome")      → um valor (texto, select, radio)
  //     dados.getAll("temas")  → array (vários checkboxes com o mesmo name)
  //     Checkbox desmarcado não aparece no FormData.

  // 3b. Preencha conteudoResumo com innerHTML (h2 + parágrafos dos dados).
  //     Temas vazios → "Nenhum tema selecionado"
  // 3c. Mostre o resumo: resumo.classList.add("visivel")
});
