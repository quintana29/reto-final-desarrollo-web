
import{TaskModel} from "../task.model.mjs"
export class ColumnService{
    constructor(){   
    }
    
    async getTask(idBoard){
        const taskData=await fetch(`${Config.BackendURL}/task/board/${idBoard}`).then(response => response.json());
        const tasks = new Array();
        taskData.data.forEach(data => {
            const task = new TaskModel(data.id,data.idColum,data.idBoard,data.name,data.description,data.deliveryDate,data.createdAt);
            tasks.push(task);
        });
        return tasks;
    }
}