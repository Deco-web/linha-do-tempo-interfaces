// ============================================================
// filtros.js — Módulo de lógica de filtragem e ordenação
// Funções puras: recebem dados, devolvem dados. Sem tocar no DOM.
// ============================================================

/**
 * Ordena os eventos do mais antigo ao mais recente.
 * @param {Array} eventos
 * @returns {Array} nova lista ordenada
 */
export function ordenarPorAno(eventos) {
  return [...eventos].sort((a, b) => a.ano - b.ano);
}

/**
 * Filtra os eventos por tipo.
 * @param {Array} eventos
 * @param {"todos"|"hardware"|"software"} tipo
 * @returns {Array} lista filtrada
 */
export function filtrarPorTipo(eventos, tipo) {
  if (tipo === "todos") return eventos;
  return eventos.filter((ev) => ev.tipo === tipo);
}
