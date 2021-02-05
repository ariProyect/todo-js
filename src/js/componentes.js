import { Todo } from '../classes';
import { todoList } from '../index';

// Referencias en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');  //REFERENCIA AL INPUT
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) => {

    // Si esta completado (todo.completado) ? 'completed' : '' sino no pongo nada
    const htmlTodo = `
    <li class="${  (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">  
        <div class="view">
            <input class="toggle" type="checkbox" ${  (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    // Creando el elemento html
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    
    
    divTodoList.append( div.firstElementChild ); //que inserte solo el primer hijo

    return div.firstElementChild;

}


// Eventos
txtInput.addEventListener('keyup', ( event ) => {  //Cuando suelta la tecla event me dice que tecla a tocado
    // console.log(event); //dentro del target el value me interesa y el keyCode

    // (event.keyCode === 13) significa que preciono enter y si (txtInput.value.length > 0) que no esta vacio
    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {

        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value ); //lo que termino por escribir la persona
        todoList.nuevoTodo( nuevoTodo );  //Insertar el nuevo todo en mi arreglo de todolist que esta en inde.js y he importado el todolist

        crearTodoHtml( nuevoTodo );
        txtInput.value = '';  // Limpia el input despues que preciona enter
    }


});


// Detectar en cual todo es marcado como completado
divTodoList.addEventListener('click', (event) => {

    // Identifico en que parte del elemento li hice clic
    const nombreElemento = event.target.localName; // input, label, button

    // Referencia al li completo
    const todoElemento   = event.target.parentElement.parentElement;

    // Extrayendo el id del id del elemento li
    const todoId         = todoElemento.getAttribute('data-id');

    // Si el nombre del elemento incluye algo llamado input
    if (  nombreElemento.includes('input') ){ // click en el check 
        todoList.marcarCompletado( todoId );

        // Haciendo referencia a la clase que le pone el tachado al todo
        todoElemento.classList.toggle('completed');

    } else if( nombreElemento.includes('button') ) { // hay que borrar el todo

        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento ); // Eliminando el elemento todo independiente en el html

    }


});


// Borrar todos los completados en el html
btnBorrar.addEventListener('click', () => {

    // elimina de mi arreglo de la clase
    todoList.eliminarCompletados();

    // Borrar del html de abajo hacia arriba porque la posicion index de los demas elementos sigue siendo la misma
    for( let i = divTodoList.children.length-1; i >= 0; i-- ) { // divTodoList.children.length-1 empiezo en la ultima posicion

        // elemento en la posicion i
        const elemento = divTodoList.children[i];

        // Si el elemento tiene la clase completado
        if( elemento.classList.contains('completed') ){
            divTodoList.removeChild(elemento); // entonces elimino ese elemento del todolist
        }

    }

});


// Haciendo los filtros
ulFiltros.addEventListener('click', (event) => {

    // console.log(event.target.text);

    const filtro = event.target.text;
    if( !filtro ){ return; } // si el filtro no existe(undefined) hacemos un return 

    // Recorremos los li y borramos la clase selected de todos
    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected'); // Y ahora agrego la clase selected a los li

    // Recorriendo todos los todo que tenemos
    for( const elemento of divTodoList.children ) {

        // console.log(elemento);

        // limpiando siempre los todo de la clase hidden
        elemento.classList.remove('hidden');

        // Necesito saber si el elemento actual esta completado
        const completado = elemento.classList.contains('completed');

        // Evaluo 
        switch( filtro ) {

            case 'Pendientes':       // Si son pendientes a todos los elementos completados le agrego la clase hidden
                if( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':     
                if( !completado ) {    // Si no esta completado entonces le agrego la clase hidden
                    elemento.classList.add('hidden');
                }
            break;

        }


    }



});