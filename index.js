const perguntas = [
  {
    Pergunta: "Quem foi o primeiro imperador do Brasil?",
    Respostas: [
      "Dom Pedro I",
      "Dom Pedro II",
      "Dom João VI",
    ],
    correta: 0
  },
  {
    Pergunta: "Qual foi o principal ciclo econômico do Brasil colonial?",
    Respostas: [
      "Ciclo do ouro",
      "Ciclo da borracha",
      "Ciclo do café",
    ],
    correta: 0
  },
  {
    Pergunta: "Em que ano foi proclamada a independência do Brasil?",
    Respostas: [
      "1822",
      "1808",
      "1889",
    ],
    correta: 0
  },
  {
    Pergunta: "Quem foi o líder da Revolta dos Malês?",
    Respostas: [
      "Zumbi dos Palmares",
      "Tiradentes",
      "Manuel Congo",
    ],
    correta: 2
  },
  {
    Pergunta: "O que foi o movimento conhecido como 'Diretas Já'?",
    Respostas: [
      "Uma campanha pela abertura política no regime militar",
      "Uma revolta popular contra a monarquia",
      "Uma campanha pela independência do Brasil",
    ],
    correta: 0
  },
  {
    Pergunta: "Quem liderou a Confederação do Equador?",
    Respostas: [
      "Luís Carlos Prestes",
      "Frei Caneca",
      "Antônio Conselheiro",
    ],
    correta: 1
  },
  {
    Pergunta: "Qual foi o último país a abolir a escravidão nas Américas?",
    Respostas: [
      "Brasil",
      "Estados Unidos",
      "Cuba",
    ],
    correta: 0
  },
  {
    Pergunta: "Qual foi o período do regime militar no Brasil?",
    Respostas: [
      "1930-1945",
      "1964-1985",
      "1889-1894",
    ],
    correta: 1
  },
  {
    Pergunta: "Quem foi o presidente do Brasil durante a Proclamação da República?",
    Respostas: [
      "Deodoro da Fonseca",
      "Getúlio Vargas",
      "Juscelino Kubitschek",
    ],
    correta: 0
  },
  {
    Pergunta: "O que foi o movimento conhecido como 'Cabanagem'?",
    Respostas: [
      "Uma revolta contra a coroa portuguesa",
      "Uma guerra civil entre estados brasileiros",
      "Uma revolta popular no Pará",
    ],
    correta: 2
  }
];
 



/*const perguntas = [
  
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
];*/
  
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