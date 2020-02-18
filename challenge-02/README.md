# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(x,y){
var Res = x + y;
return Res;
}





// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var result = sum(1,2) + 5;

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var hue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function returnString(x){
y = 1;
x = 'O valor da variavel agora e ' + y ;
return x;
}

// Invoque a função criada acima.
var test;
returnString(test);

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variavel agora e 1
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
?

function threeArg(x,y,z){
 if(x == undefined || y == undefined || z == undefined){
return;
}
var result = (x * y * z) + 2; 

return result;
}

// Invoque a função criada acima, passando só dois números como argumento.

threeArg(1,2);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

    // Undefined

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
threeArg(1,2,3)


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

    // 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
?

function fun(x,y,z){
 if(x === undefined && y === undefined && z === undefined){
 return false;
 }else if( y === undefined && z === undefined){
 return x;
 }else if( x === undefined && y === undefined ){
  return z;
 }else if( x === undefined && z === undefined  ){
  return y;
 }else if( x === undefined ){
  return y + z;
 }else if( y === undefined ){
  return x + z;
 }else if( z === undefined ){
  return x + y;
 }else{
  return (x + y) / z;
 }
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

fun(); // false
fun(10); // 10
fun(10,20); // 30
fun(10,20,10); //3


```

