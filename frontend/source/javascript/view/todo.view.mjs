import { Utilities } from "./components/utilities.js";
import {controllerTodo} from "../controller/taskController.mjs"
import { Config } from "../config.mjs";
export class TodoView{
    #body;
    #root;
    #columnOne;
    #columnTwo;
    #columnThree;
    #idboard;
    
    
    constructor(idboard){
        this.#idboard=idboard
        this.#body=document.querySelector("body")
        this.#root=document.querySelector(".root")
        this.structureColumns();
        document.addEventListener("submit",(event) => {
            this.controlTask(event);
        })

        document.addEventListener("click",(event) => {
            controllerTodo.redirect(event);      
        })
        
        
    }
    
    
    structureColumns(){
        this.#columnOne= Utilities.createCard();
        this.#columnOne.classList.add("column1");
        this.#columnOne.name="1";
        const h1col1=document.createElement("h2");
        h1col1.textContent="POR REALIZAR"
        this.#columnTwo = Utilities.createCard();
        this.#columnTwo.classList.add("column2");
        this.#columnTwo.name="2";
        const h1col2=document.createElement("h2");
        h1col2.textContent="EN PROGRESO"
        this.#columnThree = Utilities.createCard();
        this.#columnThree.classList.add("column3");
        this.#columnThree.name="3";
        const h1col3=document.createElement("h2");
        h1col3.textContent="TERMINADO"
        const header1=document.createElement("div");
        const header2=document.createElement("div");
        const header3=document.createElement("div");
        header1.innerHTML=`
        <form class="row g-2">
            <div class="col-auto">
                <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Ingrese el Nombre" required>
                <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="Ingrese la Descripcion" required>
                <input type="hidden" class="form-control" name="column" id="column" value="1">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Crear Tarea</button>
            </div>
        </form>`;
        header2.innerHTML=`
        <form class="row g-2">
            <div class="col-auto">
                <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Ingrese el Nombre" required>
                <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="Ingrese la Descripcion" required>
                <input type="hidden" class="form-control" name="column" id="column" value="2">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Crear Tarea</button>
            </div>
        </form>`;
        header3.innerHTML=`
        <form class="row g-2">
            <div class="col-auto">
                <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Ingrese el Nombre" required>
                <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="Ingrese la Descripcion" required>
                <input type="hidden" class="form-control" name="column" id="column" value="3">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Crear Tarea</button>
            </div>
        </form>`;

        this.#columnOne.append(h1col1,header1)
        this.#columnOne.addEventListener("dragover",e=>{
            e.preventDefault();
            console.log("dragover")
        })
        this.#columnOne.addEventListener("drop",e=>{
            const idTask=e.dataTransfer.getData("columnActual");
            console.log("drop",e.target.name)
            e.target.append(document.getElementById(idTask))
            controllerTodo.changeColumn(idTask,e.target.name)
        })
        this.#columnTwo.append(h1col2,header2)
        this.#columnTwo.addEventListener("dragover",e=>{
            e.preventDefault();
            console.log("dragover")
        })
        this.#columnTwo.addEventListener("drop",e=>{
            const idTask=e.dataTransfer.getData("columnActual");
            console.log("drop",e.target.name)
            e.target.append(document.getElementById(idTask))
            controllerTodo.changeColumn(idTask,e.target.name)
        })
        this.#columnThree.append(h1col3,header3)
        this.#columnThree.addEventListener("dragover",e=>{
            e.preventDefault();
            console.log("dragover")
        })
        this.#columnThree.addEventListener("drop",e=>{
            const idTask=e.dataTransfer.getData("columnActual");
            console.log("drop",e.target.name)
            e.target.append(document.getElementById(idTask))
            controllerTodo.changeColumn(idTask,e.target.name)
        })
        this.#root.append(this.#columnOne,this.#columnTwo,this.#columnThree)

    }
    
    initTodo(tasks){
        console.log(tasks)
        
        tasks.forEach((task)=>{
            const card = Utilities.createCard();
            card.draggable="true";
            if(task.ClmIdColumn===1){
                card.id=`${task.TskId}`;
                card.innerHTML=
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${task.TskName}</h5>
                    <p class="card-text">${task.TskDescription}</p>
                    <a href="${Config.FrontendURL}/taskDescription.html?id=${task.TskId}" class="btn btn-primary" >Ver tarea</a> 
                    <button type="button" class="delete" id="${task.TskId}">Eliminar</button>
                    <input type="hidden" class="form-control" name="taskId" id="taskId" value="${task.TskId}">
                </div>
             </div>`;
             card.addEventListener("dragstart",(e)=>{
                e.dataTransfer.setData("columnActual",e.target.id)
                console.log("dragstart")
            });
             this.#columnOne.append(card);
             this.#root.append(this.#columnOne)
             
            }else if(task.ClmIdColumn===2){
                card.id=`${task.TskId}`;
                card.innerHTML=
                `<div class="card" >
                
                    <div class="card-body">
                        <h5 class="card-title">${task.TskName}</h5>
                        <p class="card-text">${task.TskDescription}</p>
                        <a href="${Config.FrontendURL}/taskDescription.html?id=${task.TskId}" class="btn btn-primary" >Ver tarea</a> 
                        <button type="button" class="delete" id="${task.TskId}">Eliminar</button>
                    </div>
                 </div>`;
                 card.addEventListener("dragstart",(e)=>{
                    e.dataTransfer.setData("columnActual",e.target.id)
                    console.log("dragstart")
                });
                 this.#columnTwo.append(card);
                 this.#root.append(this.#columnTwo)
            }else{
                card.id=`${task.TskId}`;
                card.innerHTML=
                `<div class="card" >
                
                    <div class="card-body">
                        <h5 class="card-title">${task.TskName}</h5>
                        <p class="card-text">${task.TskDescription}</p>
                        <a href="${Config.FrontendURL}/taskDescription.html?id=${task.TskId}" class="btn btn-primary" >Ver tarea</a> 
                        <button type="button" class="delete" id="${task.TskId}">Eliminar</button>
                    </div>
                 </div>`;
                 card.addEventListener("dragstart",(e)=>{
                    e.dataTransfer.setData("columnActual",e.target.id)
                    console.log("dragstart")
                });
                 this.#columnThree.append(card);
                 this.#root.append(this.#columnThree)
            }
            
        });
    }

    controlTask(event){
        controllerTodo.controlCreate(event,this.#idboard);
    }

}
