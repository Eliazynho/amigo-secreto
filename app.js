const inputName = document.getElementById("amigo");
const listaHTML = document.getElementById("listaAmigos");
const resultadoHTML = document.getElementById("resultado");

let listaDeAmigos = [];

function adicionarAmigo() {
  let nome = inputName.value.trim();
  nome = nome.charAt(0).toUpperCase() + nome.slice(1);

  if (nome === "") return;

  if (listaDeAmigos.includes(nome)) {
    alert("Este nome já foi adicionado!");
    inputName.value = "";
    return;
  }

  listaDeAmigos.push(nome);
  listaDeAmigos.sort((a, b) =>
    a.localeCompare(b, "pt", { sensitivity: "base" })
  );

  atualizarLista();
  inputName.value = "";
  inputName.focus();
}

function atualizarLista() {
  listaHTML.innerHTML = "";

  listaDeAmigos.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    listaHTML.appendChild(item);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length < 1) {
    alert("Adicione pelo menos um nome à lista.");
    return;
  }

  const sorteado =
    listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

  resultadoHTML.innerHTML = `
    <li>Seu amigo secreto é: <strong>${sorteado}</strong> 🎁</li>
  `;
}
