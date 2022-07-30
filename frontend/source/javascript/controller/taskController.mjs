import {TodoView} from "../view/todo.view.mjs"
import { TaskService } from "../model/services/task.service.mjs";
class TaskController{
    #viewTodo
    #servicioTodo
    #idBoard;
    constructor(){
        this.#servicioTodo=new TaskService(); 
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

    redirect(event){
        if (event.target.matches(".edit")){
            console.log("{{{"+event.target.dataset.initTodo)
        } 
      if (event.target.matches(".delete")) {
        console.log("rrrrr"+event.target.dataset)
      }
       
     //this.#servicioTodo.eliminar(event);
    }
        
}
export const controllerTodo = new TaskController();
controllerTodo.initTodo();