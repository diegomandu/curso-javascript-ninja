(function(win, doc){
	'use strict';
	/*
	Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
	métodos semelhantes aos que existem no array, mas que sirvam para os
	elementos do DOM selecionados.
	Crie os seguintes métodos:
	- forEach, map, filter, reduce, reduceRight, every e some.
	Crie também métodos que verificam o tipo do objeto passado por parâmetro.
	Esses métodos não precisam depender de criar um novo elmento do DOM, podem
	ser métodos estáticos.
	Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
	no objeto, como nos exemplos abaixo:
	DOM.isArray([1, 2, 3]); // true
	DOM.isFunction(function() {}); // true
	DOM.isNumber('numero'); // false
	Crie os seguintes métodos para verificação de tipo:
	- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
	O método isNull deve retornar `true` se o valor for null ou undefined.
	*/

	function DOM(event){
		this.functionName;
		this.element = doc.querySelectorAll(event);
	}

	DOM.prototype.on = function on(event, callback){
			  Array.prototype.forEach.call(this.element,function(item, index){
				  item.addEventListener(event,item.functionName = callback);
			});
	};

	DOM.prototype.off = function off(event){
			Array.prototype.forEach.call(this.element, function(item, index){
				item.removeEventListener(event, item.functionName);
			});
	};

	DOM.prototype.get = function get(){
			var items = [];
			Array.prototype.forEach.call(this.element, function(item, index){
				 items.push(item);
			});
			return items;
	};

	DOM.prototype.forEach = function(){
		Array.prototype.forEach.apply(this.element, arguments);
	}

	DOM.prototype.map = function(){
		Array.prototype.map.apply(this.element, arguments);
	}

	DOM.prototype.filter = function(){
		Array.prototype.filter.apply(this.element, arguments);
	}

	DOM.prototype.reduce = function(){
		Array.prototype.reduce.apply(this.element, arguments);
	}

	DOM.prototype.reduceRight = function(){
		Array.prototype.reduce.apply(this.element, arguments);
	}

	DOM.prototype.every = function(){
		Array.prototype.reduce.apply(this.element, arguments);
	}

	DOM.prototype.some = function(){
		Array.prototype.reduce.apply(this.element, );
	}

	DOM.isArray = function isArray( type ){
		return Object.prototype.toString.call(type) === '[object Array]' ? true : false;
	}

	DOM.isObject = function isObject( type ){
		return Object.prototype.toString.call(type) === '[object Object]' ? true : false;
	}

	DOM.isFunction = function isFunction( type ){
		return Object.prototype.toString.call(type) === '[object Function]' ? true : false;
	}

	DOM.isString = function isString( type ){
		return Object.prototype.toString.call(type) === '[object String]' ? true : false;
	}

	DOM.isNumber = function isNumber( type ){
		return Object.prototype.toString.call(type) === '[object Number]' ? true : false;
	}

	DOM.isBoolean = function isBoolean( type ){
		return Object.prototype.toString.call(type) === '[object Boolean]' ? true : false;
	}

	DOM.isNull = function isNull( type ){
		if(Object.prototype.toString.call(type) ===  '[object Null]')
			return true;
		if(Object.prototype.toString.call(type) === '[object Undefined]')
			return true;
		return false;
	}	

	

	var $a = new DOM('[data-js="link"]');
	var $b = new DOM('[data-js="button"]');


	$a.on('click', function(e) {
	  e.preventDefault();
	  console.log('clicou');
	  $a.off('click');
	});

	function testando(e){
		e.preventDefault();
		console.log('click no botao');
		$b.off('click');
	}

	$b.on('click', testando);

	$a.forEach(function(el){
		console.log(el);
	})

	$a.map(function(el){
		console.log(el.innerText += 2);
	})

	$a.filter(function(){

	});

	$a.reduce(function(el, a, c, d){
		console.log(el.innerText + a + c + d);
	});


	

		 console.log('Elementos selecionados:', $a.get());
		 console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
})(window, document);
