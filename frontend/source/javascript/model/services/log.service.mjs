import { Config } from "../../config.mjs";
import { LogModel } from "../log.model.mjs";
/**
 * Clase que maneja toda la logica de los Logs
 */
export class LogService {

  constructor() { }
  /**
   * Metodo que obtiene todos los Logs por Id de tablero 
   * @param {*} idtask atributo de tipo Integer que contiene el identificador del objeto 
   * @returns retorna un array con todos los Logs
   */
  async getLog(idtask) {
    const logData = await fetch(
      `${Config.BackendURL}/log/${idtask}`
    ).then((response) => response.json());
    const logs = new Array();
    logData.data.forEach((data) => {

      const log = new LogModel(

        data.id,
        data.taskId,
        data.idPrevious,
        data.idCurrent,
        data.createdAt

      );
      logs.push(log);
    });
    return logs;
  }

}