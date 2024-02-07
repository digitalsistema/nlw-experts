const perguntas = [
  {
    Pergunta: "O que é cangaçologia?",
    Respostas: [
      "O estudo das técnicas de plantio de cana-de-açúcar",
      "O estudo da cultura e história dos cangaceiros",
      "O estudo da formação de cânions em rios brasileiros",
    ],
    correta: 1
  },
  {
    Pergunta: "Quem foi o líder mais famoso do cangaço?",
    Respostas: [
      "Lampião",
      "Maria Bonita",
      "Corisco",
    ],
    correta: 0
  },
  {
    Pergunta: "Qual era o principal objetivo dos cangaceiros?",
    Respostas: [
      "Lutar pela independência do Brasil",
      "Proteger os agricultores das secas",
      "Enfrentar o poder local e desafiar a ordem estabelecida",
    ],
    correta: 2
  },
  {
    Pergunta: "Onde se localizava o principal foco do cangaço?",
    Respostas: [
      "Sul do Brasil",
      "Sertão nordestino do Brasil",
      "Região amazônica do Brasil",
    ],
    correta: 1
  },
  {
    Pergunta: "Qual era o nome de batismo de Lampião?",
    Respostas: [
      "Virgulino Ferreira da Silva",
      "José do Patrocínio",
      "Antônio Conselheiro",
    ],
    correta: 0
  },
  {
    Pergunta: "Qual foi o desfecho do cangaço?",
    Respostas: [
      "Os cangaceiros foram anistiados e integrados à sociedade",
      "Todos os cangaceiros foram presos e executados",
      "Os cangaceiros se dispersaram ou foram mortos",
    ],
    correta: 2
  },
  {
    Pergunta: "Quem era Maria Bonita no contexto do cangaço?",
    Respostas: [
      "Uma líder feminista",
      "A esposa de Lampião",
      "Uma estrategista militar",
    ],
    correta: 1
  },
  {
    Pergunta: "Qual era o principal armamento dos cangaceiros?",
    Respostas: [
      "Espingarda de ar comprimido",
      "Fuzil AK-47",
      "Garrucha e rifle Winchester",
    ],
    correta: 2
  },
  {
    Pergunta: "Como eram chamados os seguidores de Lampião?",
    Respostas: [
      "Cangacistas",
      "Volantes",
      "Cabras",
    ],
    correta: 2
  },
  {
    Pergunta: "Qual era a principal atividade econômica dos cangaceiros?",
    Respostas: [
      "Roubo de gado e assalto a fazendas",
      "Agricultura de subsistência",
      "Extração de ouro",
    ],
    correta: 0
  }
];

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