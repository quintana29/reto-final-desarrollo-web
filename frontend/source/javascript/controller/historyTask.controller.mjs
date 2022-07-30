import { TaskService } from "../model/services/task.service.mjs";
import { LogService } from "../model/services/log.service.mjs";
import { HistoryTaskView } from "../view/historyTask.view.mjs";
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
}
export const controller = new HistoryTaskController();
controller.init();
