import { Utilities } from "./components/utilities.js";
import { controller } from "../controller/board.controller.mjs";
import { Config } from "../config.mjs";
/**
 * Clase utilizada para mostrar la información que viene del controlador
 */
export class BoardView {
    /**
     * Constructor que inicializa la estructura inicial de la vista y agrega eventos al document
     */
    constructor() {

        this.structureCreateBoard();
        document.addEventListener("submit", (event) => {

            controller.controlCreateBoard(event);
        })
        document.addEventListener("click", (event) => {
            controller.redirect(event);
        })
        document.addEventListener("keyup", (event) => {
            controller.redirect(event);
        })
    }
    /**
     * Función que crea la estructura inicial de la vista
     */
    structureCreateBoard() {

        let contenedor = document.querySelector(".container")
        contenedor.innerHTML = `
        <form class="row g-2">
            <div class="col-auto">
                <input type="text" class="form-control" name="nombre" id="inputBoard" placeholder="Ingrese el Nombre">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Crear tablero</button>
            </div>
        </form>`;
    }
    /**
     * Función que muestra todos los tableros que provienen del controlador
     * @param {*} boards arreglo que contiene los tableros
     */
    init(boards) {
        let contenedorBoards = document.querySelector(".container-fluid")
        boards.forEach((board) => {

            const card = Utilities.createCard();
            card.innerHTML =
                `<div class="card" style="width: 25rem;">
                <div class="card-body">
                    <input class="card-title" id="${board.Id}" value="${board.Name}"></input>
                    <p class="card-text">Board Id: ${board.Id}</p>
                    <a href="${Config.FrontendURL}/columns.html?id=${board.Id}" class="btn btn-primary" >Ir al tablero</a> 
                    <button type="button" class="btn btn-danger" id=${board.Id}>Eliminar</button>
                </div>
             </div>`;
            contenedorBoards.append(card);

        });
    }


}