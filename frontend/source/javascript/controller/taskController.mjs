import { TodoView } from "../view/todo.view.mjs"
import { TaskService } from "../model/services/task.service.mjs";
/**
 * Clase utilizada para orquestar la logica entre la vista y 
 * los servicios de la tarea
 */
class TaskController {
    #viewTodo
    #servicioTodo
    #idBoard;
    /**
   * constructor que inicializa la  vista y el servicio de la tarea
   */
    constructor() {
        this.#servicioTodo = new TaskService();
        this.#captureID();
        this.#viewTodo = new TodoView(this.#idBoard);

    }
    /**
     * Función para capturar el id del tablero pasado como
     *  parametro desde la vista del tablero
     */
    #captureID() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.#idBoard = urlParams.get("id");

    }
    /**
     * Función asincrona para consultar las tareas por id de tablero y 
     * pasarlas a la vista
     */
    async initTodo() {

        const tasksByBoard = await this.#servicioTodo.getTask(this.#idBoard);
        this.#viewTodo.initTodo(tasksByBoard)
    }
    /**
     * Funcion que redirecciona al servicio la tarea y el id
     * @param {*} event atributo de tipo event
     * @param {*} idBoard atributo de tipo Integer que contiene el identificador del objeto
     */
    controlCreate(event, idBoard) {
        this.#servicioTodo.saveTask(event, idBoard);
    }
    /**
     * Funcion que redirecciona al servicio para cambiar la tarea de columna
     * @param {*} idtask atributo de tipo Integer que contiene el identificador del objeto tarea
     * @param {*} idcolumns atributo de tipo Integer que contiene el identificador del objeto columna
     */
    changeColumn(idtask, idcolumns) {
        this.#servicioTodo.upDateTaskColumn(idtask, idcolumns);
    }
    /**
    * Función que redirecciona dependiendo de las acciones que se ejecuten en la vista
    * @param {*} event contiene la respuesta a la accion ejecutada en la vista
    */
    redirect(event) {
        if (event.target.matches(".edit")) {
            this.#viewTodo.showEditableTextArea()
            console.log("{{{Entro a edit")
        }
        if (event.target.matches(".delete")) {
            this.#servicioTodo.eliminar(event.target.id);
        }
    }

}
/**
 * Exporta un nuevo objeto de tipo task controller
 */
export const controllerTodo = new TaskController();
/**
 * Inizializa la funcion init del controlador
 */
controllerTodo.initTodo();