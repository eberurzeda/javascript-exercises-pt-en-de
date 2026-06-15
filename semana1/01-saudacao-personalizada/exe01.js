// PT: Criamos uma função chamada saudarUsuario.
// EN: We create a function called saudarUsuario.
// DE: Wir erstellen eine Funktion namens saudarUsuario.
function saudarUsuario(nome, hora) {

  // PT: Verificamos se a hora está entre 0 e 11.
  // EN: We check if the hour is between 0 and 11.
  // DE: Wir prüfen, ob die Uhrzeit zwischen 0 und 11 liegt.
  if (hora >= 0 && hora <= 11) {

    // PT: Se for manhã, retornamos "Bom dia" com o nome.
    // EN: If it is morning, we return "Good morning" with the name.
    // DE: Wenn es Morgen ist, geben wir „Guten Morgen“ mit dem Namen zurück.
    return `Bom dia, ${nome}!`;
  }

  // PT: Se não for manhã, verificamos se a hora está entre 12 e 17.
  // EN: If it is not morning, we check if the hour is between 12 and 17.
  // DE: Wenn es nicht Morgen ist, prüfen wir, ob die Uhrzeit zwischen 12 und 17 liegt.
  else if (hora >= 12 && hora <= 17) {

    // PT: Se for tarde, retornamos "Boa tarde" com o nome.
    // EN: If it is afternoon, we return "Good afternoon" with the name.
    // DE: Wenn es Nachmittag ist, geben wir „Guten Tag“ mit dem Namen zurück.
    return `Boa tarde, ${nome}!`;
  }

  // PT: Se não for tarde, verificamos se a hora está entre 18 e 23.
  // EN: If it is not afternoon, we check if the hour is between 18 and 23.
  // DE: Wenn es nicht Nachmittag ist, prüfen wir, ob die Uhrzeit zwischen 18 und 23 liegt.
  else if (hora >= 18 && hora <= 23) {

    // PT: Se for noite, retornamos "Boa noite" com o nome.
    // EN: If it is evening/night, we return "Good evening" with the name.
    // DE: Wenn es Abend ist, geben wir „Guten Abend“ mit dem Namen zurück.
    return `Boa noite, ${nome}!`;
  }

  // PT: Se a hora não estiver entre 0 e 23, retornamos uma mensagem de erro.
  // EN: If the hour is not between 0 and 23, we return an error message.
  // DE: Wenn die Uhrzeit nicht zwischen 0 und 23 liegt, geben wir eine Fehlermeldung zurück.
  else {
    return "Hora inválida. Digite uma hora entre 0 e 23.";
  }
}

// PT: Chamamos a função com o nome "Eber" e a hora 9.
// EN: We call the function with the name "Eber" and the hour 9.
// DE: Wir rufen die Funktion mit dem Namen „Eber“ und der Uhrzeit 9 auf.
const mensagem = saudarUsuario("Eber", 9);

// PT: Mostramos o resultado no console.
// EN: We show the result in the console.
// DE: Wir zeigen das Ergebnis in der Konsole an.
console.log(mensagem);

/*
PT: A função recebe um nome e uma hora. Depois verifica em qual parte do dia essa hora está e retorna uma saudação personalizada.

EN: The function receives a name and an hour. Then it checks which part of the day the hour belongs to and returns a personalized greeting.

DE: Die Funktion bekommt einen Namen und eine Uhrzeit. Dann prüft sie, zu welchem Teil des Tages die Uhrzeit gehört, und gibt eine persönliche Begrüßung zurück.

*/