import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(e) {
  e.preventDefault();

  if (item.value.trim() === "") {
    alert("Por favor, digite o nome do item!");
    item.value = "";
    return;
  }

  const itemDaLista = criarItemDaLista(item.value);
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);
  item.value = "";
}
