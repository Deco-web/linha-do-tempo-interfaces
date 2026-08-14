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
      "Vannevar Bush descreve no ensaio “As We May Think” uma máquina conceitual capaz de armazenar e ligar documentos por associação. Nunca foi construída, mas plantou a ideia de hipertexto e de interface baseada em ligações.",
    categoria: "Conceito de hipertexto",
  },
  {
    ano: 1950,
    titulo: "Cartões perfurados e teletipo",
    tipo: "hardware",
    resumo:
      "A interação acontecia por lotes: o programador furava cartões e recebia a resposta impressa horas depois. Não havia diálogo em tempo real entre humano e máquina.",
    categoria: "Entrada por lote",
  },
  {
    ano: 1963,
    titulo: "Sketchpad",
    tipo: "software",
    resumo:
      "Ivan Sutherland cria o primeiro programa de desenho interativo, manipulado com uma caneta óptica diretamente na tela. É o embrião das interfaces gráficas e da computação visual.",
    categoria: "Interface gráfica",
  },
  {
    ano: 1964,
    titulo: "Mouse",
    tipo: "hardware",
    resumo:
      "Douglas Engelbart e Bill English constroem o primeiro mouse, uma caixa de madeira com duas rodas. Ele transforma o movimento da mão em um ponteiro na tela — o gesto que definiria décadas de uso.",
    categoria: "Dispositivo apontador",
  },
  {
    ano: 1968,
    titulo: "A Mãe de Todas as Demos",
    tipo: "software",
    resumo:
      "Engelbart apresenta ao vivo mouse, janelas, hipertexto, videoconferência e edição colaborativa. A demonstração antecipa quase tudo que usamos hoje em interfaces pessoais.",
    categoria: "Sistema interativo",
  },
  {
    ano: 1971,
    titulo: "Correio eletrônico (e-mail)",
    tipo: "software",
    resumo:
      "Ray Tomlinson envia a primeira mensagem entre computadores diferentes e escolhe o símbolo “@” para separar usuário e máquina. Nasce o primeiro grande mensageiro eletrônico.",
    categoria: "Mensageiro eletrônico",
  },
  {
    ano: 1973,
    titulo: "Xerox Alto",
    tipo: "hardware",
    resumo:
      "Primeiro computador pensado para uma pessoa, com tela de mapa de bits, mouse e janelas. Reúne fisicamente os elementos da interface gráfica moderna.",
    categoria: "Computador pessoal / GUI",
  },
  {
    ano: 1981,
    titulo: "Xerox Star",
    tipo: "software",
    resumo:
      "Primeiro sistema comercial com metáfora de mesa de trabalho: ícones, pastas, documentos e o gesto de “apontar e clicar”. Define a gramática visual dos sistemas operacionais.",
    categoria: "Sistema operacional gráfico",
  },
  {
    ano: 1984,
    titulo: "Apple Macintosh",
    tipo: "software",
    resumo:
      "Populariza a interface gráfica para o grande público a um preço acessível. A partir dele, mexer no computador deixa de exigir digitar comandos de texto.",
    categoria: "Sistema operacional gráfico",
  },
  {
    ano: 1985,
    titulo: "Microsoft Windows 1.0",
    tipo: "software",
    resumo:
      "Leva a interface de janelas ao ecossistema de PCs compatíveis, iniciando a linhagem de sistemas operacionais mais usada do mundo nas décadas seguintes.",
    categoria: "Sistema operacional gráfico",
  },
  {
    ano: 1988,
    titulo: "IRC",
    tipo: "software",
    resumo:
      "O Internet Relay Chat cria as salas de bate-papo em tempo real, base cultural de todos os mensageiros instantâneos que viriam depois.",
    categoria: "Mensageiro eletrônico",
  },
  {
    ano: 1990,
    titulo: "World Wide Web e o navegador",
    tipo: "software",
    resumo:
      "Tim Berners-Lee cria a Web e o primeiro navegador. A interface passa a ser o hipertexto navegável por links — a ideia do Memex, enfim realizada.",
    categoria: "Navegador / hipertexto",
  },
  {
    ano: 1996,
    titulo: "ICQ",
    tipo: "software",
    resumo:
      "Primeiro mensageiro instantâneo de massa, com lista de contatos e o inesquecível som “Uh-oh”. Firma o bate-papo pessoal como hábito cotidiano.",
    categoria: "Mensageiro eletrônico",
  },
  {
    ano: 2007,
    titulo: "iPhone e a tela multitoque",
    tipo: "hardware",
    resumo:
      "A tela sensível a múltiplos toques elimina o teclado físico e o stylus. Gestos como deslizar e pinçar tornam-se a nova linguagem de interação direta.",
    categoria: "Interface por toque",
  },
  {
    ano: 2011,
    titulo: "Assistentes de voz (Siri)",
    tipo: "software",
    resumo:
      "A interface deixa de exigir toque ou clique: fala-se com o dispositivo em linguagem natural. Começa a era da interação por voz no dia a dia.",
    categoria: "Interface por voz",
  },
  {
    ano: 2016,
    titulo: "Realidade virtual de consumo",
    tipo: "hardware",
    resumo:
      "Óculos como o Oculus Rift levam a interface para o espaço tridimensional, onde o corpo e o olhar passam a ser os controles.",
    categoria: "Interface imersiva",
  },
  {
    ano: 2022,
    titulo: "Interfaces conversacionais com IA",
    tipo: "software",
    resumo:
      "Ferramentas como o ChatGPT popularizam o diálogo em linguagem natural como forma de operar o computador — a interface passa a compreender intenção, não só comandos.",
    categoria: "Interface conversacional",
  },
];
