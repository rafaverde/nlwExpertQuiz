const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação para estilização de páginas web.",
      "Uma linguagem de programação para desenvolvimento de aplicativos móveis.",
      "Uma linguagem de programação para desenvolvimento web interativo.",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Retorna o tipo de uma variável ou expressão.",
      "Concatena duas strings.",
      "Converte um valor para um tipo específico.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o método em JavaScript usado para remover o último elemento de um array?",
    respostas: [".pop()", ".removeLast()", ".shift()"],
    correta: 0,
  },
  {
    pergunta: "O que o método 'addEventListener' faz em JavaScript?",
    respostas: [
      "Adiciona um evento a um elemento HTML.",
      "Remove um elemento HTML do DOM.",
      "Altera o estilo de um elemento HTML.",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "'==' compara apenas os valores, enquanto '===' compara os valores e os tipos de dados.",
      "'===' compara apenas os valores, enquanto '==' compara os valores e os tipos de dados.",
      "'==' e '===' são operadores equivalentes em JavaScript.",
    ],
    correta: 0,
  },
  {
    pergunta: "O que significa 'NaN' em JavaScript?",
    respostas: [
      "Não é um número (Not a Number).",
      "Número Aleatório Negativo (Negative Random Number).",
      "Número Atípico (Notable Number).",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    respostas: [
      "Converte um valor para booleano.",
      "Executa uma operação lógica de 'ou'.",
      "Executa uma operação lógica de 'e'.",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é 'callback' em JavaScript?",
    respostas: [
      "Uma função passada como argumento para outra função, para ser executada posteriormente.",
      "Um tipo especial de variável.",
      "Um método para iterar sobre os elementos de um array.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o método em JavaScript usado para adicionar novos elementos ao final de um array?",
    respostas: [".push()", ".append()", ".addToEnd()"],
    correta: 0,
  },
  {
    pergunta: "O que é uma 'closure' em JavaScript?",
    respostas: [
      "Uma função que não tem acesso às variáveis de seu escopo externo.",
      "Um tipo de loop em JavaScript.",
      "Uma função que tem acesso às variáveis de seu escopo externo mesmo após a função ter sido chamada.",
    ],
    correta: 2,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corrects = new Set()
const questionTotal = perguntas.length
const showScore = document.querySelector("#score span")

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for (resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    quizItem.querySelector("dl").appendChild(dt)
    dt.querySelector("input").setAttribute(
      "name",
      `pergunta-${perguntas.indexOf(item)}`
    )
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const isCorrect = event.target.value == item.correta

      corrects.delete(item)
      if (isCorrect) {
        corrects.add(item)
      }
      showScore.textContent = `${corrects.size} de ${questionTotal}`
    }
  }

  quizItem.querySelector("dl dt").remove()

  quiz.appendChild(quizItem)
}
