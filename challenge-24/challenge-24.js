(function(win, doc){
	'use strict';
	/*
	Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
	o código, conforme vimos na aula anterior. Quebrar as responsabilidades
	em funções, onde cada função faça somente uma única coisa, e faça bem feito.
	- Remova as duplicações de código;
	- agrupe os códigos que estão soltos em funções (declarações de variáveis,
	listeners de eventos, etc);
	- faça refactories para melhorar esse código, mas de forma que o mantenha com a
	mesma funcionalidade.
	*/

	var $visor = document.querySelector('[data-js="visor"]');
	var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
	var $buttonsOperations = getOperationsButtons();
	var $buttonCE = document.querySelector('[data-js="button-ce"]');
	var $buttonEqual = document.querySelector('[data-js="button-equal"]');
	
	function initialize(){
		Array.prototype.forEach.call($buttonsNumbers, setEventClick);
		Array.prototype.forEach.call($buttonsOperations, setEventClick);
		$buttonCE.addEventListener('click', handleClickCE, setEventClick);
		$buttonEqual.addEventListener('click', handleClickEqual, setEventClick);
	}

	function setEventClick(button) {
	  button.addEventListener('click', handleClickNumber, false);
	}

	function handleClickNumber() {
	  $visor.value += this.value;
	}

	function handleClickOperation() {
	  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
	  $visor.value += this.value;
	}

	function handleClickCE() {
	  $visor.value = 0;
	}

	function handleClickEqual() {
	  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
	  var regexSigns = getOperationButtonsSignString();
	  var allValues = $visor.value.match(regexSigns);
	  $visor.value = allValues.reduce(calculateValues);
	}

	function isLastItemAnOperation(string) {
	  var operations = getOperationButtonsSign();
	  var lastItem = string.split('').pop();
	  return operations.some(function(operator) {
	    return operator === lastItem;
	  });
	}

	function removeLastItemIfItIsAnOperator(number) {
		if(isLastItemAnOperation(number)) {
	    	return number.slice(0, -1);
	  	}
	  	return number;
	}

	function getOperationsButtons(){
		return document.querySelectorAll('[data-js="button-operation"]');
	}

	function getOperationButtonsSign(){
		return Array.prototype.map.call(getOperationsButtons(),function( item , index ){
		  	return  item.value;
		});
	}

	function getOperationButtonsSignString(){
		return RegExp( '\\d+['+ getOperationButtonsSign().join('') +']?', 'g' );
	}

	function calculateValues(accumulated, actual){
	    var firstValue = accumulated.slice(0, -1);
	    var operator = accumulated.split('').pop();
	    var lastValue = removeLastItemIfItIsAnOperator(actual);
	    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
	    return doOperation( firstValue, operator, lastValue, lastOperator );
	}

	function doOperation( firstValue, operator, lastValue, lastOperator ){
		var result;
		switch(operator) {
	      case '+':
	        result = ( Number(firstValue) + Number(lastValue) );
	        break;
	      case '-':
	        result = ( Number(firstValue) - Number(lastValue) );
	        break;
	      case 'x':
	        result = ( Number(firstValue) * Number(lastValue) );
	        break;
	      case '÷':
	        result = ( Number(firstValue) / Number(lastValue) );
	        break;
	    }
	    return result + lastOperator;
	}


	initialize();
})(window, document);
