import { Config } from "../../config.mjs";
import { TaskModel } from "../task.model.mjs";
/**
 * Clase que maneja toda la logica de las tareas
 */
export class TaskService {
  constructor() { }
  /**
   * Metodo que obtiene todas las tareas por Id de tablero 
   * @param {*} idBoard atributo de tipo Integer que contiene el identificador del objeto 
   * @returns retorna un array con todas las tareas
   */
  async getTask(idBoard) {
    const taskData = await fetch(
      `${Config.BackendURL}/task/board/${idBoard}`
    ).then((response) => response.json());
    const tasks = new Array();
    taskData.data.forEach((data) => {
      const task = new TaskModel(
        data.id,
        data.idColum,
        data.idBoard,
        data.name,
        data.description,
        data.createdAt
      );
      tasks.push(task);
    });
    return tasks;
  }

  /**
   * Metodo que hace una peticion con un objeto de tipo tarea para guardar en la base de datos
   * @param {*} event objeto de tipo event que se utilza para contener una tarea
   * @param {*} idBoard atributo de tipo Integer que contiene el identificador del objeto 
   */
  async saveTask(event, idBoard) {
    try {
      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          idColum: event.target.column.value,
          idBoard: idBoard,
          name: event.target.nombre.value,
          description: event.target.descripcion.value,
        }),
      },
        res = await fetch(`${Config.BackendURL}/task/create`, options),
        json = await res.json();

      location.reload();
    } catch (err) {
      location.reload();
    }
  }
  /**
   * Metodo que hace una peticion con un id de tarea para eliminar en la base de datos
   * @param {*} id atributo de tipo Integer que contiene el identificador del objeto 
   */
  async eliminar(id) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${id}?`
    );
    if (isDelete) {
      //Delete - DELETE
      try {
        let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        },
          res = await fetch(`${Config.BackendURL}/task/Delete/${id}`, options),
          json = await res.json();

        location.reload();
      } catch (err) {
        alert(`Error ${err.status}`);
      }
    }
  }
  /**
   * Metodo que hace una peticion con un id para traer una tarea en la base de datos
   * @param {*} id atributo de tipo Integer que contiene el identificador del objeto 
   * @returns retorna un array con la tarea
   */
  async getTaskById(id) {
    const taskData = await fetch(
      `${Config.BackendURL}/task/${id}`
    ).then((response) => response.json());


    console.log(taskData.data)
    const task = new TaskModel(taskData.data.id, taskData.data.idColum,
      taskData.data.idBoard,
      taskData.data.name,
      taskData.data.description,
      taskData.data.createdAt
    );

    return task;
  }
  /**
   * Metodo que hace una peticion con un id de tarea y de columna para actualizar
   *  la columna actual en la base de datos
   * @param {*} idTask  atributo de tipo Integer que contiene el identificador del objeto tarea 
   * @param {*} idColumn  atributo de tipo Integer que contiene el identificador del objeto columna
   */
  async upDateTaskColumn(idTask, idColumn) {
    try {
      let options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      },
        res = await fetch(`${Config.BackendURL}/task/move-task/${idTask}/${idColumn}`, options),
        json = await res.json();

      location.reload();
    } catch (err) {

    }
  }
  /**
   *  Metodo que hace una peticion con un objeto de tipo tarea para actualizar en la base de datos
   * @param {*} task objeto de tipo tarea 
   */
  async upDateTsk(task) {
    try {
      let options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          idColum: task.ClmIdColumn,
          idBoard: task.BrdIdBoard,
          name: task.TskName,
          description: task.TskDescription,
          createdAt: task.TskCreatedAt,
        }),
      },
        res = await fetch(`${Config.BackendURL}/task/${task.TskId}`, options),
        json = await res.json();
      location.reload();
    } catch (err) {
      location.reload();
    }
  }
}
