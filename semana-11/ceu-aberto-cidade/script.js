const botaoCelsius = document.querySelector("#botao-celsius");
const botaoFahrenheit = document.querySelector("#botao-fahrenheit");
const cidadeSelect = document.querySelector("#cidade");
const selo = document.querySelector("#selo");
const titulo = document.querySelector("#titulo");
const temperatura = document.querySelector("#temperatura");
const condicao = document.querySelector("#condicao");
const sensacao = document.querySelector("#sensacao");
const umidade = document.querySelector("#umidade");
const vento = document.querySelector("#vento");

const cidades = [
  {
    value: "florianopolis",
    nome: "Florianópolis",
    selo: "Floripa",
    temperatura: 23,
    condicao: "Parcialmente nublado",
    sensacao: 24,
    umidade: "61%",
    vento: "12 km/h",
    previsao: [
      { id: "temp-hoje", max: 26, min: 16, condicao: "Parcialmente nublado" },
      {
        id: "temp-segunda",
        max: 27,
        min: 17,
        condicao: "Predominantemente limpo",
      },
      { id: "temp-terca", max: 24, min: 16, condicao: "Nublado" },
      { id: "temp-quarta", max: 22, min: 15, condicao: "Chuva fraca" },
      { id: "temp-quinta", max: 25, min: 16, condicao: "Parcialmente nublado" },
      { id: "temp-sexta", max: 28, min: 17, condicao: "Céu limpo" },
      {
        id: "temp-sabado",
        max: 29,
        min: 18,
        condicao: "Predominantemente limpo",
      },
    ],
  },
  {
    value: "sao-paulo",
    nome: "São Paulo",
    selo: "SP",
    temperatura: 19,
    condicao: "Nublado",
    sensacao: 18,
    umidade: "78%",
    vento: "8 km/h",
    previsao: [
      { id: "temp-hoje", max: 21, min: 14, condicao: "Nublado" },
      { id: "temp-segunda", max: 22, min: 15, condicao: "Chuva fraca" },
      { id: "temp-terca", max: 20, min: 14, condicao: "Chuva" },
      { id: "temp-quarta", max: 18, min: 13, condicao: "Nublado" },
      { id: "temp-quinta", max: 23, min: 15, condicao: "Parcialmente nublado" },
      { id: "temp-sexta", max: 25, min: 16, condicao: "Céu limpo" },
      { id: "temp-sabado", max: 24, min: 16, condicao: "Parcialmente nublado" },
    ],
  },
  {
    value: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    selo: "Rio",
    temperatura: 27,
    condicao: "Céu limpo",
    sensacao: 28,
    umidade: "55%",
    vento: "14 km/h",
    previsao: [
      { id: "temp-hoje", max: 29, min: 21, condicao: "Céu limpo" },
      { id: "temp-segunda", max: 30, min: 22, condicao: "Céu limpo" },
      { id: "temp-terca", max: 28, min: 21, condicao: "Parcialmente nublado" },
      { id: "temp-quarta", max: 26, min: 20, condicao: "Chuva fraca" },
      { id: "temp-quinta", max: 27, min: 21, condicao: "Parcialmente nublado" },
      { id: "temp-sexta", max: 31, min: 22, condicao: "Céu limpo" },
      { id: "temp-sabado", max: 32, min: 23, condicao: "Céu limpo" },
    ],
  },
];

function paraFahrenheit(celsius) {
  // Reaproveite a função do Exercício 1
  // Fórmula: (°C × 9 / 5) + 32
  // Arredonde com Math.round(...)
}

function atualizarTela(chaveCidade, unidade) {
  // 1. Encontre a cidade no array cidades.
  //    Dica: cidades.find((item) => item.value === chaveCidade)
  //
  // 2. Atualize os textos que não são temperatura:
  //    - selo
  //    - titulo ("Tempo em Florianópolis hoje")
  //    - condicao
  //    - umidade
  //    - vento
  //
  // 3. Atualize temperatura agora e sensação, respeitando a unidade
  //    ("celsius" ou "fahrenheit"), como no Exercício 1.
  //
  // 4. Percorra cidade.previsao e atualize:
  //    - a faixa de temperatura (#temp-hoje, etc.)
  //    - a condição do dia (o parágrafo logo depois da faixa)
}

botaoCelsius.addEventListener("click", () => {
  // Salve "celsius" no localStorage (chave: unidadeTemperatura)
  // Chame atualizarTela com a cidade atual do select e "celsius"
});

botaoFahrenheit.addEventListener("click", () => {
  // Salve "fahrenheit" no localStorage (chave: unidadeTemperatura)
  // Chame atualizarTela com a cidade atual do select e "fahrenheit"
});

cidadeSelect.addEventListener("change", () => {
  // Salve cidadeSelect.value no localStorage, na chave "cidade"
  // Leia a unidade salva (ou use "celsius")
  // Chame atualizarTela com a cidade escolhida e a unidade
});

// Ao abrir a página:
// - leia a cidade salva (ou use "florianopolis")
// - leia a unidade salva (ou use "celsius")
// - coloque a cidade salva no select (cidadeSelect.value = ...)
// - chame atualizarTela com os dois valores
