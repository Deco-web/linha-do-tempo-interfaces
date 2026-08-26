// ============================================================
// render.js — Módulo de renderização (só desenha HTML)
// Não conhece filtros nem cliques: mantém-se reutilizável.
// ============================================================

const rotuloTipo = {
  hardware: "Hardware",
  software: "Software",
};

/**
 * Monta uma linha editorial da timeline.
 * @param {object} ev - evento de data.js
 * @param {number} indice - posição 1-based (para o número mono)
 * @param {number} total - total de itens visíveis
 */
function montarLinha(ev, indice, total) {
  const num = String(indice).padStart(2, "0");
  const tot = String(total).padStart(2, "0");
  const imgHtml = ev.imagem
    ? `<div class="registro__imagem">
         <img src="${ev.imagem}" alt="${ev.imagemdesc || ev.titulo}" loading="lazy">
       </div>`
    : "";
  return `
    <article class="registro" data-tipo="${ev.tipo}" style="--i:${indice}">
      <div class="registro__indice">
        <span class="mono">${num}</span>
        <span class="mono registro__total">/${tot}</span>
      </div>

      <div class="registro__ano">
        <span class="ano">${ev.ano}</span>
      </div>

      <div class="registro__corpo">
        <div class="registro__meta">
          <span class="pilula pilula--${ev.tipo}">
            <span class="pilula__ponto"></span>${rotuloTipo[ev.tipo]}
          </span>
          <span class="mono registro__categoria">${ev.categoria}</span>
        </div>
        <h3 class="registro__titulo">${ev.titulo}</h3>
        <p class="registro__resumo">${ev.resumo}</p>
        ${imgHtml}
      </div>

      <div class="registro__linha" aria-hidden="true"></div>
    </article>
  `;
}

/**
 * Renderiza a lista de eventos dentro do container.
 * @param {HTMLElement} container
 * @param {Array} eventos - já filtrados/ordenados
 */
export function renderizarLinhaDoTempo(container, eventos) {
  if (!eventos.length) {
    container.innerHTML = `<p class="vazio mono">— sem registros nesta categoria —</p>`;
    return;
  }
  const total = eventos.length;
  container.innerHTML = eventos
    .map((ev, i) => montarLinha(ev, i + 1, total))
    .join("");
}

/**
 * Preenche os contadores do cabeçalho.
 * @param {HTMLElement} el
 * @param {Array} eventos - lista completa
 */
export function renderizarContadores(el, eventos) {
  const hardware = eventos.filter((e) => e.tipo === "hardware").length;
  const software = eventos.filter((e) => e.tipo === "software").length;
  const primeiro = Math.min(...eventos.map((e) => e.ano));
  const ultimo = Math.max(...eventos.map((e) => e.ano));
  el.innerHTML = `
    <span class="mono"><b>${eventos.length}</b> registros</span>
    <span class="mono"><b>${hardware}</b> hardware · <b>${software}</b> software</span>
    <span class="mono">${primeiro}—${ultimo}</span>
  `;
}
