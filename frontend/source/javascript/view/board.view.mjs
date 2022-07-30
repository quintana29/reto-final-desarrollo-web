import { Utilities } from "./components/utilities.js";
import { controller } from "../controller/board.controller.mjs";
import { Config } from "../config.mjs";
export class BoardView{
    #body;
    constructor(){
        this.#body=document.querySelector("body")
        this.structureCreateBoard();
        document.addEventListener("submit",(event) => {
            
            this.controlCreateBoard(event);
        })
        document.addEventListener("click",(event) => {
            controller.redirect(event);      
        })
    }
    
    structureCreateBoard(){

        let contenedor=document.querySelector(".container")
        contenedor.innerHTML=`
        <form class="row g-2">
            <div class="col-auto">
                <input type="text" class="form-control" name="nombre" id="inputBoard" placeholder="Ingrese el Nombre">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Crear tablero</button>
            </div>
        </form>`;
    }
    init(boards){
        let contenedorBoards=document.querySelector(".container-fluid")
        boards.forEach((board)=>{
            
            const card = Utilities.createCard();
            card.innerHTML=
            `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${board.Name}</h5>
                    <p class="card-text">Board Id: ${board.Id}</p>
                    <a href="${Config.FrontendURL}/columns.html?id=${board.Id}" class="btn btn-primary" id="B${board.Id}" >Ir al tablero</a> 
                    <button type="button" class="btn btn-danger" id=${board.Id}>Eliminar</button>
                </div>
             </div>`;
            contenedorBoards.append(card);
            
        });
    }
    controlCreateBoard(event){
        controller.controlCreateBoard(event);
    }

}