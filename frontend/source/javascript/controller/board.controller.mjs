import { BoardView } from "../view/board.view.mjs";
import { BoardService } from "../model/services/board.service.mjs";
class BoardController {
  #view;
  #servicio;
  constructor() {
    this.#servicio = new BoardService();
    this.#view = new BoardView();
  }
  async init() {
    const boards = await this.#servicio.getBoards();
    this.#view.init(boards);
  }
  controlCreateBoard(event) {
    this.#servicio.saveBoard(event);
  }
  redirect(event) {
    if (event.target.matches(".edit")) {
      console.log("{{{Entro a edit");
    }
    if (event.target.matches(".btn-danger")) {
      this.#servicio.eliminar(event.target.id);
    }
    if (event.code === 'Enter'){
      console.log(event.target.id)
      console.log(event.target.value)
      this.#servicio.edit(event.target.id,event.target.value)
    } //this.#servicio.edit(event.target.id)
  }
}
export const controller = new BoardController();
controller.init();
