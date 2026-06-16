// PT: Criamos uma função chamada calcular.
// EN: We create a function called calcular.
// DE: Wir erstellen eine Funktion namens calcular.
function calcular(numero1, numero2, operacao) {

  // PT: Verificamos se a operação é soma.
  // EN: We check if the operation is addition.
  // DE: Wir prüfen, ob die Operation Addition ist.
  if (operacao === "+") {

    // PT: Retornamos a soma dos dois números.
    // EN: We return the sum of the two numbers.
    // DE: Wir geben die Summe der beiden Zahlen zurück.
    return numero1 + numero2;
  }

  // PT: Verificamos se a operação é subtração.
  // EN: We check if the operation is subtraction.
  // DE: Wir prüfen, ob die Operation Subtraktion ist.
  else if (operacao === "-") {

    // PT: Retornamos o primeiro número menos o segundo.
    // EN: We return the first number minus the second.
    // DE: Wir geben die erste Zahl minus die zweite zurück.
    return numero1 - numero2;
  }

  // PT: Verificamos se a operação é multiplicação.
  // EN: We check if the operation is multiplication.
  // DE: Wir prüfen, ob die Operation Multiplikation ist.
  else if (operacao === "*") {

    // PT: Retornamos o produto dos dois números.
    // EN: We return the product of the two numbers.
    // DE: Wir geben das Produkt der beiden Zahlen zurück.
    return numero1 * numero2;
  }

  // PT: Verificamos se a operação é divisão.
  // EN: We check if the operation is division.
  // DE: Wir prüfen, ob die Operation Division ist.
  else if (operacao === "/") {

    // PT: Antes de dividir, verificamos se o segundo número é zero.
    // EN: Before dividing, we check if the second number is zero.
    // DE: Vor der Division prüfen wir, ob die zweite Zahl null ist.
    if (numero2 === 0) {

      // PT: Retornamos uma mensagem porque não devemos dividir por zero.
      // EN: We return a message because we should not divide by zero.
      // DE: Wir geben eine Meldung zurück, weil man nicht durch null teilen sollte.
      return "Não é possível dividir por zero.";
    }

    // PT: Se o segundo número não for zero, fazemos a divisão.
    // EN: If the second number is not zero, we perform the division.
    // DE: Wenn die zweite Zahl nicht null ist, führen wir die Division aus.
    return numero1 / numero2;
  }

  // PT: Se nenhuma operação for válida, retornamos uma mensagem de erro.
  // EN: If no operation is valid, we return an error message.
  // DE: Wenn keine Operation gültig ist, geben wir eine Fehlermeldung zurück.
  else {
    return "Operação inválida. Use +, -, * ou /.";
  }
}

// PT: Teste de soma.
// EN: Addition test.
// DE: Additionstest.
console.log(calcular(10, 5, "+"));

// PT: Teste de subtração.
// EN: Subtraction test.
// DE: Subtraktionstest.
console.log(calcular(10, 5, "-"));

// PT: Teste de multiplicação.
// EN: Multiplication test.
// DE: Multiplikationstest.
console.log(calcular(10, 5, "*"));

// PT: Teste de divisão.
// EN: Division test.
// DE: Divisionstest.
console.log(calcular(10, 5, "/"));

// PT: Teste de divisão por zero.
// EN: Division by zero test.
// DE: Test für Division durch null.
console.log(calcular(10, 0, "/"));

// PT: Teste de operação inválida.
// EN: Invalid operation test.
// DE: Test für eine ungültige Operation.
console.log(calcular(10, 5, "%"));

