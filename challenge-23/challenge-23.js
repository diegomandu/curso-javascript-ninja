(function( win, doc ){
	'use strict';
	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:
	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;
	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/

	var keyboardNumbers = doc.querySelectorAll('button');
	var input = doc.getElementsByTagName('input')[0];

	function calculate( signal, num1, num2 ){
		switch(signal){
			case '+':
			return +num1 + +num2;
			break;
			case '-':
			return +num1 - +num2;
			break;
			case '*':
			return +num1 * +num2;
			break
			case '/':
			return +num1 / +num2;
			break;
		}
		return +num2;
	}

	function stripRepeatedSignal( expression ){
		return expression.replace( /([\/+\-\*])([\/+\-\*])/, '$2');
	}

	function clearInput(){
		this.value = 0;
	}

	function getResults( numberString ){
	var finalResult = 0;
	var signal;

	numberString.replace( /(\d+)([+\/*-]?)/g, (function(selection, match1, match2, string){
		
		finalResult = calculate( signal, finalResult, match1 );
		signal = match2;
		finalResult;
	
	}));

	return finalResult;
	}


	Array.prototype.forEach.call(keyboardNumbers,function( item, index ){
		item.addEventListener( 'click', function(event){
			if(this.innerText === '=')

			return input.value = getResults( input.value );
			if(this.innerText === 'CE')
			return clearInput.call(input);

			if( input.value === '0' )
			return input.value = this.innerText;

			input.value += this.innerText;
			input.value = stripRepeatedSignal(input.value);
			
			
		} );
	});

})( window, document );
