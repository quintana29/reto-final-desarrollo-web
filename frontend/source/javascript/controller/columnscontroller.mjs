import {TodoView} from "../view/todo.view.mjs"
import { ColumnService } from "../model/services/column.service.mjs";
class ColumnController{
    #viewTodo
    #servicioTodo
    #idBoard;
    constructor(){
        console.log("Entro al constructor de columncontroller")
        this.#servicioTodo=new ColumnService(); 
        this.#viewTodo=new TodoView();
        this.#captureID();
    }
    #captureID() {
        console.log("llega a capturar el id")
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.#idBoard = urlParams.get("id");

    }
    async initTodo() {
        console.log(this.#idBoard)
        const tasksByBoard =await this.#servicioTodo.getTask(this.#idBoard);
        this.#viewTodo.initTodo(tasksByBoard)
    }
    /* controlCreateBoard(event){
        this.#servicio.saveBoard(event);
    } */

}
export const controllerTodo = new ColumnController();
controllerTodo.initTodo();