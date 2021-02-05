/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => /* binding */ todoList
});

;// CONCATENATED MODULE: ./src/classes/todo.class.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todo = /*#__PURE__*/function () {
  _createClass(Todo, null, [{
    key: "fromJson",

    /**
     * Este obj me permite simular un obj de esta clase y asi poder recuperar todos los metodos de esta clase en el localstorage
     * 
     */
    value: function fromJson(_ref) {
      var id = _ref.id,
          tarea = _ref.tarea,
          completado = _ref.completado,
          creado = _ref.creado;
      var tempTodo = new Todo(tarea);
      tempTodo.id = id;
      tempTodo.completado = completado;
      tempTodo.creado = creado;
      return tempTodo;
    }
  }]);

  function Todo(tarea) {
    _classCallCheck(this, Todo);

    this.tarea = tarea;
    this.id = new Date().getTime(); // 12836871263

    this.completado = false; //va a decir si la tarea esta completada o no

    this.creado = new Date();
  }

  _createClass(Todo, [{
    key: "imprimirClase",
    value: function imprimirClase() {
      console.log("".concat(this.tarea, " - ").concat(this.id));
    }
  }]);

  return Todo;
}();
;// CONCATENATED MODULE: ./src/classes/todo-list.class.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function todo_list_class_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function todo_list_class_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function todo_list_class_createClass(Constructor, protoProps, staticProps) { if (protoProps) todo_list_class_defineProperties(Constructor.prototype, protoProps); if (staticProps) todo_list_class_defineProperties(Constructor, staticProps); return Constructor; }


var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    todo_list_class_classCallCheck(this, TodoList);

    // this.todos = [];
    this.cargarLocalStorage();
  } // Insertar nuevo todo


  todo_list_class_createClass(TodoList, [{
    key: "nuevoTodo",
    value: function nuevoTodo(todo) {
      this.todos.push(todo);
      this.guardarLocalStorage(); // lo grabamos en el localstorage
    }
  }, {
    key: "eliminarTodo",
    value: function eliminarTodo(id) {
      // id  este es un string
      // Barremos todos los todo con el filter si el todo es diferente al id que recibo como argumento, hara la impresion de que elimina el todo
      this.todos = this.todos.filter(function (todo) {
        return todo.id != id;
      }); // id este es tipo numero

      this.guardarLocalStorage();
    }
  }, {
    key: "marcarCompletado",
    value: function marcarCompletado(id) {
      var _iterator = _createForOfIteratorHelper(this.todos),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var todo = _step.value;

          // todo.id es un string y id es un numero por eso ponemos ==
          if (todo.id == id) {
            // 
            todo.completado = !todo.completado;
            this.guardarLocalStorage();
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "eliminarCompletados",
    value: function eliminarCompletados() {
      // Obteniendo los todo que no esten completados
      this.todos = this.todos.filter(function (todo) {
        return !todo.completado;
      });
      this.guardarLocalStorage();
    } // Mantener(guardar) el todo en el localstorage

  }, {
    key: "guardarLocalStorage",
    value: function guardarLocalStorage() {
      // creandome una llave llamada todo, JSON.stringify transformando el objeto 
      localStorage.setItem('todo', JSON.stringify(this.todos));
    } // Cargando todo almacenados previamente en el localstorage ()

  }, {
    key: "cargarLocalStorage",
    value: function cargarLocalStorage() {
      // Verificar si ese obj existe y si existe recupero todos los todo y sino inicializo un arreglo vacio 
      this.todos = localStorage.getItem('todo') ? // si en el localstorage ese obj existe
      JSON.parse(localStorage.getItem('todo')) // recupero todos los todo, obj que tienen que  ser un json y lo transforma el json.parse
      : []; //inicializo un arreglo vacio de todo
      // console.log(typeof this.todo);
      // LLamando el frontJson de todo.class  , el map permite barrer cada uno de los elementos que estan dentro de un arreglo y retornar un arreglo cada uno de los obj mutados           

      this.todos = this.todos.map(Todo.fromJson);
    }
  }]);

  return TodoList;
}();
;// CONCATENATED MODULE: ./src/js/componentes.js
function componentes_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = componentes_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function componentes_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return componentes_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return componentes_arrayLikeToArray(o, minLen); }

function componentes_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // Referencias en el HTML

var divTodoList = document.querySelector('.todo-list');
var txtInput = document.querySelector('.new-todo'); //REFERENCIA AL INPUT

