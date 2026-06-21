// PT: Selecionamos o campo onde o usuário digita o nome.
// EN: We select the field where the user types the name.
// DE: Wir wählen das Feld aus, in das der Benutzer den Namen eingibt.
const inputNome = document.querySelector("#nome");

// PT: Selecionamos o campo onde o usuário digita o tema do estudo.
// EN: We select the field where the user types the study topic.
// DE: Wir wählen das Feld aus, in das der Benutzer das Lernthema eingibt.
const inputTema = document.querySelector("#tema");

// PT: Selecionamos o campo onde o usuário digita uma nova tarefa.
// EN: We select the field where the user types a new task.
// DE: Wir wählen das Feld aus, in das der Benutzer eine neue Aufgabe eingibt.
const inputTarefa = document.querySelector("#tarefa");

// PT: Selecionamos o botão que adiciona uma tarefa.
// EN: We select the button that adds a task.
// DE: Wir wählen den Button aus, der eine Aufgabe hinzufügt.
const botaoAdicionar = document.querySelector("#botao-adicionar");

// PT: Selecionamos a lista onde as tarefas serão mostradas.
// EN: We select the list where the tasks will be shown.
// DE: Wir wählen die Liste aus, in der die Aufgaben angezeigt werden.
const listaTarefas = document.querySelector("#lista-tarefas");

// PT: Selecionamos o botão que gera o resumo.
// EN: We select the button that generates the summary.
// DE: Wir wählen den Button aus, der die Zusammenfassung erzeugt.
const botaoResumo = document.querySelector("#botao-resumo");

// PT: Selecionamos o parágrafo onde o resumo será mostrado.
// EN: We select the paragraph where the summary will be shown.
// DE: Wir wählen den Absatz aus, in dem die Zusammenfassung angezeigt wird.
const resumo = document.querySelector("#resumo");

// PT: Criamos um array vazio para guardar as tarefas.
// EN: We create an empty array to store the tasks.
// DE: Wir erstellen ein leeres Array, um die Aufgaben zu speichern.
const tarefas = [];

// PT: Criamos uma função para adicionar uma nova tarefa.
// EN: We create a function to add a new task.
// DE: Wir erstellen eine Funktion, um eine neue Aufgabe hinzuzufügen.
function adicionarTarefa() {
  // PT: Pegamos o valor digitado e removemos espaços extras.
  // EN: We get the typed value and remove extra spaces.
  // DE: Wir holen den eingegebenen Wert und entfernen zusätzliche Leerzeichen.
  const titulo = inputTarefa.value.trim();

  // PT: Verificamos se o campo da tarefa está vazio.
  // EN: We check if the task field is empty.
  // DE: Wir prüfen, ob das Aufgabenfeld leer ist.
  if (titulo === "") {
    // PT: Mostramos uma mensagem no resumo.
    // EN: We show a message in the summary area.
    // DE: Wir zeigen eine Meldung im Zusammenfassungsbereich an.
    resumo.textContent = "Digite uma tarefa antes de adicionar.";

    // PT: Colocamos o foco de volta no campo da tarefa.
    // EN: We put the focus back on the task field.
    // DE: Wir setzen den Fokus zurück auf das Aufgabenfeld.
    inputTarefa.focus();

    // PT: Encerramos a função.
    // EN: We end the function.
    // DE: Wir beenden die Funktion.
    return;
  }

  // PT: Criamos um objeto para representar a tarefa.
  // EN: We create an object to represent the task.
  // DE: Wir erstellen ein Objekt, das die Aufgabe darstellt.
  const novaTarefa = {
    titulo,
    concluida: false
  };

  // PT: Adicionamos a nova tarefa ao array.
  // EN: We add the new task to the array.
  // DE: Wir fügen die neue Aufgabe zum Array hinzu.
  tarefas.push(novaTarefa);

  // PT: Limpamos o campo da tarefa.
  // EN: We clear the task field.
  // DE: Wir leeren das Aufgabenfeld.
  inputTarefa.value = "";

  // PT: Colocamos o foco novamente no campo da tarefa.
  // EN: We put the focus back on the task field.
  // DE: Wir setzen den Fokus wieder auf das Aufgabenfeld.
  inputTarefa.focus();

  // PT: Atualizamos a lista de tarefas na tela.
  // EN: We update the task list on the screen.
  // DE: Wir aktualisieren die Aufgabenliste auf dem Bildschirm.
  renderizarTarefas();
}

