(function(win, doc) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"
  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.
  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.
  Essas informações devem ser adicionadas no HTML via Ajax.
  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.
  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

var app =  (function appController(){
      var $inputFields    = new DOM('[data-js="car-register-form"] input');
      var newTr           = document.createElement('tr');
      var $table          = new DOM('[data-js="car-register-table"]');

      return{
        init: function init() {
          this.initEvents();
        },

        initEvents: function initEvents(){
          var $registerButton   = new DOM('[data-js="register"]');
          $registerButton.on('click', this.handleRegisterButton);
        },

        handleRegisterButton: function handleRegisterButton(event){
          event.preventDefault();
          console.log(app);
          $inputFields.forEach(app.insertValuesAtTable);
        },

        insertValuesAtTable: function insertValuesAtTable(item,index, array){
          if(app.isTimeToCreateNewRow(index))
            newTr = app.createNewTr(newTr);
          var newTd = app.createElement("td");  
          var node = app.createTextNode(item.value);
          newTd.appendChild(node);
          newTr.appendChild(newTd);
          $table.element[0].appendChild(newTr);
        },

        isTimeToCreateNewRow:  function isTimeToCreateNewRow(index){
          return index === 0;
        },

        createNewTr: function createNewTr(tr){
          tr = this.createElement('tr');
          return tr;
        },

        createElement: function createElement(element){
          return document.createElement(element);
        },

        createTextNode: function createTextNode(text){
          return doc.createTextNode(text);
        }
      };
  })();

  app.init();

})(window, document);
