import './styles.css';

import { Todo, TodoList } from './classes';  //porque he creado el archivo inde.js en la carpeta classes
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList(); // Instancia del todolist

// Crear los todo existentes en el localStorage en el html
todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );