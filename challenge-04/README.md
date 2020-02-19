# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function( x ){
return !!x;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(0); //false
isTruthy(false); //false
isTruthy(''); //false
isTruthy(""); //false
isTruthy(undefined); //false
isTruthy(-0); //false
isTruthy(NaN); //false
isTruthy(null); //false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy(1) //true
isTruthy('v') //true
isTruthy(true); //true
isTruthy(2); //true
isTruthy(3); //true
isTruthy(-6); //true
isTruthy(7); //true
isTruthy(8); //true
isTruthy(9); //true
isTruthy(10); //true

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
marca :             'Hyundai',
modelo:             'HB20',
placa:              '22345',
ano:                2020,
cor:                'prata',
quantasPortas:       4,
assentos:            5,
quantidadePessoas:   0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudaCor = function(cor){
carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function(){
return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
return carro.marca; 
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModule = function(){
return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo + '';
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.addPessoaCarro = function(nPessoas){
var assentoDisp = carro.assentos - carro.quantidadePessoas;
var umAssento = assentoDisp === 1 ? 'pessoa' : 'pessoas';
  if(nPessoas <= 0){
      carro.quantidadePessoas += nPessoas;
      return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
  }
  if( assentoDisp === 0 ){
    return 'O carro já está lotado!';
  }
  if( assentoDisp ){
    if( nPessoas > assentoDisp ){
      
      return 'Só cabem mais ' + assentoDisp + ' ' + umAssento + '!';
    }else{
      carro.quantidadePessoas += nPessoas;
      if( carro.quantidadePessoas === carro.assentos ){
        return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro! ,agora O carro já está lotado!';  
       }
      return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
    }
 }
 
  
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

carro.obterCor(); //verde

// Mude a cor do carro para vermelho.

carro.mudaCor('preto');

// E agora, qual a cor do carro?

carro.obterCor(); //preto

// Mude a cor do carro para verde musgo.

carro.mudaCor('verde musgo');

// E agora, qual a cor do carro?

carro.obterCor();

// Qual a marca e modelo do carro?

carro.obterModelo();

// Adicione 2 pessoas no carro.

carro.addPessoaCarro(2); // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.

carro.addPessoaCarro(4); // "Só cabem mais 3 pessoas!"

// Faça o carro encher.

carro.addPessoaCarro(3); // "Já temos 5 pessoas no carro! ,agora O carro já está lotado!"

// Tire 4 pessoas do carro.

carro.addPessoaCarro(-4); // "Já temos 1 pessoas no carro!"

// Adicione 10 pessoas no carro.

carro.addPessoaCarro(10); // "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?

carro.quantidadePessoas; // 1

```
