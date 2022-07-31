import { Config } from "../../config.mjs";
import { BoardModel } from "../board.model.mjs";
/**
 * Clase que maneja toda la logica de los tableros
 */
export class BoardService {
  constructor() { }
  /**
   * Metodo que obtiene todos los tableros
   * @returns retorna un array con todos los tableros
   */
  async getBoards() {
    const BoardsData = await fetch(`${Config.BackendURL}/boards`).then(
      (response) => response.json()
    );
    const boards = new Array();
    BoardsData.data.forEach((data) => {
      const board = new BoardModel(
        data.id,
        data.name,
        data.createdAt,
        data.updatedAt,
        data.columnsForBoard
      );
      boards.push(board);
    });
    return boards;
  }
  /**
   * Metodo que hace una peticion con un objeto de tipo tablero para guardar en la base de datos
   * @param {*} event objeto de tipo board
   */
  async saveBoard(event) {
    try {
      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          name: event.target.nombre.value,
        }),
      },
        res = await fetch(`${Config.BackendURL}/board`, options),
        json = await res.json();
      console.log(json);
      location.reload();
    } catch (err) {
      location.reload();
    }
  }
  /**
   * Metodo que hace una peticion con un objeto de tipo tablero para actualizar en la base de datos
   * @param {*} idBoard atributo de tipo Integer que contiene el identificador del objeto tablero 
   * @param {*} name atributo de tipo String que contiene el nombre del tablero
   */
  async edit(idBoard, name) {
    try {
      let options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          name: name,
        }),
      },
        res = await fetch(`${Config.BackendURL}/board/${idBoard}`, options),
        json = await res.json();
      location.reload();
    } catch (err) {
      location.reload();
    }
  }
  /**
   *  Metodo que hace una peticion con un objeto de tipo tablero para eliminar en la base de datos
   * @param {*} event  objeto de tipo board
   */
  async eliminar(event) {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${event}?`);
    if (isDelete) {
      //Delete - DELETE
      try {
        let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        },
          res = await fetch(`${Config.BackendURL}/board/${event}`, options),
          json = await res.json();

        location.reload();
      } catch (err) {
        location.reload();
      }
    }
  }
}
