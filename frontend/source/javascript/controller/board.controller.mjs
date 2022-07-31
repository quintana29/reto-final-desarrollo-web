import { BoardView } from "../view/board.view.mjs";
import { BoardService } from "../model/services/board.service.mjs";
/**
 * Clase utilizada para orquestar la logica entre la vista y los servicios del tablero
 */
class BoardController {
  #view;
  #servicio;
  /**
   * constructor que inicializa la vista  y el servicio del tablero
   */
  constructor() {
    this.#servicio = new BoardService();
    this.#view = new BoardView();
  }
  /**
   * Función que le envia todos los tableros en la vista
   */
  async init() {
    const boards = await this.#servicio.getBoards();
    this.#view.init(boards);
  }
  /**
   * Función que le envia un objeto de tipo tablero
   * al servicio para ser guardado en la base de datos
   * @param {*} event atributo de tipo event que contiene un objeto de tipo tablero
   */
  controlCreateBoard(event) {
    this.#servicio.saveBoard(event);
  }
  /**
   * Función que redirecciona dependiendo de las acciones que se ejecuten en la vista
   * @param {*} event contiene la respuesta a la accion ejecutada en la vista
   */
  redirect(event) {

    if (event.target.matches(".btn-danger")) {
      this.#servicio.eliminar(event.target.id);
    }
    if (event.code === 'Enter') {
      this.#servicio.edit(event.target.id, event.target.value)
    }
  }
}
/**
 * Exporta un nuevo objeto de tipo board controller
 */
export const controller = new BoardController();
/**
 * Inizializa la funcion init del controlador
 */
controller.init();
