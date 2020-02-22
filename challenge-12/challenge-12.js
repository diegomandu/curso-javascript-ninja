(function(){	
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/

	var person = {
		name:      	'Diego',
		lastname:  	'Mandu',
		age: 		29
	};

	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/

	console.log(Object.keys(person));

	/*
	Crie um array vazio chamado `books`.
	*/

	var book = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/

	book.push( { name: 'lordoftherings', pages: 10} );
	book.push( { name: 'digitalfortress', pages: 10 } );
	book.push( { name: 'huehue', pages: 10 } );

	console.log( '\nLista de livros:' );

	/*
	Mostre no console todos os livros.
	*/

	for( var i = 0; i < book.length; i++ ){

		for( var prop in book[i] ){
			
				console.log( book[i][prop] );
				
		}

	}


	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	
	console.log( book.pop() );

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	
	for( var i = 0; i < book.length; i++ ){
		for( var prop in book[i] ){
			console.log( book[i][prop] );	
		}
	}

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	// ?
	console.log( '\nLivros em formato string:' );



	var convert = {};

	for( var i = 0; i < book.length; i++ ){
		
		convert[i] = book[i];

	}

	var convert2 = JSON.stringify(convert);
	
	/*
	Mostre os livros nesse formato no console:
	*/
	console.log( convert2 );

	/*
	Converta os livros novamente para objeto.
	*/
	
	 var convert3 = JSON.parse( convert2 );

	 console.log( convert3 );

	console.log( '\nAgora os livros são objetos novamente:' );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	
	for( var prop in convert3 ){
		console.log(convert3[prop]);
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	
	var myName = [ 'D','I','E','G','O' ];

	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	
	console.log( myName.join( '' ) );

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log( myName.reverse().join( '' ) );

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log( myName.sort().join( '' ) );

	
})();