// PT: Criamos uma função para mostrar as tarefas na tela.
// EN: We create a function to show the tasks on the screen.
// DE: Wir erstellen eine Funktion, um die Aufgaben auf dem Bildschirm anzuzeigen.
function renderizarTarefas() {
  // PT: Limpamos a lista antes de desenhar novamente.
  // EN: We clear the list before drawing it again.
  // DE: Wir leeren die Liste, bevor wir sie erneut zeichnen.
  listaTarefas.innerHTML = "";

  // PT: Percorremos todas as tarefas usando for clássico.
  // EN: We go through all tasks using the classic for loop.
  // DE: Wir durchlaufen alle Aufgaben mit der klassischen for-Schleife.
  for (let i = 0; i < tarefas.length; i++) {
    // PT: Pegamos a tarefa atual pelo índice.
    // EN: We get the current task by index.
    // DE: Wir holen die aktuelle Aufgabe über den Index.
    const tarefa = tarefas[i];

    // PT: Criamos um item de lista no HTML.
    // EN: We create a list item in the HTML.
    // DE: Wir erstellen ein Listenelement im HTML.
    const item = document.createElement("li");

    // PT: Se a tarefa estiver concluída, adicionamos uma classe CSS.
    // EN: If the task is completed, we add a CSS class.
    // DE: Wenn die Aufgabe erledigt ist, fügen wir eine CSS-Klasse hinzu.
    if (tarefa.concluida) {
      item.classList.add("tarefa-concluida");
    }

    // PT: Criamos um texto de status usando operador ternário.
    // EN: We create a status text using the ternary operator.
    // DE: Wir erstellen einen Statustext mit dem ternären Operator.
    const status = tarefa.concluida ? "[x]" : "[ ]";

    // PT: Criamos o conteúdo visual da tarefa.
    // EN: We create the visual content of the task.
    // DE: Wir erstellen den sichtbaren Inhalt der Aufgabe.
    item.textContent = `${i + 1}. ${status} ${tarefa.titulo} `;

    // PT: Criamos um botão para concluir a tarefa.
    // EN: We create a button to complete the task.
    // DE: Wir erstellen einen Button, um die Aufgabe zu erledigen.
    const botaoConcluir = document.createElement("button");

    // PT: Definimos o texto do botão.
    // EN: We set the button text.
    // DE: Wir setzen den Text des Buttons.
    botaoConcluir.textContent = "Concluir";

    // PT: Se a tarefa já estiver concluída, desativamos o botão.
    // EN: If the task is already completed, we disable the button.
    // DE: Wenn die Aufgabe bereits erledigt ist, deaktivieren wir den Button.
    if (tarefa.concluida) {
      botaoConcluir.disabled = true;
    }

    // PT: Adicionamos um evento de clique ao botão concluir.
    // EN: We add a click event to the complete button.
    // DE: Wir fügen dem Erledigen-Button ein Klick-Ereignis hinzu.
    botaoConcluir.addEventListener("click", function () {
      // PT: Chamamos a função concluirTarefa passando o índice.
      // EN: We call the concluirTarefa function passing the index.
      // DE: Wir rufen die Funktion concluirTarefa auf und übergeben den Index.
      concluirTarefa(i);
    });

    // PT: Adicionamos o botão dentro do item da lista.
    // EN: We add the button inside the list item.
    // DE: Wir fügen den Button in das Listenelement ein.
    item.appendChild(botaoConcluir);

    // PT: Adicionamos o item completo dentro da lista.
    // EN: We add the complete item inside the list.
    // DE: Wir fügen das vollständige Element in die Liste ein.
    listaTarefas.appendChild(item);
  }
}

