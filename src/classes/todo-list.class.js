import { Todo } from './todo.class';

export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarLocalStorage();

    }

    // Insertar nuevo todo
    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage(); // lo grabamos en el localstorage
    }

    eliminarTodo( id ) { // id  este es un string

        // Barremos todos los todo con el filter si el todo es diferente al id que recibo como argumento, hara la impresion de que elimina el todo
        this.todos = this.todos.filter( todo => todo.id != id )  // id este es tipo numero
        this.guardarLocalStorage(); 
    }

    marcarCompletado( id ) { 

        for( const todo of this.todos ) {

            // todo.id es un string y id es un numero por eso ponemos ==
            if( todo.id == id ) {

                // 
                todo.completado = !todo.completado;
                this.guardarLocalStorage(); 
                break;
            }

        }


    }

    eliminarCompletados() {
        
        // Obteniendo los todo que no esten completados
        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();
    }

    // Mantener(guardar) el todo en el localstorage
    guardarLocalStorage(){

        // creandome una llave llamada todo, JSON.stringify transformando el objeto 
        localStorage.setItem('todo', JSON.stringify( this.todos ) );
        
    }

    // Cargando todo almacenados previamente en el localstorage ()
    cargarLocalStorage(){

        // Verificar si ese obj existe y si existe recupero todos los todo y sino inicializo un arreglo vacio 
        this.todos = ( localStorage.getItem('todo') ) // si en el localstorage ese obj existe
                        ? JSON.parse( localStorage.getItem('todo') ) // recupero todos los todo, obj que tienen que  ser un json y lo transforma el json.parse
                        : [];  //inicializo un arreglo vacio de todo

                        // console.log(typeof this.todo);
        
        // LLamando el frontJson de todo.class  , el map permite barrer cada uno de los elementos que estan dentro de un arreglo y retornar un arreglo cada uno de los obj mutados           
        this.todos = this.todos.map( Todo.fromJson );
    }

}