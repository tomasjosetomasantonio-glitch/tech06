const form = document.getElementById("form");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!mensagem) {
    status.textContent = "⚠️ Escreva sua ideia primeiro.";
    return;
  }

  // Simula salvamento local (frontend puro)
  const ideia = {
    nome: nome || "Anônimo",
    mensagem,
    data: new Date().toLocaleString()
  };

  console.log("Ideia guardada:", ideia);

  status.textContent = "✅ Ideia registrada com sucesso!";
  form.reset();
});
