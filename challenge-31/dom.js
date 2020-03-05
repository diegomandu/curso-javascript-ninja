(function(win, doc){
	'use strict';
	
			function DOM(event){
				if( !(this instanceof DOM) )
					return new DOM(event);
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
					if(arguments.length === 0)
						return this.element[0];
					Array.prototype.forEach.call(this.element, function(item, index){
						 items.push(item);
					});
					return items;
			};

			DOM.prototype.forEach = function forEach(){
				Array.prototype.forEach.apply(this.element, arguments);
			};

			DOM.prototype.map = function map(){
				Array.prototype.map.apply(this.element, arguments);
			};

			DOM.prototype.filter = function filter(){
				Array.prototype.filter.apply(this.element, arguments);
			};

			DOM.prototype.reduce = function reduce(){
				Array.prototype.reduce.apply(this.element, arguments);
			};

			DOM.prototype.reduceRight = function reduceRight(){
				Array.prototype.reduce.apply(this.element, arguments);
			};

			DOM.prototype.every = function every(){
				Array.prototype.reduce.apply(this.element, arguments);
			};

			DOM.prototype.some = function some(){
				Array.prototype.reduce.apply(this.element, arguments);
			};

			DOM.stripTag = function  stripTag(tag){
          		var regex = new RegExp('(^<)(\\w+)(>$)','g');
          		return tag.replace(regex, '$2');
        	}

        	DOM.createAndAppend = function createAndAppend(createElement,append){
	          if(!DOM.isTag(createElement))
	           return append.appendChild(doc.createTextNode(createElement));
	          else
	          createElement = DOM.stripTag(createElement);
	          var tag = doc.createElement(createElement);
	          return append.appendChild(tag);
        	}

        	DOM.isTag = function isTag( tag ){
				var regex = new RegExp('^<\\w+>$','g');
           		return regex.test(tag);
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


	win.DOM = DOM;

})(window, document);

/* FUNCTION TO LOOP ALL NESTED OBJECTS AND ARRAYS

 var person = [
            {
              name : 'Diego',
              age:    29,
              testFunc: function testFunc(){
                {
                  time: 20
                }
                
              }
            },
            {
              name: 'Adriana',
              age:    50  ,
              skills:  {
                cake: 'cookies'
              }
            },
              {
                family: 'mandu',
                number: 10,
                func: function(){

                }
              }
          ];

var result = [];
          console.log(person);

          person.forEach(loopAll);
              
   

          function loopAll(item, index){

            Object.entries(item).forEach(function(item2, index2, arr){
            
              item2.forEach(function(item){
                  result.push(item);
                if(typeof item === 'object' && item !== null ){
                   loopAll(item);
                }
              });
            }); 
          
            };
          
result.forEach(function(item){
  console.log(item);
});
