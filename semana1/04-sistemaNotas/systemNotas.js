// PT: Criamos um array vazio para guardar os alunos.
// EN: We create an empty array to store the students.
// DE: Wir erstellen ein leeres Array, um die Schüler zu speichern.
const alunos = [];

// PT: Validamos se a nota está entre 0 e 10.
// EN: We validate if the grade is between 0 and 10.
// DE: Wir prüfen, ob die Note zwischen 0 und 10 liegt.
function notaValida(nota) {
  return nota >= 0 && nota <= 10;
}

// PT: Calculamos a média de duas notas.
// EN: We calculate the average of two grades.
// DE: Wir berechnen den Durchschnitt von zwei Noten.
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

// PT: Retornamos a situação do aluno de acordo com a média.
// EN: We return the student's status according to the average.
// DE: Wir geben den Status des Schülers entsprechend dem Durchschnitt zurück.
function verificarSituacao(media) {
  return media >= 6 ? "Aprovado" : "Reprovado";
}

// PT: Adicionamos um novo aluno à lista.
// EN: We add a new student to the list.
// DE: Wir fügen einen neuen Schüler zur Liste hinzu.
function adicionarAluno(nome, nota1, nota2) {
  // PT: Se alguma nota for inválida, mostramos erro e encerramos.
// EN: If any grade is invalid, we show an error and stop.
// DE: Wenn eine Note ungültig ist, zeigen wir einen Fehler und stoppen.
  if (!notaValida(nota1) || !notaValida(nota2)) {
    console.log(`Erro: notas inválidas para ${nome}.`);
    return;
  }

  // PT: Calculamos a média.
// EN: We calculate the average.
// DE: Wir berechnen den Durchschnitt.
  const media = calcularMedia(nota1, nota2);

  // PT: Criamos o objeto do aluno usando sintaxe moderna.
// EN: We create the student object using modern syntax.
// DE: Wir erstellen das Schüler-Objekt mit moderner Syntax.
  const aluno = {
    nome,
    nota1,
    nota2,
    media,
    situacao: verificarSituacao(media)
  };

  // PT: Adicionamos o aluno ao array.
// EN: We add the student to the array.
// DE: Wir fügen den Schüler zum Array hinzu.
  alunos.push(aluno);
}

// PT: Listamos todos os alunos cadastrados.
// EN: We list all registered students.
// DE: Wir listen alle registrierten Schüler auf.
function listarAlunos() {
  // PT: Se não houver alunos, mostramos uma mensagem e encerramos.
// EN: If there are no students, we show a message and stop.
// DE: Wenn es keine Schüler gibt, zeigen wir eine Meldung und stoppen.
  if (alunos.length === 0) {
    console.log("Nenhum aluno cadastrado.");
    return;
  }

  // PT: Criamos uma variável para numerar os alunos.
// EN: We create a variable to number the students.
// DE: Wir erstellen eine Variable, um die Schüler zu nummerieren.
  let numero = 1;

  // PT: Percorremos cada aluno com for...of.
// EN: We go through each student with for...of.
// DE: Wir durchlaufen jeden Schüler mit for...of.
  for (let aluno of alunos) {
    console.log(`${numero}. ${aluno.nome} | Média: ${aluno.media} | ${aluno.situacao}`);
    numero++;
  }
}

// PT: Testes do sistema.
// EN: System tests.
// DE: Systemtests.
adicionarAluno("Ana", 8, 7);
adicionarAluno("Carlos", 5, 4);
adicionarAluno("Marina", 9, 10);
adicionarAluno("João", 12, 8);

listarAlunos();