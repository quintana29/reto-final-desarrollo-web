import {TodoView} from "../view/todo.view.mjs"
import { ColumnService } from "../model/services/column.service.mjs";
class ColumnController{
    #viewTodo
    #servicioTodo
    #idBoard;
    constructor(){
        this.#servicioTodo=new ColumnService(); 
        this.#captureID();
        this.#viewTodo=new TodoView(this.#idBoard);
        
    }
    #captureID() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.#idBoard = urlParams.get("id");

    }
    async initTodo() {
        
        const tasksByBoard =await this.#servicioTodo.getTask(this.#idBoard);
        this.#viewTodo.initTodo(tasksByBoard)
    }
    controlCreate(event,idBoard){
        this.#servicioTodo.saveTask(event,idBoard);
    }

}
export const controllerTodo = new ColumnController();
controllerTodo.initTodo();