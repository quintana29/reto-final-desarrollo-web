import { TaskService } from "../model/services/task.service.mjs";
import { LogService } from "../model/services/log.service.mjs";
import { HistoryTaskView } from "../view/historyTask.view.mjs";
import { TaskModel } from "../model/task.model.mjs";
/**
 * Clase utilizada para orquestar la logica entre la vista y 
 * los servicios del historial de la tarea
 */
class HistoryTaskController {
    #view;
    #servicio;
    #idTask;
    #logService;
    /**
     * Constructor vacio que inicializa la vista y 
     * captura el id de la tarea
     */
    constructor() {
        this.#servicio = new TaskService();
        this.#captureID();
        this.#view = new HistoryTaskView();
        this.#logService = new LogService();
    }
    /**
     * Función asincrona para consultar los logs y 
     * tareas presentes en la nueva vista
     */
    async init() {
        console.log(this.#idTask)
        const task = await this.#servicio.getTaskById(this.#idTask)
        const logs = await this.#logService.getLog(this.#idTask);

        const name = task.TskName;
        this.#view.initTask(task);
        this.#view.initLog(logs, name);
    }
    /**
     * Función para capturar el id de la tarea pasado como
     *  parametro desde la vista de la tarea
     */
    #captureID() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.#idTask = urlParams.get("id");

    }
    /**
     * Función que redirecciona al servicio para actualizar una tarea
     * @param {*} idtask atributo de tipo Integer que contiene el identificador del objeto
     * @param {*} name  atributo de tipo String que contiene el nombre de la tarea
     * @param {*} descripcion atributo de tipo String que contiene la descripción de la tarea
     * @param {*} idboard atributo de tipo Integer que contiene el identificador del objeto tablero
     * @param {*} idColumn atributo de tipo Integer que contiene el identificador del objeto columna
     * @param {*} created  atributo de tipo date que contiene la fecha de creación de la tarea
     * @param {*} event atributo de tipo event que contiene un objeto
     */
    upDateTask(idtask, name, descripcion, idboard, idColumn, created, event) {
        if (event.target.matches(".update")) {
            const task = new TaskModel(idtask, idColumn, idboard, name, descripcion, created);
            this.#servicio.upDateTsk(task);
        }
    }
}
/**
 * Exporta un nuevo objeto de tipo history controller
 */
export const controllerHistory = new HistoryTaskController();
/**
 * Inizializa la funcion init del controlador
 */
controllerHistory.init();
