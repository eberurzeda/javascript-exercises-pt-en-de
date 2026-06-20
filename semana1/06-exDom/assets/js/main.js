// PT: Selecionamos o campo onde o usuário digita o nome.
// EN: We select the field where the user types the name.
// DE: Wir wählen das Feld aus, in das der Benutzer den Namen eingibt.
const inputNome = document.querySelector("#nome");

// PT: Selecionamos o botão de gerar saudação.
// EN: We select the generate greeting button.
// DE: Wir wählen den Button zum Erzeugen der Begrüßung aus.
const botao = document.querySelector("#botao");

// PT: Selecionamos o elemento onde a mensagem será exibida.
// EN: We select the element where the message will be displayed.
// DE: Wir wählen das Element aus, in dem die Nachricht angezeigt wird.
const resultado = document.querySelector("#resultado");

// PT: Criamos uma função para gerar a mensagem personalizada.
// EN: We create a function to generate the personalized message.
// DE: Wir erstellen eine Funktion, um die persönliche Nachricht zu erzeugen.
function gerarSaudacao() {
  // PT: Pegamos o valor do input e removemos espaços extras.
  // EN: We get the input value and remove extra spaces.
  // DE: Wir holen den Wert des Eingabefelds und entfernen zusätzliche Leerzeichen.
  const nome = inputNome.value.trim();

  // PT: Verificamos se o nome está vazio.
  // EN: We check if the name is empty.
  // DE: Wir prüfen, ob der Name leer ist.
  if (nome === "") {
    // PT: Mostramos uma mensagem pedindo o nome.
    // EN: We show a message asking for the name.
    // DE: Wir zeigen eine Meldung an, die nach dem Namen fragt.
    resultado.textContent = "Digite seu nome.";

    // PT: Colocamos o cursor de volta no campo.
    // EN: We put the cursor back in the field.
    // DE: Wir setzen den Cursor zurück in das Feld.
    inputNome.focus();

    // PT: Encerramos a função para não continuar o código.
    // EN: We stop the function so the code does not continue.
    // DE: Wir beenden die Funktion, damit der Code nicht weiterläuft.
    return;
  }

  // PT: Criamos uma mensagem personalizada usando template string.
  // EN: We create a personalized message using a template string.
  // DE: Wir erstellen eine persönliche Nachricht mit einem Template String.
  const mensagem = `Olá, ${nome}! Continue estudando JavaScript hoje.`;

  // PT: Mostramos a mensagem dentro do parágrafo de resultado.
  // EN: We show the message inside the result paragraph.
  // DE: Wir zeigen die Nachricht im Ergebnis-Absatz an.
  resultado.textContent = mensagem;

  // PT: Limpamos o campo depois de mostrar a mensagem.
  // EN: We clear the field after showing the message.
  // DE: Wir leeren das Feld, nachdem die Nachricht angezeigt wurde.
  inputNome.value = "";

  // PT: Colocamos o foco novamente no input para facilitar novo uso.
  // EN: We put the focus back on the input to make reuse easier.
  // DE: Wir setzen den Fokus wieder auf das Eingabefeld, um die erneute Nutzung zu erleichtern.
  inputNome.focus();
}

// PT: Adicionamos um evento de clique ao botão.
// EN: We add a click event to the button.
// DE: Wir fügen dem Button ein Klick-Ereignis hinzu.
botao.addEventListener("click", gerarSaudacao);

// PT: Adicionamos um evento para detectar quando uma tecla é pressionada.
// EN: We add an event to detect when a key is pressed.
// DE: Wir fügen ein Ereignis hinzu, um zu erkennen, wann eine Taste gedrückt wird.
inputNome.addEventListener("keydown", function (event) {
  // PT: Verificamos se a tecla pressionada foi Enter.
  // EN: We check if the pressed key was Enter.
  // DE: Wir prüfen, ob die gedrückte Taste Enter war.
  if (event.key === "Enter") {
    // PT: Chamamos a função para gerar a saudação.
    // EN: We call the function to generate the greeting.
    // DE: Wir rufen die Funktion auf, um die Begrüßung zu erzeugen.
    gerarSaudacao();
  }
});
