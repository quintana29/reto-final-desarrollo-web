import { Config } from "../../config.mjs";
import { LogModel } from "../log.model.mjs";

export class LogService {

    constructor() {}

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