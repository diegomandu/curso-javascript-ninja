/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/


var championship = 'Brasileirao';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

var teams = [ 'Brasileirao', 'Campeonato 2', 'Campeonato 3', 'Campeonato 4', 'Campeonato 5' ];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

function showTeamPosition( num ){
var position = ++num;
	if( num <= 5 ){
		return 'O time que está em ' + position++ + 'º lugar é o ' + teams[num] + '.';
	}
	return 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log(showTeamPosition(0));
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
teams[5] = 'Campeonato 6';

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var x = 20;
while( x <= 30 ){

	console.log( x++ );

}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

function convertToHex( color ){
	var colors = [ '#000000', '#0000FF', '#008000', '#A020F0', '#FFC0CB' ];
	switch (color){
		case 'black':
			console.log('O hexadecimal para a cor ' + color + ' é ' + colors[0] + '.');
			break;
		case 'blue':
			console.log('O hexadecimal para a cor ' + color + ' é ' + colors[1] + '.');
			break;
		case 'green':
			console.log('O hexadecimal para a cor ' + color + ' é ' + colors[2] + '.');
			break;
		case 'purple':
			console.log('O hexadecimal para a cor ' + color + ' é ' + colors[3] + '.');
			break;
		case 'pink':
			console.log('O hexadecimal para a cor ' + color + ' é ' + colors[4] + '.');
			break;
		default:
			console.log('Nao temos o equivalente hexadecimal para '+ color );

	}

}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex('black');
convertToHex('blue');
convertToHex('green');
convertToHex('purple');
convertToHex('pink');
convertToHex('red');
convertToHex('orange');
convertToHex('gray');