var btnBorrar = document.querySelector('.clear-completed');
var ulFiltros = document.querySelector('.filters');
var anchorFiltros = document.querySelectorAll('.filtro');
var crearTodoHtml = function crearTodoHtml(todo) {
  // Si esta completado (todo.completado) ? 'completed' : '' sino no pongo nada
  var htmlTodo = "\n    <li class=\"".concat(todo.completado ? 'completed' : '', "\" data-id=\"").concat(todo.id, "\">  \n        <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ").concat(todo.completado ? 'checked' : '', ">\n            <label>").concat(todo.tarea, "</label>\n            <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>"); // Creando el elemento html

  var div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild); //que inserte solo el primer hijo

  return div.firstElementChild;
}; // Eventos

txtInput.addEventListener('keyup', function (event) {
  //Cuando suelta la tecla event me dice que tecla a tocado
  // console.log(event); //dentro del target el value me interesa y el keyCode
  // (event.keyCode === 13) significa que preciono enter y si (txtInput.value.length > 0) que no esta vacio
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    console.log(txtInput.value);
    var nuevoTodo = new Todo(txtInput.value); //lo que termino por escribir la persona

    todoList.nuevoTodo(nuevoTodo); //Insertar el nuevo todo en mi arreglo de todolist que esta en inde.js y he importado el todolist

    crearTodoHtml(nuevoTodo);
    txtInput.value = ''; // Limpia el input despues que preciona enter
  }
}); // Detectar en cual todo es marcado como completado

divTodoList.addEventListener('click', function (event) {
  // Identifico en que parte del elemento li hice clic
  var nombreElemento = event.target.localName; // input, label, button
  // Referencia al li completo

  var todoElemento = event.target.parentElement.parentElement; // Extrayendo el id del id del elemento li

  var todoId = todoElemento.getAttribute('data-id'); // Si el nombre del elemento incluye algo llamado input

  if (nombreElemento.includes('input')) {
    // click en el check 
    todoList.marcarCompletado(todoId); // Haciendo referencia a la clase que le pone el tachado al todo

    todoElemento.classList.toggle('completed');
  } else if (nombreElemento.includes('button')) {
    // hay que borrar el todo
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento); // Eliminando el elemento todo independiente en el html
  }
}); // Borrar todos los completados en el html

btnBorrar.addEventListener('click', function () {
  // elimina de mi arreglo de la clase
  todoList.eliminarCompletados(); // Borrar del html de abajo hacia arriba porque la posicion index de los demas elementos sigue siendo la misma

  for (var i = divTodoList.children.length - 1; i >= 0; i--) {
    // divTodoList.children.length-1 empiezo en la ultima posicion
    // elemento en la posicion i
    var elemento = divTodoList.children[i]; // Si el elemento tiene la clase completado

    if (elemento.classList.contains('completed')) {
      divTodoList.removeChild(elemento); // entonces elimino ese elemento del todolist
    }
  }
}); // Haciendo los filtros

ulFiltros.addEventListener('click', function (event) {
  // console.log(event.target.text);
  var filtro = event.target.text;

  if (!filtro) {
    return;
  } // si el filtro no existe(undefined) hacemos un return 
  // Recorremos los li y borramos la clase selected de todos


  anchorFiltros.forEach(function (elem) {
    return elem.classList.remove('selected');
  });
  event.target.classList.add('selected'); // Y ahora agrego la clase selected a los li
  // Recorriendo todos los todo que tenemos

  var _iterator = componentes_createForOfIteratorHelper(divTodoList.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elemento = _step.value;
      // console.log(elemento);
      // limpiando siempre los todo de la clase hidden
      elemento.classList.remove('hidden'); // Necesito saber si el elemento actual esta completado

      var completado = elemento.classList.contains('completed'); // Evaluo 

      switch (filtro) {
        case 'Pendientes':
          // Si son pendientes a todos los elementos completados le agrego la clase hidden
          if (completado) {
            elemento.classList.add('hidden');
          }

          break;

        case 'Completados':
          if (!completado) {
            // Si no esta completado entonces le agrego la clase hidden
            elemento.classList.add('hidden');
          }

          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
;// CONCATENATED MODULE: ./src/index.js

 //porque he creado el archivo inde.js en la carpeta classes


var todoList = new TodoList(); // Instancia del todolist
// Crear los todo existentes en el localStorage en el html

todoList.todos.forEach(crearTodoHtml);
console.log('todos', todoList.todos);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(606);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;