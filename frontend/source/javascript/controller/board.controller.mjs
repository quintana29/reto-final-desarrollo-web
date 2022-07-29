import {BoardView} from "../view/board.view.mjs"
import { BoardService } from "../model/services/board.service.mjs";
class BoardController{
    #view;
    #servicio;
    constructor(){
        this.#servicio=new BoardService(); 
        this.#view=new BoardView();
    }
    async init() {
        const boards =await this.#servicio.getBoards();
        this.#view.init(boards)
    }
    controlCreateBoard(event){
        this.#servicio.saveBoard(event);
    }

}
export const controller = new BoardController();
controller.init();