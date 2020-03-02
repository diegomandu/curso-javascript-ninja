(function(win, doc){
	'use strict';

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

	/*
	  No HTML:
	  - Crie um formulário com um input de texto que receberá um CEP e um botão
	  de submit;
	  - Crie uma estrutura HTML para receber informações de endereço:
	  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
	  preenchidas com os dados da requisição feita no JS.
	  - Crie uma área que receberá mensagens com o status da requisição:
	  "Carregando, sucesso ou erro."
	  No JS:
	  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
	  deve ser limpo e enviado somente os números para a requisição abaixo;
	  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
	  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
	  no input criado no HTML;

	  http://apps.widenet.com.br/busca-cep/api-de-consulta

	  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
	  com os dados recebidos.
	  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
	  a mensagem: "Buscando informações para o CEP [CEP]..."
	  - Se não houver dados para o CEP entrado, mostrar a mensagem:
	  "Não encontramos o endereço para o CEP [CEP]."
	  - Se houver endereço para o CEP digitado, mostre a mensagem:
	  "Endereço referente ao CEP [CEP]:"
	  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
	  adicionar as informações em tela.
	  */
	var $searchCepField    		= new DOM('[data-js="CEP"]');
	var $submitButton   		= new DOM('[name="cep-form"] button');
	var $addressInfoFields 		= new DOM('[data-js="address-info"] input');
	var $streetField       		=  $addressInfoFields.get()[0];
	var $neighborhoodField    	=  $addressInfoFields.get()[1];
	var $stateField       		=  $addressInfoFields.get()[2];
	var $cityField       		=  $addressInfoFields.get()[3];
	var $cepField       		=  $addressInfoFields.get()[4];
	var $requisitionStatus  =  new DOM('[data-js="requisition-status"] p').get()[0];
	var cleanCep;
	console.log($requisitionStatus);


	$submitButton.on('click', function(e){
	 	e.preventDefault();
	 	cleanCep = getCepFieldClean();
	 	ajaxRequest();
	});

	function ajaxRequest(){
		var ajax = new XMLHttpRequest();
		var response = '';

	 	ajax.open('GET', 'https://viacep.com.br/ws/' + cleanCep + '/json/');
	 	ajax.send();
	 	updateRequisitionStatusMessage('search');
	 	listenToAjaxResponse(response, ajax);
	 }

	 function updateRequisitionStatusMessage(status){
	 	switch(status){
	 		case 'search':
	 			return $requisitionStatus.innerText = 'Buscando informações para o CEP '
	 			 + cleanCep + '...';
	 			 break;
	 		case 'notFound':
	 			return $requisitionStatus.innerText = 'Não encontramos o endereço para o CEP  '
	 			 + cleanCep + ':';
	 			 break;
	 		case 'found':
	 			return $requisitionStatus.innerText = 'Endereço referente ao CEP ' + cleanCep + ':';
	 			break;
	 	}
	 }

	function listenToAjaxResponse(response, ajax){
		ajax.addEventListener('readystatechange', function(){
	 		if( isRequestOk(ajax) )
	 			trySendAjaxRequest(response, ajax);
	 		else
	 			return updateRequisitionStatusMessage('notFound');
	 	}, false);
	}

	function trySendAjaxRequest(response, ajax){
		try{
			response = JSON.parse(ajax.responseText);
			setFieldValues(response);	
		}
		catch(e){
			console.log(e);
			
			response = ajax.responseText;
		}
		if(response.erro)
			updateRequisitionStatusMessage('notFound');
	}

	function getCepFieldClean(){
		return $searchCepField.get()[0].value.replace(/\D+/g , '' );
	}

	function setFieldValues(response){
		$streetField.value 			= 	response.logradouro;
	 	$neighborhoodField.value 	= 	response.bairro;
	 	$stateField.value 			= 	response.uf;
	 	$cityField.value 			= 	response.localidade;
	 	$cepField.value				=	response.cep;
	}

	function isRequestOk(ajax){
			updateRequisitionStatusMessage('found');
	 		return ajax.readyState === 4 && ajax.status === 200;

	}

})(window, document);
