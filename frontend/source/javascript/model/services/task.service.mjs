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
        data.deliveryDate,
        data.createdAt
      );
      tasks.push(task);
    });
    return tasks;
  }
  async saveTask(e, idBoard) {
    console.log("llego a saveTask");
    console.log(idBoard);
    console.log(e.target.nombre.value);
    console.log(e.target.descripcion.value);
    console.log(e.target.column.value);
    //console.log(e.target.idColumn.value,idBoard,e.target.nombre.value,e.target.description.value)
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
      const task = new TaskModel(
        taskData.data.id,
        taskData.data.idColum,
        taskData.data.idBoard,
        taskData.data.name,
        taskData.data.description,
        taskData.data.deliveryDate,
        taskData.data.createdAt
      );
  
    return task;
  }
}
