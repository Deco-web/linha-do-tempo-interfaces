# A conversa entre humano & máquina

Ensaio visual contínuo (documento único, sem slides) sobre a **linha do tempo
das interfaces computacionais**. Cada marco é classificado por ter nascido como
**hardware** (o que se toca) ou **software** (o que se vê na tela).

Trabalho de Interação Humano-Computador (IHC).

## Estética

Editorial / techno-minimal — fundo cinza-quente, tipografia de alto contraste e
um único acento coral. Tipos: *Bricolage Grotesque* (display), *Newsreader*
(corpo) e *JetBrains Mono* (metadados).

## Estrutura (modular)

```
.
├── index.html          Estrutura semântica da página
├── css/styles.css      Estilo (tokens → base → seções → responsivo)
└── js/
    ├── data.js         Fonte única de dados (edite aqui para novos marcos)
    ├── filtros.js      Lógica pura: ordenar e filtrar
    ├── render.js       Só desenha HTML (reutilizável)
    └── main.js         Orquestrador — único módulo que conhece o DOM
```

## Rodar localmente

Como usa módulos ES, precisa de um servidor (não abra via `file://`):

```bash
python -m http.server 5500
# abra http://localhost:5500
```

Site 100% estático — sem build.
