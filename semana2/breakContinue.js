// PT: Criamos uma função para analisar uma lista de números.
// EN: We create a function to analyze a list of numbers.
// DE: Wir erstellen eine Funktion, um eine Zahlenliste zu analysieren.
function analisarNumeros(numeros) {
  // PT: Percorremos cada número da lista.
  // EN: We go through each number in the list.
  // DE: Wir durchlaufen jede Zahl in der Liste.
  for (let numero of numeros) {
    // PT: Se o número for negativo, pulamos para o próximo.
    // EN: If the number is negative, we skip to the next one.
    // DE: Wenn die Zahl negativ ist, springen wir zur nächsten.
    if (numero < 0) {
      // PT: Mostramos uma mensagem indicando que o número foi ignorado.
      // EN: We show a message indicating that the number was ignored.
      // DE: Wir zeigen eine Meldung, dass die Zahl ignoriert wurde.
      console.log(`Número ignorado: ${numero}`);

      // PT: O continue pula o restante desta repetição.
      // EN: The continue statement skips the rest of this iteration.
      // DE: Die continue-Anweisung überspringt den Rest dieser Wiederholung.
      continue;
    }

    // PT: Se o número for zero, encerramos o laço.
    // EN: If the number is zero, we stop the loop.
    // DE: Wenn die Zahl null ist, beenden wir die Schleife.
    if (numero === 0) {
      // PT: Mostramos uma mensagem antes de parar.
      // EN: We show a message before stopping.
      // DE: Wir zeigen eine Meldung, bevor wir stoppen.
      console.log("Zero encontrado. O laço será encerrado.");

      // PT: O break encerra o laço.
      // EN: The break statement stops the loop.
      // DE: Die break-Anweisung beendet die Schleife.
      break;
    }

    // PT: Se o número for positivo, mostramos como válido.
    // EN: If the number is positive, we show it as valid.
    // DE: Wenn die Zahl positiv ist, zeigen wir sie als gültig an.
    console.log(`Número válido: ${numero}`);
  }
}

// PT: Criamos uma lista de números para teste.
// EN: We create a list of numbers for testing.
// DE: Wir erstellen eine Zahlenliste zum Testen.
const listaDeNumeros = [10, 5, -3, 8, -1, 0, 12, 20];

// PT: Chamamos a função passando a lista como argumento.
// EN: We call the function passing the list as an argument.
// DE: Wir rufen die Funktion auf und übergeben die Liste als Argument.
analisarNumeros(listaDeNumeros);