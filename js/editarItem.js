import { gerarDiaDaSemana } from "./gerarDiaDeSemana.js";

export const editarItem = (elemento) => {
  let novoItem = prompt("Digite o novo nome do item:");

  if (novoItem !== null && novoItem.trim() !== "") {
    const itemTextoAtualizado = elemento.querySelector("#item-titulo");
    itemTextoAtualizado.textContent = novoItem;

    const novaData = gerarDiaDaSemana();
    const itemDataAtualizada = elemento.querySelector(".texto-data");
    itemDataAtualizada.textContent = novaData;

    const estavaComprado = elemento.querySelector(".input-checkbox").checked;

    if (estavaComprado) {
      elemento.querySelector(".input-checkbox").checked = true;
      elemento.querySelector(".checkbox-customizado").classList.add("checked");
      itemTextoAtualizado.style.textDecoration = "line-through";
    }
  }
};
