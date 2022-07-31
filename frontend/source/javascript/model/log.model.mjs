
/**
 * Clase utilizada para contener objetos de tipo Log
 */
export class LogModel{
    #logId;
    #tskIdTask;
    #clmIdPrevious;
    #clmIdCurrent;
    #logCreatedAt;
    /**
     * Constructor con todos los atributos del objeto Log
     * @param {*} id atributo de tipo Integer que contiene el identificador del objeto
     * @param {*} idTask atributo de tipo Integer que contiene el identificador del objeto tarea
     * @param {*} idPrevious atributo de tipo Integer que contiene el identificador de la columna anterior
     * @param {*} idCurrent atributo de tipo Integer que contiene el identificador de la columna actual
     * @param {*} created atributo de tipo date que contiene la fecha de creación del Log
     */
    constructor(id,idTask,idPrevious,idCurrent,created){
        this.#logId=id;
        this.#tskIdTask=idTask;
        this.#clmIdPrevious=idPrevious;
        this.#clmIdCurrent=idCurrent;
        this.#logCreatedAt=created;
    }
    /**
     * Funciones gettes que devuelven el valor de cada atributo perteneciente 
     * al objeto
     */
    get LogId(){
        return this.#logId;
    }
    get TskIdTask(){
        return this.#tskIdTask;
    }
    get ClmIdPrevious(){
        return this.#clmIdPrevious;
    }
    get ClmIdCurrent(){
        return this.#clmIdCurrent;
    }
    get LogCreatedAT(){
        return this.#logCreatedAt;
    }
    /**
     * Funciones set que permite registrar de forma individual
     *  el valor de cada atributo perteneciente al objeto
     */
    set LogId(id){
         this.#logId=id;
    }
    set TskIdTask(idTask){
        this.#tskIdTask=idTask;
    }
    set ClmIdPrevious(idPrevious){
        this.#clmIdPrevious=idPrevious;
    }
    set ClmIdCurrent(idCurrent){
        this.#clmIdCurrent=idCurrent;
    }
    set LogCreatedAT(logCreated){
         this.#logCreatedAt=logCreated;
    }

}