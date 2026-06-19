// PT: Criamos um array vazio para guardar os gastos.
// EN: We create an empty array to store the expenses.
// DE: Wir erstellen ein leeres Array, um die Ausgaben zu speichern.
const gastos = [];

// PT: Criamos uma função para validar o valor do gasto.
// EN: We create a function to validate the expense value.
// DE: Wir erstellen eine Funktion, um den Ausgabenbetrag zu validieren.
function valorValido(valor) {
  // PT: O valor é válido se for maior que zero.
  // EN: The value is valid if it is greater than zero.
  // DE: Der Betrag ist gültig, wenn er größer als null ist.
  return valor > 0;
}

// PT: Criamos uma função para adicionar um gasto.
// EN: We create a function to add an expense.
// DE: Wir erstellen eine Funktion, um eine Ausgabe hinzuzufügen.
function adicionarGasto(descricao, valor, categoria) {
  // PT: Verificamos se o valor é inválido.
  // EN: We check if the value is invalid.
  // DE: Wir prüfen, ob der Betrag ungültig ist.
  if (!valorValido(valor)) {
    // PT: Se o valor for inválido, mostramos uma mensagem de erro.
    // EN: If the value is invalid, we show an error message.
    // DE: Wenn der Betrag ungültig ist, zeigen wir eine Fehlermeldung an.
    console.log(`Erro: o valor do gasto "${descricao}" precisa ser maior que zero.`);

    // PT: Encerramos a função sem adicionar o gasto.
    // EN: We end the function without adding the expense.
    // DE: Wir beenden die Funktion, ohne die Ausgabe hinzuzufügen.
    return;
  }

  // PT: Criamos um objeto com os dados do gasto.
  // EN: We create an object with the expense data.
  // DE: Wir erstellen ein Objekt mit den Ausgabendaten.
  const gasto = {
    descricao,
    valor,
    categoria
  };

  // PT: Adicionamos o gasto ao array.
  // EN: We add the expense to the array.
  // DE: Wir fügen die Ausgabe zum Array hinzu.
  gastos.push(gasto);
}

// PT: Criamos uma função para calcular o total dos gastos.
// EN: We create a function to calculate the total expenses.
// DE: Wir erstellen eine Funktion, um die Gesamtausgaben zu berechnen.
function calcularTotal() {
  // PT: Criamos uma variável acumuladora.
  // EN: We create an accumulator variable.
  // DE: Wir erstellen eine Akkumulator-Variable.
  let total = 0;

  // PT: Percorremos todos os gastos da lista.
  // EN: We go through all expenses in the list.
  // DE: Wir durchlaufen alle Ausgaben in der Liste.
  for (let gasto of gastos) {
    // PT: Somamos o valor de cada gasto ao total.
    // EN: We add each expense value to the total.
    // DE: Wir addieren jeden Ausgabenbetrag zur Gesamtsumme.
    total += gasto.valor;
  }

  // PT: Retornamos o total calculado.
  // EN: We return the calculated total.
  // DE: Wir geben die berechnete Gesamtsumme zurück.
  return total;
}

// PT: Criamos uma função para listar todos os gastos.
// EN: We create a function to list all expenses.
// DE: Wir erstellen eine Funktion, um alle Ausgaben aufzulisten.
function listarGastos() {
  // PT: Verificamos se não há gastos cadastrados.
  // EN: We check if there are no registered expenses.
  // DE: Wir prüfen, ob keine Ausgaben registriert sind.
  if (gastos.length === 0) {
    // PT: Mostramos uma mensagem se a lista estiver vazia.
    // EN: We show a message if the list is empty.
    // DE: Wir zeigen eine Meldung an, wenn die Liste leer ist.
    console.log("Nenhum gasto cadastrado.");

    // PT: Encerramos a função.
    // EN: We end the function.
    // DE: Wir beenden die Funktion.
    return;
  }

  // PT: Mostramos o título do relatório.
  // EN: We show the report title.
  // DE: Wir zeigen den Titel des Berichts an.
  console.log("Relatório de gastos:");

  // PT: Usamos for clássico para acessar índice e gasto.
  // EN: We use the classic for loop to access index and expense.
  // DE: Wir verwenden die klassische for-Schleife, um Index und Ausgabe zu bekommen.
  for (let i = 0; i < gastos.length; i++) {
    // PT: Pegamos o gasto atual.
    // EN: We get the current expense.
    // DE: Wir holen die aktuelle Ausgabe.
    const gasto = gastos[i];

    // PT: Formatamos o valor com duas casas decimais.
    // EN: We format the value with two decimal places.
    // DE: Wir formatieren den Betrag mit zwei Dezimalstellen.
    const valorFormatado = gasto.valor.toFixed(2);

    // PT: Mostramos o gasto no console.
    // EN: We show the expense in the console.
    // DE: Wir zeigen die Ausgabe in der Konsole an.
    console.log(`${i + 1}. ${gasto.descricao} | ${gasto.categoria} | €${valorFormatado}`);
  }

  // PT: Calculamos o total.
  // EN: We calculate the total.
  // DE: Wir berechnen die Gesamtsumme.
  const total = calcularTotal();

  // PT: Mostramos o total formatado.
  // EN: We show the formatted total.
  // DE: Wir zeigen die formatierte Gesamtsumme an.
  console.log(`Total de gastos: €${total.toFixed(2)}`);
}

// PT: Adicionamos gastos válidos.
// EN: We add valid expenses.
// DE: Wir fügen gültige Ausgaben hinzu.
adicionarGasto("Mercado", 35.9, "Casa");
adicionarGasto("Transporte", 12.5, "Mobilidade");
adicionarGasto("Livro de JavaScript", 29.99, "Estudo");
adicionarGasto("Café", 3.2, "Alimentação");

// PT: Tentamos adicionar um gasto inválido.
// EN: We try to add an invalid expense.
// DE: Wir versuchen, eine ungültige Ausgabe hinzuzufügen.
adicionarGasto("Erro de teste", -20, "Teste");

// PT: Listamos o relatório final.
// EN: We list the final report.
// DE: Wir listen den endgültigen Bericht auf.
listarGastos();