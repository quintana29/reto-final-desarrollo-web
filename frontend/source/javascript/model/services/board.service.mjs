import { Config } from "../../config.mjs";
import { BoardModel } from "../board.model.mjs";

export class BoardService {
  constructor() {}

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
  async saveBoard(e) {
    try {
      let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            name: e.target.nombre.value,
          }),
        },
        res = await fetch(`${Config.BackendURL}/board`, options),
        json = await res.json();
      console.log(json);
      location.reload();
    } catch (err) {}
  }
  async eliminar(e) {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${e}?`);
    if (isDelete) {
      //Delete - DELETE
      try {
        let options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
          },
          res = await fetch(`${Config.BackendURL}/board/${e}`, options),
          json = await res.json();

        location.reload();
      } catch (err) {
        
      }
    }
  }
}
