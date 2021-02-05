export class Todo {

    /**
     * Este obj me permite simular un obj de esta clase y asi poder recuperar todos los metodos de esta clase en el localstorage
     * 
     */
    static fromJson({ id, tarea, completado, creado }) {

        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); // 12836871263
        this.completado = false;   //va a decir si la tarea esta completada o no
        this.creado     = new Date();

    }

    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }

}