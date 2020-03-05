(function(win, doc) {
  'use strict';

    /*
  Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
  coluna na tabela, com um botão de remover.
  Ao clicar nesse botão, a linha da tabela deve ser removida.
  Faça um pull request no seu repositório, na branch `challenge-31`, e cole
  o link do pull request no `console.log` abaixo.
  Faça um pull request, também com a branch `challenge-31`, mas no repositório
  do curso, para colar o link do pull request do seu repo.
  */


  var app =  (function appController(){
    
        var newTr = doc.createElement('tr');
        return{
          init: function init() {

            this.initEvents();
          },

          initEvents: function initEvents(){
            var $registerButton   =  DOM('[data-js="register"]');
            $registerButton.on('click', this.handleRegisterButton);
            
          },

          handleRegisterButton: function handleRegisterButton(event){
            var $inputFields    = DOM('[data-js="car-register-form"] input');
            event.preventDefault();
            $inputFields.forEach(app.insertValuesAtTable);
            app.insertRemoveButton();
          },

          insertRemoveButton: function insertRemoveButton(){
            var $lastTr = DOM('[data-js="car-register-table"] > tr:last-child');
            var newTd = DOM.createAndAppend('<td>',$lastTr.get());
            var newButton = DOM.createAndAppend('<button>',newTd);
            var newButtonText = DOM.createAndAppend('Remove', newButton);
            app.insertRemoveButtonClick();
          },

          insertRemoveButtonClick: function insertRemoveButtonClick(){
            var $removeButtons = DOM('[data-js="car-register-table"] button');
            $removeButtons.on('click', this.handleRemoveButton);
          },

          handleRemoveButton: function handleRemoveButton(){
           this.parentElement.parentElement.remove();
          },

          insertValuesAtTable: function insertValuesAtTable(item,index, array){
            if(app.isTimeToCreateNewRow(index)){
                newTr = doc.createElement('tr');
              }
              app.createTdAndAppend(item,index, newTr);            
          },

          createTdAndAppend: function createTdAndAppend(item,index, newTr){
              var $table = DOM('[data-js="car-register-table"]');
              var newTd = DOM.createAndAppend('<td>',newTr);  
              var node = DOM.createAndAppend(item.value, newTd)
              return $table.get().appendChild(newTr);
          },

          isTimeToCreateNewRow:  function isTimeToCreateNewRow(index){
            return index === 0;
          }
        };
    })();

    app.init();

})(window, document);

