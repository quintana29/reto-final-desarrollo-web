/**
 * Clase utilizada para contener objetos de tipo columna
 */
export class ColumnModel{
    #clmName;
    #clmId;
    #clmCreatedAt;
    #clmUpdateAt;
    #clmTask;
    /**
     * Constructor con todos los atributos del objeto columna
     * @param {*} id atributo de tipo Integer que contiene el identificador del objeto
     * @param {*} name atrinuto de tipo String que contiene el nombre de la tablero
     * @param {*} created atributo de tipo date que contiene la fecha de creación del Columna
     * @param {*} updated atributo de tipo date que contiene la fecha de actualización del Columna
     * @param {*} tasks atributo de tipo Integer que contiene el identificador del objeto tarea
     */
    constructor(id,name,created,updated,tasks){
        this.#clmId=id;
        this.#clmName=name;
        this.#clmCreatedAt=created;
        this.#clmUpdateAt=updated;
        this.#clmTask=tasks;
    }
       /**
     * Funciones gettes que devuelven el valor de cada atributo perteneciente 
     * al objeto
     */
    get ClmId(){
        return this.#clmId;
    }
    get ClmName(){
        return this.#clmName;
    }
    get ClmCreatedAt(){
        return this.#clmCreatedAt;
    }
    get ClmUpdatedAt(){
        return this.#clmUpdateAt;
    }
    get Clmtask(){
        return this.#clmTask;
    }
    /**
     * Funciones set que permite registrar de forma individual
     *  el valor de cada atributo perteneciente al objeto
     */
    set ClmId(id){
        this.#clmId=id;
    }
    set ClmName(name){
        this.#clmName=name;
    }
    set ClmCreatedAt(created){
        this.#clmCreatedAt=created;
    }
    set ClmUpdatedAt(update){
        this.#clmUpdateAt=update;
    }
    set Clmtask(task){
        this.#clmTask=task;
    }
}