// ============================================================
// data.js — Fonte única de dados da linha do tempo
// Cada evento é um objeto. Para adicionar um marco novo,
// basta acrescentar um item aqui — a interface se monta sozinha.
// tipo: "hardware" | "software"
// ============================================================

export const eventos = [
  {
    ano: 1945,
    titulo: "Memex",
    tipo: "software",
    resumo:
      "Vannevar Bush descreve no ensaio \u201cAs We May Think\u201d uma máquina conceitual capaz de armazenar e ligar documentos por associação. Nunca foi construída, mas plantou a ideia de hipertexto e de interface baseada em ligações.",
    categoria: "Conceito de hipertexto",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Vannevar_Bush_portrait.jpg/320px-Vannevar_Bush_portrait.jpg",
    imagemdesc: "Vannevar Bush, autor do ensaio As We May Think (1945)"
  },
  {
    ano: 1950,
    titulo: "Cartões perfurados e teletipo",
    tipo: "hardware",
    resumo:
      "A interação acontecia por lotes: o programador furava cartões e recebia a resposta impressa horas depois. Não havia diálogo em tempo real entre humano e máquina.",
    categoria: "Entrada por lote",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Used_Punchcard_%285151286161%29.jpg/320px-Used_Punchcard_%285151286161%29.jpg",
    imagemdesc: "Cartão perfurado — unidade de entrada de dados nos primeiros computadores"
  },
  {
    ano: 1963,
    titulo: "Sketchpad",
    tipo: "software",
    resumo:
      "Ivan Sutherland cria o primeiro programa de desenho interativo, manipulado com uma caneta óptica diretamente na tela. É o embrião das interfaces gráficas e da computação visual.",
    categoria: "Interface gráfica",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/SketchpadAnimation.gif/320px-SketchpadAnimation.gif",
    imagemdesc: "Sketchpad — primeiro sistema de desenho interativo (Ivan Sutherland, 1963)"
  },
  {
    ano: 1964,
    titulo: "Mouse",
    tipo: "hardware",
    resumo:
      "Douglas Engelbart e Bill English constroem o primeiro mouse, uma caixa de madeira com duas rodas. Ele transforma o movimento da mão em um ponteiro na tela — o gesto que definiria décadas de uso.",
    categoria: "Dispositivo apontador",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Prototype_of_first_computer_mouse_%28Douglas_Engelbart%29.jpg/320px-Prototype_of_first_computer_mouse_%28Douglas_Engelbart%29.jpg",
    imagemdesc: "Protótipo do primeiro mouse de Engelbart (1964)"
  },
  {
    ano: 1968,
    titulo: "A Mãe de Todas as Demos",
    tipo: "software",
    resumo:
      "Engelbart apresenta ao vivo mouse, janelas, hipertexto, videoconferência e edição colaborativa. A demonstração antecipa quase tudo que usamos hoje em interfaces pessoais.",
    categoria: "Sistema interativo",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Douglas_Engelbart_in_2008.jpg/320px-Douglas_Engelbart_in_2008.jpg",
    imagemdesc: "Douglas Engelbart, criador da Mother of All Demos (1968)"
  },
  {
    ano: 1971,
    titulo: "Correio eletrônico (e-mail)",
    tipo: "software",
    resumo:
      "Ray Tomlinson envia a primeira mensagem entre computadores diferentes e escolhe o símbolo \u201c@\u201d para separar usuário e máquina. Nasce o primeiro grande mensageiro eletrônico.",
    categoria: "Mensageiro eletrônico",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ray_Tomlinson.jpg/320px-Ray_Tomlinson.jpg",
    imagemdesc: "Ray Tomlinson, inventor do e-mail (1971)"
  },
  {
    ano: 1973,
    titulo: "Xerox Alto",
    tipo: "hardware",
    resumo:
      "Primeiro computador pensado para uma pessoa, com tela de mapa de bits, mouse e janelas. Reúne fisicamente os elementos da interface gráfica moderna.",
    categoria: "Computador pessoal / GUI",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Xerox_Alto_with_mouse.jpg/320px-Xerox_Alto_with_mouse.jpg",
    imagemdesc: "Xerox Alto com mouse (1973)"
  },
  {
    ano: 1981,
    titulo: "Xerox Star",
    tipo: "software",
    resumo:
      "Primeiro sistema comercial com metáfora de mesa de trabalho: ícones, pastas, documentos e o gesto de \u201capontar e clicar\u201d. Define a gramática visual dos sistemas operacionais.",
    categoria: "Sistema operacional gráfico",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Xerox_Star_8010_workstations.jpg/320px-Xerox_Star_8010_workstations.jpg",
    imagemdesc: "Estações Xerox Star 8010 (1981)"
  },
  {
    ano: 1984,
    titulo: "Apple Macintosh",
    tipo: "software",
    resumo:
      "Populariza a interface gráfica para o grande público a um preço acessível. A partir dele, mexer no computador deixa de exigir digitar comandos de texto.",
    categoria: "Sistema operacional gráfico",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Macintosh_128k_transparency.png/320px-Macintosh_128k_transparency.png",
    imagemdesc: "Apple Macintosh 128k (1984)"
  },
  {
    ano: 1985,
    titulo: "Microsoft Windows 1.0",
    tipo: "software",
    resumo:
      "Leva a interface de janelas ao ecossistema de PCs compatíveis, iniciando a linhagem de sistemas operacionais mais usada do mundo nas décadas seguintes.",
    categoria: "Sistema operacional gráfico",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Windows1.0.png/320px-Windows1.0.png",
    imagemdesc: "Microsoft Windows 1.0 (1985)"
  },
  {
    ano: 1988,
    titulo: "IRC",
    tipo: "software",
    resumo:
      "O Internet Relay Chat cria as salas de bate-papo em tempo real, base cultural de todos os mensageiros instantâneos que viriam depois.",
    categoria: "Mensageiro eletrônico",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/HexChat_2.9.4_screenshot.png/320px-HexChat_2.9.4_screenshot.png",
    imagemdesc: "Interface de cliente IRC (HexChat)"
  },
  {
    ano: 1990,
    titulo: "World Wide Web e o navegador",
    tipo: "software",
    resumo:
      "Tim Berners-Lee cria a Web e o primeiro navegador. A interface passa a ser o hipertexto navegável por links — a ideia do Memex, enfim realizada.",
    categoria: "Navegador / hipertexto",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tim_Berners-Lee_2012.jpg/320px-Tim_Berners-Lee_2012.jpg",
    imagemdesc: "Tim Berners-Lee, criador da World Wide Web (1990)"
  },
  {
    ano: 1996,
    titulo: "ICQ",
    tipo: "software",
    resumo:
      "Primeiro mensageiro instantâneo de massa, com lista de contatos e o inesquecível som \u201cUh-oh\u201d. Firma o bate-papo pessoal como hábito cotidiano.",
    categoria: "Mensageiro eletrônico",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ICQ_Flower.svg/320px-ICQ_Flower.svg.png",
    imagemdesc: "Logo do ICQ (1996)"
  },
  {
    ano: 2007,
    titulo: "iPhone e a tela multitoque",
    tipo: "hardware",
    resumo:
      "A tela sensível a múltiplos toques elimina o teclado físico e o stylus. Gestos como deslizar e pinçar tornam-se a nova linguagem de interação direta.",
    categoria: "Interface por toque",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IPhone_1st_Gen.svg/180px-IPhone_1st_Gen.svg.png",
    imagemdesc: "iPhone primeira geração (2007)"
  },
  {
    ano: 2011,
    titulo: "Assistentes de voz (Siri)",
    tipo: "software",
    resumo:
      "A interface deixa de exigir toque ou clique: fala-se com o dispositivo em linguagem natural. Começa a era da interação por voz no dia a dia.",
    categoria: "Interface por voz",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Siri_logo.svg/320px-Siri_logo.svg.png",
    imagemdesc: "Siri — assistente de voz da Apple (lançado em 2011)"
  },
  {
    ano: 2016,
    titulo: "Realidade virtual de consumo",
    tipo: "hardware",
    resumo:
      "Óculos como o Oculus Rift levam a interface para o espaço tridimensional, onde o corpo e o olhar passam a ser os controles.",
    categoria: "Interface imersiva",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Oculus-Rift-CV1-Headset-Front_with_transparent_background.png/320px-Oculus-Rift-CV1-Headset-Front_with_transparent_background.png",
    imagemdesc: "Oculus Rift CV1 (2016)"
  },
  {
    ano: 2022,
    titulo: "Interfaces conversacionais com IA",
    tipo: "software",
    resumo:
      "Ferramentas como o ChatGPT popularizam o diálogo em linguagem natural como forma de operar o computador — a interface passa a compreender intenção, não só comandos.",
    categoria: "Interface conversacional",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/320px-ChatGPT_logo.svg.png",
    imagemdesc: "Logo do ChatGPT (2022)"
  },
];
