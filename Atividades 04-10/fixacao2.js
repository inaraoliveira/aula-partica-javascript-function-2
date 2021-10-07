/* 1) Criar uma função anônima que recebe duas notas de um aluno do ensino médio:
a) Calcular a média do aluno.
b) Se a média for maior ou igual a 7, retornar "Aprovado!";
c) Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";
d) Se a média for menor que 5, retornar "Reprovado!".
e) Chamar a função e exibir no console o resultado. */

var notas = function (nota1, nota2){
    let media = (nota1 + nota2) / 2;
    
    if(media >= 7){
      return "Aprovado!";
    }
    else if(media >= 5 && media < 7){
      return "Recuperação!"
    }
    else if(media < 5){
      return "Reprovado!"
    }
  }
      console.log(notas(7, 9));
  
/* 2) Criar uma função anônima que calcula a tabuada de 3.
a) Chamar a função e exibir no console o resultado. */
  
var tabuada = function (){
    let num = 3;
    for(i = 1; i <= 10; i++){
      let calculo = 3 * i;
      console.log(num + " x " + i + " = " + calculo);
    }
  }
      console.log(tabuada());

/* 3) Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.
a) Chamar a função e exibir no console o resultado. */

var anoNascimento = (ano) => {
    let calculo = 2021 - ano;
    if(calculo >= 18){
      return "Maior de idade";
    }
    else{
      return "Menor de idade";
    }
  }
      console.log(anoNascimento(1999));