// PT: Criamos uma função para marcar uma tarefa como concluída.
// EN: We create a function to mark a task as completed.
// DE: Wir erstellen eine Funktion, um eine Aufgabe als erledigt zu markieren.
function concluirTarefa(indice) {
  // PT: Verificamos se existe uma tarefa nesse índice.
  // EN: We check if there is a task at this index.
  // DE: Wir prüfen, ob es an diesem Index eine Aufgabe gibt.
  if (!tarefas[indice]) {
    // PT: Se não existir, mostramos uma mensagem de erro.
    // EN: If it does not exist, we show an error message.
    // DE: Wenn sie nicht existiert, zeigen wir eine Fehlermeldung an.
    resumo.textContent = "Tarefa não encontrada.";

    // PT: Encerramos a função.
    // EN: We end the function.
    // DE: Wir beenden die Funktion.
    return;
  }

  // PT: Alteramos a propriedade concluida para true.
  // EN: We change the completed property to true.
  // DE: Wir ändern die Eigenschaft concluida auf true.
  tarefas[indice].concluida = true;

  // PT: Atualizamos a lista na tela.
  // EN: We update the list on the screen.
  // DE: Wir aktualisieren die Liste auf dem Bildschirm.
  renderizarTarefas();
}

// PT: Criamos uma função para contar tarefas concluídas.
// EN: We create a function to count completed tasks.
// DE: Wir erstellen eine Funktion, um erledigte Aufgaben zu zählen.
function contarTarefasConcluidas() {
  // PT: Criamos um contador começando em zero.
  // EN: We create a counter starting at zero.
  // DE: Wir erstellen einen Zähler, der bei null beginnt.
  let total = 0;

  // PT: Percorremos todas as tarefas com for...of.
  // EN: We go through all tasks with for...of.
  // DE: Wir durchlaufen alle Aufgaben mit for...of.
  for (let tarefa of tarefas) {
    // PT: Verificamos se a tarefa está concluída.
    // EN: We check if the task is completed.
    // DE: Wir prüfen, ob die Aufgabe erledigt ist.
    if (tarefa.concluida) {
      // PT: Aumentamos o contador em 1.
      // EN: We increase the counter by 1.
      // DE: Wir erhöhen den Zähler um 1.
      total++;
    }
  }

  // PT: Retornamos o total de tarefas concluídas.
  // EN: We return the total number of completed tasks.
  // DE: Wir geben die Gesamtzahl der erledigten Aufgaben zurück.
  return total;
}

