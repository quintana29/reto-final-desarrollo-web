import { Utilities } from "./components/utilities.js";
import { controller } from "../controller/board.controller.mjs";
export class TodoView{
    #body;
    #root;
    #columnOne;
    #columnTwo;
    #columnThree;
    
    
    constructor(){
        this.#body=document.querySelector("body")
        this.#root=document.querySelector(".root")
        this.structureColumns();
        document.addEventListener("submit",(event) => {
            //this.controlCreateBoard(event);
        })
    
    }
    
    
    structureColumns(){
        this.#columnOne= Utilities.createCard();
        columnOne.id=1;
        this.#columnTwo = Utilities.createCard();
        columnTwo.id=2;
        this.#columnThree = Utilities.createCard();
        columnThree.id=3;
        this.#root.append(this.#columnOne,this.#columnTwo,this.#columnThree)

    }
    
    initTodo(tasks){
        let contenedorBoards=document.querySelector(".container-fluid")
        const card = Utilities.createCard();
        tasks.forEach((task)=>{
            if(task.ClmIdColumn===1){
                card.innerHTML=
            `<div class="card-one" style="width: 18rem;">
            
                <div class="card-body">
                    <h5 class="card-title">${task.TskName}</h5>
                    <p class="card-text">${task.TskDescription}</p>
                    <a href="columns.html" class="btn btn-primary">Editar</a> 
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </div>
             </div>`;
             this.columnOne.append(card);
            }else if(task.ClmIdColumn===2){
                card.innerHTML=
                `<div class="card-two" style="width: 18rem;">
                
                    <div class="card-body">
                        <h5 class="card-title">${task.TskName}</h5>
                        <p class="card-text">${task.TskDescription}</p>
                        <a href="columns.html" class="btn btn-primary">Editar</a> 
                        <button type="button" class="btn btn-danger">Eliminar</button>
                    </div>
                 </div>`;
                 this.columnTwo.append(card);
            }else{
                card.innerHTML=
                `<div class="card-three" style="width: 18rem;">
                
                    <div class="card-body">
                        <h5 class="card-title">${task.TskName}</h5>
                        <p class="card-text">${task.TskDescription}</p>
                        <a href="columns.html" class="btn btn-primary">Editar</a> 
                        <button type="button" class="btn btn-danger">Eliminar</button>
                    </div>
                 </div>`;
                 this.columnThree.append(card);
            }
            
            
            contenedorBoards.append(card);
            
        });
    }
    controlCreateBoard(event){
        controller.controlCreateBoard(event);
    }

}