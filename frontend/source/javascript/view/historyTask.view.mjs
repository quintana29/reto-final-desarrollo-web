
import { Utilities } from "./components/utilities.js";
import { controllerHistory } from "../controller/historyTask.controller.mjs";

export class HistoryTaskView{
    #root;
    #columnOne;
    #idBoard;
    #idColumn;
    #created;

    constructor(){
        this.#root=document.querySelector(".root")
        document.addEventListener("click",evnt=>{
            let idTask=document.getElementById("taskId")
            let name=document.getElementById("nombre")
            let descripcion=document.getElementById("descripcion")
            controllerHistory.upDateTask(idTask.value,name.value,descripcion.value,this.#idBoard,this.#idColumn,this.#created,evnt)
        })

    }
  initTask(task){
      this.#columnOne = Utilities.createCard();
      this.#columnOne.classList.add("column");
      const card = Utilities.createCard();
        this.#idBoard=task.BrdIdBoard
        this.#idColumn=task.ClmIdColumn
        this.#created=task.TskCreatedAt
      card.innerHTML =
          `<div class="card">
        <div class="card-body">
        <input type="text" class="form-control" value = " ${task.TskName}" name="nombre" id="nombre" placeholder="Ingrese el Nombre" required>
        <input type="text" class="form-control" value = "${task.TskDescription}" name="descripcion" id="descripcion" placeholder="Ingrese la Descripcion" required>
            <button type="button" class="update" id="${task.TskId}">Actualizar</button>
            <input type="hidden" class="form-control" name="taskId" id="taskId" value="${task.TskId}">
        </div>
     </div>`;
      this.#columnOne.append(card);
      this.#root.append(this.#columnOne)
  }

  initLog(logs, name){
    console.log(logs)
    
    logs.forEach((log)=>{
        const card = Utilities.createCard();
      
            card.innerHTML=
        `<div class="card">
            <div class="card-body">
                <h5 class="card-title">Tarea</h5>
                <p class="card-text">${name}</p>
                <h5 class="card-title">Columna anterior</h5>
                <p class="card-text">${log.ClmIdPrevious}</p>
                <h5 class="card-title">Columna actual</h5>
                <p class="card-text">${log.ClmIdCurrent}</p>
                <h5 class="card-title">Se movio</h5>
                <p class="card-text">${log.LogCreatedAT}</p>
              
            </div>
         </div>`;
         this.#columnOne.append(card);
         this.#root.append(this.#columnOne)
        
            
    });
}
  
  
}