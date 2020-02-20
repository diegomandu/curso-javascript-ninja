/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var myVar = [ null, 0, true, {}, [1,2], 'Diego' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunc(x){
	return x;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunc(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunc2(arr,num){
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myVar2 = [ true, 0, null, undefined, myFunc ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunc2(myVar2, 0));
console.log(myFunc2(myVar2, 1));
console.log(myFunc2(myVar2, 2));
console.log(myFunc2(myVar2, 3));
console.log(myFunc2(myVar2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(name){
	
	var obj = {
			'lordOfTheRings':    {
							pageQuantity: 		10,
							author:  		 	'Tolkien',
							publishC: 			'Newedit'
						 },
			'science':		  {
							pageQuantity: 		10,
							author: 			'Huehue',
							publishC: 			'Publishhue'
						},
			'digital':	      {
							pageQuantity: 		10,
							author: 			'Laurence',
							publishC: 			'Novadigital'
						}
						
	}



	var book = obj[name] ? obj[name] : obj;


	return book;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log("O livro lordOfTheRings tem " + book( 'lordOfTheRings' ).pageQuantity + " páginas!");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log("O autor do livro science é " + book( 'science' ).author + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro digital foi publicado pela editora " + book( 'digital' ).publishC + ".");
