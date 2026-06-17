const tarefas = [];

function adicionarTarefa(titulo) {
    const novaTarefa = {
        titulo: titulo,
        concluida: false
    };
    tarefas.push(novaTarefa);
}

function concluirTarefa(numero) {
    const indice = numero - 1;
    if (tarefas[indice]) {
        tarefas[indice].concluida = true;
        console.log(`Tarefa "${tarefas[indice].titulo}" concluída!`);
    } else {
        console.log("Tarefa não encontrada!");
    }
}

function listarTarefas() {
    console.log("Lista de Tarefas:");

    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada!");
        return;
    }

    for (let i = 0; i < tarefas.length; i++) {
        const tarefa = tarefas[i];
        const status = tarefa.concluida ? "[x]" : "[ ]";
        console.log(`${i + 1}. ${status} ${tarefa.titulo}`);
    }
}

adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Treinar inglês");
adicionarTarefa("Revisar alemão");
adicionarTarefa("Subir exercício para o GitHub");

listarTarefas();

concluirTarefa(2);
concluirTarefa(3);

listarTarefas();

/*
// PT: Criamos um array vazio para guardar as tarefas.
// EN: We create an empty array to store the tasks.
// DE: Wir erstellen ein leeres Array, um die Aufgaben zu speichern.
const tarefas = [];

// PT: Criamos uma função para adicionar uma nova tarefa.
// EN: We create a function to add a new task.
// DE: Wir erstellen eine Funktion, um eine neue Aufgabe hinzuzufügen.
function adicionarTarefa(titulo) {

  // PT: Criamos um objeto com os dados da tarefa.
// EN: We create an object with the task data.
// DE: Wir erstellen ein Objekt mit den Aufgabendaten.
  const novaTarefa = {
    titulo: titulo,
    concluida: false
  };

  // PT: Adicionamos a nova tarefa ao final do array.
// EN: We add the new task to the end of the array.
// DE: Wir fügen die neue Aufgabe am Ende des Arrays hinzu.
  tarefas.push(novaTarefa);
}

// PT: Criamos uma função para marcar uma tarefa como concluída.
// EN: We create a function to mark a task as completed.
// DE: Wir erstellen eine Funktion, um eine Aufgabe als erledigt zu markieren.
function concluirTarefa(numero) {

  // PT: Convertendo o número visual da tarefa para índice do array.
// EN: We convert the visual task number to the array index.
// DE: Wir wandeln die sichtbare Aufgabennummer in den Array-Index um.
  const indice = numero - 1;

  // PT: Verificamos se existe uma tarefa nesse índice.
// EN: We check if there is a task at this index.
// DE: Wir prüfen, ob es an diesem Index eine Aufgabe gibt.
  if (tarefas[indice]) {

    // PT: Alteramos a propriedade concluida para true.
// EN: We change the completed property to true.
// DE: Wir ändern die Eigenschaft concluida auf true.
    tarefas[indice].concluida = true;

    // PT: Mostramos uma mensagem de confirmação.
// EN: We show a confirmation message.
// DE: Wir zeigen eine Bestätigungsmeldung an.
    console.log(`Tarefa "${tarefas[indice].titulo}" concluída!`);
  } else {

    // PT: Se a tarefa não existir, mostramos uma mensagem de erro.
// EN: If the task does not exist, we show an error message.
// DE: Wenn die Aufgabe nicht existiert, zeigen wir eine Fehlermeldung an.
    console.log("Tarefa não encontrada.");
  }
}

// PT: Criamos uma função para listar todas as tarefas.
// EN: We create a function to list all tasks.
// DE: Wir erstellen eine Funktion, um alle Aufgaben aufzulisten.
function listarTarefas() {

  // PT: Mostramos um título antes da lista.
// EN: We show a title before the list.
// DE: Wir zeigen einen Titel vor der Liste an.
  console.log("Lista de tarefas:");

  // PT: Verificamos se o array está vazio.
// EN: We check if the array is empty.
// DE: Wir prüfen, ob das Array leer ist.
  if (tarefas.length === 0) {

    // PT: Se não houver tarefas, mostramos uma mensagem.
// EN: If there are no tasks, we show a message.
// DE: Wenn es keine Aufgaben gibt, zeigen wir eine Meldung an.
    console.log("Nenhuma tarefa cadastrada.");

    // PT: Encerramos a função aqui.
// EN: We end the function here.
// DE: Wir beenden die Funktion hier.
    return;
  }

  // PT: Usamos o for clássico para percorrer a lista com índice.
// EN: We use the classic for loop to go through the list with an index.
// DE: Wir verwenden die klassische for-Schleife, um die Liste mit Index zu durchlaufen.
  for (let i = 0; i < tarefas.length; i++) {

    // PT: Pegamos a tarefa atual.
// EN: We get the current task.
// DE: Wir holen die aktuelle Aufgabe.
    const tarefa = tarefas[i];

    // PT: Usamos operador ternário para criar o status visual.
// EN: We use the ternary operator to create the visual status.
// DE: Wir verwenden den ternären Operator, um den visuellen Status zu erstellen.
    const status = tarefa.concluida ? "[x]" : "[ ]";

    // PT: Mostramos número, status e título.
// EN: We show number, status, and title.
// DE: Wir zeigen Nummer, Status und Titel an.
    console.log(`${i + 1}. ${status} ${tarefa.titulo}`);
  }
}

// PT: Adicionamos tarefas de exemplo.
// EN: We add example tasks.
// DE: Wir fügen Beispielaufgaben hinzu.
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Treinar inglês");
adicionarTarefa("Revisar alemão");
adicionarTarefa("Subir exercício para o GitHub");

// PT: Listamos as tarefas antes de concluir alguma.
// EN: We list the tasks before completing any of them.
// DE: Wir listen die Aufgaben auf, bevor eine erledigt wird.
listarTarefas();

// PT: Marcamos a segunda tarefa como concluída.
// EN: We mark the second task as completed.
// DE: Wir markieren die zweite Aufgabe als erledigt.
concluirTarefa(2);

// PT: Marcamos a quarta tarefa como concluída.
// EN: We mark the fourth task as completed.
// DE: Wir markieren die vierte Aufgabe als erledigt.
concluirTarefa(4);

// PT: Listamos novamente para ver as mudanças.
// EN: We list again to see the changes.
// DE: Wir listen erneut auf, um die Änderungen zu sehen.
listarTarefas();
*/
