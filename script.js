const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(e) {
  e.preventDefault();

  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("lista-item-container");

  const containerNomeDoItem = document.createElement("div");

  const containerCheckbox = document.createElement("div");
  containerCheckbox.classList.add("container-checkbox");

  const checkBoxInput = document.createElement("input");
  checkBoxInput.type = "checkbox";
  checkBoxInput.classList.add("input-checkbox");
  checkBoxInput.id = "checkbox" + contador++;

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.setAttribute("for", checkBoxInput.id);

  checkBoxLabel.addEventListener("click", function (e) {
    const checkboxInput = e.currentTarget.querySelector(".input-checkbox");
    const checkboxCustomizado = e.currentTarget.querySelector(
      ".checkbox-customizado"
    );
    const itemTitulo = e.currentTarget
      .closest("li")
      .querySelector("#item-titulo");

    if (checkboxInput.checked) {
      checkboxCustomizado.classList.add("checked");
      itemTitulo.style.textDecoration = "line-through";
      listaComprados.appendChild(itemDaLista);
    } else {
      checkboxCustomizado.classList.remove("checked");
      itemTitulo.style.textDecoration = "none";
      listaDeCompras.appendChild(itemDaLista);
    }
  });

  const checkBoxCustomizado = document.createElement("div");
  checkBoxCustomizado.classList.add("checkbox-customizado");

  checkBoxLabel.appendChild(checkBoxInput);
  checkBoxLabel.appendChild(checkBoxCustomizado);

  containerCheckbox.appendChild(checkBoxLabel);
  containerNomeDoItem.appendChild(containerCheckbox);

  const nomeDoItem = document.createElement("p");
  nomeDoItem.id = "item-titulo";
  nomeDoItem.innerText = item.value;
  containerNomeDoItem.appendChild(nomeDoItem);

  const containerBotoes = document.createElement("div");
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("item-lista-button");

  const imagemRemover = document.createElement("img");
  imagemRemover.src = "img/delete.svg";
  imagemRemover.alt = "Remover";

  botaoRemover.appendChild(imagemRemover);
  containerBotoes.appendChild(botaoRemover);

  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("item-lista-button");

  const imagemEditar = document.createElement("img");
  imagemEditar.src = "img/edit.svg";
  imagemEditar.alt = "Editar";

  botaoEditar.appendChild(imagemEditar);
  containerBotoes.appendChild(botaoEditar);

  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);
  itemDaLista.appendChild(containerItemLista);

  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);

  const itemData = document.createElement("p");
  itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString(
    "pt-BR",
    { hour: "numeric", minute: "numeric" }
  )}`;
  itemData.classList.add("texto-data");

  itemDaLista.appendChild(containerItemLista);
  itemDaLista.appendChild(itemData);
  listaDeCompras.appendChild(itemDaLista);
}
