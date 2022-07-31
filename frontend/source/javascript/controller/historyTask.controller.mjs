import { TaskService } from "../model/services/task.service.mjs";
import { LogService } from "../model/services/log.service.mjs";
import { HistoryTaskView } from "../view/historyTask.view.mjs";
import { TaskModel } from "../model/task.model.mjs";

class HistoryTaskController {
    #view;
    #servicio;
    #idTask;
    #logService;
    constructor() {
        this.#servicio = new TaskService();
        this.#captureID(); 
        this.#view = new HistoryTaskView();
        this.#logService = new LogService();
    }
    async init() {
        console.log(this.#idTask)
        const task =await this.#servicio.getTaskById(this.#idTask)
        const logs = await this.#logService.getLog(this.#idTask);

        const name = task.TskName;
        this.#view.initTask(task);
        this.#view.initLog(logs,name);
    }
    #captureID() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.#idTask = urlParams.get("id");

    }
    upDateTask(idtask,name,descripcion,idboard,idColumn,created,e){
        if (e.target.matches(".update")){
        const task = new TaskModel(idtask,idColumn,idboard,name,descripcion,created);
        this.#servicio.upDateTsk(task);}
    }
}
export const controllerHistory = new HistoryTaskController();
controllerHistory.init();
