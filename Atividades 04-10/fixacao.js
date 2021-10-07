/* 1) Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.
a) Chamar a função e exibir o resultado no console. */

var multiplicar = (valor1, valor2) => {
    var calculo = valor1 * valor2;
    
    return "O resultado é " + calculo;
  }
  
    console.log(multiplicar(15, 3));
  
  /* 2) Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.
  a) Chamar a função e exibir o resultado no console. */
  
  var maiorNumero = (num1, num2, num3) => {
    if(num1 > num2 && num2 >= num3){
      return num1;
    }
    else if(num2 > num1 && num1 >= num3){
      return num2;
    }
    else if(num3 > num2 && num2 >= num1){
      return num3
    }
  }
      console.log(maiorNumero(5, 7, 2));
  
  /* 3) Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.
  a) Chamar a função e exibir no console o resultado. */
  
  var parOuImpar = (valor) => {
    if(Number.isInteger(valor)){
      if(valor % 2 == 0){
        return "Par";
      }
      else{
        return "Ímpar";
      }
    }
    else{
      return "Não é um número inteiro"
    }
  }
        console.log(parOuImpar(6));