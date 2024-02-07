const perguntas = [
    {
      Pergunta: "Qual é a linguagem de programação que é amplamente utilizada para desenvolvimento web?",
      Respostas: [
        "Java",
        "Python",
        "JavaScript",
      ],
      correta: 2
    },
    {
      Pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      Respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual dessas opções é uma estrutura de controle de fluxo em JavaScript?",
      Respostas: [
        "if-else",
        "loop-for",
        "ambas as opções",
      ],
      correta: 2
    },
    {
      Pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      Respostas: [
        "Seleciona múltiplos elementos",
        "Seleciona um único elemento",
        "Não é uma função válida em JavaScript",
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é a função do operador '===' em JavaScript?",
      Respostas: [
        "Atribuição",
        "Comparação estrita",
        "Concatenação",
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é a função do método 'push()' em arrays JavaScript?",
      Respostas: [
        "Remover um elemento",
        "Adicionar um elemento ao final do array",
        "Inverter a ordem dos elementos",
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é o método utilizado para imprimir mensagens no console em JavaScript?",
      Respostas: [
        "console.log()",
        "print()",
        "log()",
      ],
      correta: 0
    },
    {
      Pergunta: "Como se refere a comentários de linha única em JavaScript?",
      Respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      Pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      Respostas: [
        "Remove um ouvinte de evento de um elemento",
        "Adiciona um ouvinte de evento a um elemento",
        "Não é uma função válida em JavaScript",
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é o operador de incremento em JavaScript?",
      Respostas: [
        "++",
        "--",
        "+=",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laco de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.Pergunta
   
   for(let resposta of item.Respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.Respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estarCorreta = event.target.value == item.correta //true
    
    corretas.delete(item)
      if(estarCorreta) {
      corretas.add(item)
    }
     
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
   
  quizItem.querySelector('dl').appendChild(dt)
  
  
  
    }
  
  
    
    quizItem.querySelector('dl dt').remove() 
   
   // Coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }