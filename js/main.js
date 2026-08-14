// ============================================================
// main.js — Orquestrador
// Único módulo que conhece o DOM. Une dados, filtros e render.
// ============================================================

import { eventos } from "./data.js";
import { ordenarPorAno, filtrarPorTipo } from "./filtros.js";
import { renderizarLinhaDoTempo, renderizarContadores } from "./render.js";

const sel = {
  linha: document.querySelector("#linha-do-tempo"),
  contadores: document.querySelector("#contadores"),
  botoes: document.querySelectorAll("[data-filtro]"),
  progresso: document.querySelector("#progresso"),
  relogio: document.querySelector("#relogio"),
  anoAtual: document.querySelector("#ano-atual"),
};

const estado = {
  filtro: "todos",
  ordenados: ordenarPorAno(eventos),
};

/** Redesenha a timeline conforme o filtro atual. */
function atualizar() {
  const visiveis = filtrarPorTipo(estado.ordenados, estado.filtro);
  renderizarLinhaDoTempo(sel.linha, visiveis);
  observarEntradas();
}

/** Liga os botões de filtro. */
function ligarFiltros() {
  sel.botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      estado.filtro = botao.dataset.filtro;
      sel.botoes.forEach((b) => b.classList.remove("is-ativo"));
      botao.classList.add("is-ativo");
      atualizar();
    });
  });
}

/** Revela cada registro ao entrar na viewport. */
function observarEntradas() {
  const alvos = document.querySelectorAll(".registro");
  const io = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visivel");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
  );
  alvos.forEach((a) => io.observe(a));
}

/** Barra de progresso de leitura. */
function ligarProgresso() {
  window.addEventListener(
    "scroll",
    () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      sel.progresso.style.transform = `scaleX(${
        total > 0 ? h.scrollTop / total : 0
      })`;
    },
    { passive: true }
  );
}

/** Relógio ao vivo no topo (fuso de Brasília). */
function ligarRelogio() {
  const tick = () => {
    const agora = new Date().toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "America/Sao_Paulo",
    });
    sel.relogio.textContent = `${agora} BRT`;
  };
  tick();
  setInterval(tick, 1000);
}

// Inicialização.
sel.anoAtual.textContent = new Date().getFullYear();
renderizarContadores(sel.contadores, eventos);
ligarFiltros();
ligarProgresso();
ligarRelogio();
atualizar();