// PT: Criamos uma função para gerar o resumo do estudo.
// EN: We create a function to generate the study summary.
// DE: Wir erstellen eine Funktion, um die Lernzusammenfassung zu erzeugen.
function gerarResumo() {
  // PT: Pegamos o nome digitado e removemos espaços extras.
  // EN: We get the typed name and remove extra spaces.
  // DE: Wir holen den eingegebenen Namen und entfernen zusätzliche Leerzeichen.
  const nome = inputNome.value.trim();

  // PT: Pegamos o tema digitado e removemos espaços extras.
  // EN: We get the typed topic and remove extra spaces.
  // DE: Wir holen das eingegebene Thema und entfernen zusätzliche Leerzeichen.
  const tema = inputTema.value.trim();

  // PT: Verificamos se o nome está vazio.
  // EN: We check if the name is empty.
  // DE: Wir prüfen, ob der Name leer ist.
  if (nome === "") {
    // PT: Mostramos uma mensagem pedindo o nome.
    // EN: We show a message asking for the name.
    // DE: Wir zeigen eine Meldung an, die nach dem Namen fragt.
    resumo.textContent = "Digite o nome do estudante.";

    // PT: Colocamos o foco no campo do nome.
    // EN: We put the focus on the name field.
    // DE: Wir setzen den Fokus auf das Namensfeld.
    inputNome.focus();

    // PT: Encerramos a função.
    // EN: We end the function.
    // DE: Wir beenden die Funktion.
    return;
  }

  // PT: Verificamos se o tema está vazio.
  // EN: We check if the topic is empty.
  // DE: Wir prüfen, ob das Thema leer ist.
  if (tema === "") {
    // PT: Mostramos uma mensagem pedindo o tema.
    // EN: We show a message asking for the topic.
    // DE: Wir zeigen eine Meldung an, die nach dem Thema fragt.
    resumo.textContent = "Digite o tema de estudo.";

    // PT: Colocamos o foco no campo do tema.
    // EN: We put the focus on the topic field.
    // DE: Wir setzen den Fokus auf das Themenfeld.
    inputTema.focus();

    // PT: Encerramos a função.
    // EN: We end the function.
    // DE: Wir beenden die Funktion.
    return;
  }

  // PT: Guardamos o total de tarefas cadastradas.
  // EN: We store the total number of registered tasks.
  // DE: Wir speichern die Gesamtzahl der registrierten Aufgaben.
  const totalTarefas = tarefas.length;

  // PT: Calculamos quantas tarefas foram concluídas.
  // EN: We calculate how many tasks were completed.
  // DE: Wir berechnen, wie viele Aufgaben erledigt wurden.
  const concluidas = contarTarefasConcluidas();

  // PT: Verificamos se nenhuma tarefa foi cadastrada.
  // EN: We check if no task was registered.
  // DE: Wir prüfen, ob keine Aufgabe registriert wurde.
  if (totalTarefas === 0) {
    // PT: Mostramos uma mensagem orientando a cadastrar tarefas.
    // EN: We show a message asking the user to register tasks.
    // DE: Wir zeigen eine Meldung an, die den Benutzer bittet, Aufgaben zu registrieren.
    resumo.textContent = `${nome}, adicione pelo menos uma tarefa para organizar seu estudo de ${tema}.`;

    // PT: Encerramos a função.
    // EN: We end the function.
    // DE: Wir beenden die Funktion.
    return;
  }

  // PT: Criamos uma mensagem final personalizada.
  // EN: We create a personalized final message.
  // DE: Wir erstellen eine persönliche Abschlussnachricht.
  const mensagem = `${nome}, hoje você estudou ${tema}. Você cadastrou ${totalTarefas} tarefa(s) e concluiu ${concluidas}. Uma hora por dia constrói um programador.`;

  // PT: Mostramos a mensagem no resumo.
  // EN: We show the message in the summary.
  // DE: Wir zeigen die Nachricht in der Zusammenfassung an.
  resumo.textContent = mensagem;
}

// PT: Quando o botão adicionar for clicado, adicionamos uma tarefa.
// EN: When the add button is clicked, we add a task.
// DE: Wenn der Hinzufügen-Button geklickt wird, fügen wir eine Aufgabe hinzu.
botaoAdicionar.addEventListener("click", adicionarTarefa);

// PT: Quando o botão resumo for clicado, geramos o resumo.
// EN: When the summary button is clicked, we generate the summary.
// DE: Wenn der Zusammenfassungs-Button geklickt wird, erzeugen wir die Zusammenfassung.
botaoResumo.addEventListener("click", gerarResumo);

// PT: Permitimos adicionar tarefa apertando Enter no campo da tarefa.
// EN: We allow adding a task by pressing Enter in the task field.
// DE: Wir ermöglichen das Hinzufügen einer Aufgabe mit Enter im Aufgabenfeld.
inputTarefa.addEventListener("keydown", function (event) {
  // PT: Verificamos se a tecla pressionada foi Enter.
  // EN: We check if the pressed key was Enter.
  // DE: Wir prüfen, ob die gedrückte Taste Enter war.
  if (event.key === "Enter") {
    // PT: Chamamos a função adicionarTarefa.
    // EN: We call the adicionarTarefa function.
    // DE: Wir rufen die Funktion adicionarTarefa auf.
    adicionarTarefa();
  }
});