// Versão com switch:
// PT: Criamos uma função chamada calcular.
// EN: We create a function called calcular.
// DE: Wir erstellen eine Funktion namens calcular.
function calcular(numero1, numero2, operacao) {

  // PT: O switch verifica o valor da operação.
  // EN: The switch checks the value of the operation.
  // DE: Der switch prüft den Wert der Operation.
  switch (operacao) {

    // PT: Caso a operação seja soma.
    // EN: If the operation is addition.
    // DE: Falls die Operation Addition ist.
    case "+":

      // PT: Retornamos a soma.
      // EN: We return the sum.
      // DE: Wir geben die Summe zurück.
      return numero1 + numero2;

    // PT: Caso a operação seja subtração.
    // EN: If the operation is subtraction.
    // DE: Falls die Operation Subtraktion ist.
    case "-":

      // PT: Retornamos a subtração.
      // EN: We return the subtraction.
      // DE: Wir geben die Subtraktion zurück.
      return numero1 - numero2;

    // PT: Caso a operação seja multiplicação.
    // EN: If the operation is multiplication.
    // DE: Falls die Operation Multiplikation ist.
    case "*":

      // PT: Retornamos a multiplicação.
      // EN: We return the multiplication.
      // DE: Wir geben die Multiplikation zurück.
      return numero1 * numero2;

    // PT: Caso a operação seja divisão.
    // EN: If the operation is division.
    // DE: Falls die Operation Division ist.
    case "/":

      // PT: Verificamos se o segundo número é zero.
      // EN: We check if the second number is zero.
      // DE: Wir prüfen, ob die zweite Zahl null ist.
      if (numero2 === 0) {

        // PT: Retornamos uma mensagem de erro para divisão por zero.
        // EN: We return an error message for division by zero.
        // DE: Wir geben eine Fehlermeldung für die Division durch null zurück.
        return "Não é possível dividir por zero.";
      }

      // PT: Retornamos a divisão.
      // EN: We return the division.
      // DE: Wir geben die Division zurück.
      return numero1 / numero2;

    // PT: O default roda quando nenhum case combina.
    // EN: The default runs when no case matches.
    // DE: Der default wird ausgeführt, wenn kein case passt.
    default:

      // PT: Retornamos uma mensagem de operação inválida.
      // EN: We return an invalid operation message.
      // DE: Wir geben eine Meldung für eine ungültige Operation zurück.
      return "Operação inválida. Use +, -, * ou /.";
  }
}

// PT: Chamamos a função usando soma.
// EN: We call the function using addition.
// DE: Wir rufen die Funktion mit Addition auf.
console.log(calcular(20, 4, "+"));

// PT: Chamamos a função usando subtração.
// EN: We call the function using subtraction.
// DE: Wir rufen die Funktion mit Subtraktion auf.
console.log(calcular(20, 4, "-"));

// PT: Chamamos a função usando multiplicação.
// EN: We call the function using multiplication.
// DE: Wir rufen die Funktion mit Multiplikation auf.
console.log(calcular(20, 4, "*"));

// PT: Chamamos a função usando divisão.
// EN: We call the function using division.
// DE: Wir rufen die Funktion mit Division auf.
console.log(calcular(20, 4, "/"));

/*Observação: Poucas condições diferentes e mais livres: if / else if
Uma variável com várias opções fixas: switch*/

/*
Português
A função calcular recebe dois números e uma operação.
Depois ela verifica qual operação foi escolhida.
Se for soma, soma os números.
Se for subtração, subtrai.
Se for multiplicação, multiplica.
Se for divisão, primeiro verifica se o segundo número é zero.
Se não houver erro, retorna o resultado.

English
The calcular function receives two numbers and one operation.
Then it checks which operation was chosen.
If it is addition, it adds the numbers.
If it is subtraction, it subtracts them.
If it is multiplication, it multiplies them.
If it is division, it first checks if the second number is zero.
If there is no error, it returns the result.

Deutsch
Die Funktion calcular bekommt zwei Zahlen und eine Operation.
Dann prüft sie, welche Operation gewählt wurde.
Wenn es Addition ist, addiert sie die Zahlen.
Wenn es Subtraktion ist, subtrahiert sie sie.
Wenn es Multiplikation ist, multipliziert sie sie.
Wenn es Division ist, prüft sie zuerst, ob die zweite Zahl null ist.
Wenn es keinen Fehler gibt, gibt sie das Ergebnis zurück.

*/