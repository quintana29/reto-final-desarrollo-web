import { Config } from "../../config.mjs";
import { TaskModel } from "../task.model.mjs";
export class TaskService {
  constructor() {}

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
  async saveTask(e, idBoard) {
    try {
      let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            idColum: e.target.column.value,
            idBoard: idBoard,
            name: e.target.nombre.value,
            description: e.target.descripcion.value,
          }),
        },
        res = await fetch(`${Config.BackendURL}/task/create`, options),
        json = await res.json();
      //this.getTask(idBoard)
      location.reload();
    } catch (err) {
      console.log("entro al catch");
      location.reload();
    }
  }

  async eliminar(e) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e}?`
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
          res = await fetch(`${Config.BackendURL}/task/Delete/${e}`, options),
          json = await res.json();

        location.reload();
      } catch (err) {
        //alert(`Error ${err.status}: ${message}`);
      }
    }
  }

  async getTaskById(id) {
    const taskData = await fetch(
      `${Config.BackendURL}/task/${id}`
    ).then((response) => response.json());
   

   console.log(taskData.data)
      const task = new TaskModel(taskData.data.id,taskData.data.idColum,
        taskData.data.idBoard,
        taskData.data.name,
        taskData.data.description,
        taskData.data.createdAt
      );
  
    return task;
  }
  async upDateTaskColumn(idTask,idColumn){
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
            createdAt:task.TskCreatedAt,
          }),
        },
        res = await fetch(`${Config.BackendURL}/task/${task.TskId}`, options),
        json = await res.json();
      location.reload();
    } catch (err) {
      console.log("entro al catch");
      location.reload();
    }
  }
}
