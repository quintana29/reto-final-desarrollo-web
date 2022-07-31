/**
 * Clase utilizada para contener objetos de tipo tarea
 */
export class TaskModel{
    #tskId;
    #clmIdColumn;
    #brdIdBoard;
    #tskName;
    #tskDescription;
    #tskDeliveryDate;
    #tskCreatedAt;
    #tskUpdatedAt;
    #tskLogs;
/**
 * Constructor con todos los atributos del objeto tarea
 * @param {*} id atributo de tipo Integer que contiene el identificador del objeto
 * @param {*} idColumn atributo de tipo Integer que contiene el identificador de la columna 
 * @param {*} idBoard atributo de tipo Integer que contiene el identificador del tablero
 * @param {*} name atributo de tipo String que contiene el nombre de la tarea
 * @param {*} description atributo de tipo String que contiene la descripción de la tarea
 * @param {*} created atributo de tipo date que contiene la fecha de creación de la tarea
 */
    constructor(id,idColumn,idBoard,name,description,created){
        this.#tskId=id;
        this.#clmIdColumn=idColumn;
        this.#brdIdBoard=idBoard;
        this.#tskName=name;
        this.#tskDescription=description;
        this.#tskCreatedAt=created;
        //this.#tskUpdatedAt=updated;
        this.#tskLogs=[];
    }
    /**
     * Funciones gettes que devuelven el valor de cada atributo perteneciente 
     * al objeto
     */
    get TskId(){
        return this.#tskId;
    }
    get ClmIdColumn(){
        return this.#clmIdColumn;
    }
    get BrdIdBoard(){
        return this.#brdIdBoard;
    }

    get TskName(){
        return this.#tskName;
    }
    get TskDescription(){
        return this.#tskDescription;
    }
    get TskDeliveryDate(){
        return this.#tskDeliveryDate;
    }
    get TskCreatedAt(){
        return this.#tskCreatedAt;
    }
    get TskUpdatedAt(){
        return this.#tskUpdatedAt;
    }
    get TaskLogs(){
        return this.#tskLogs;
    }

     /**
     * Funciones set que permite registrar de forma individual
     *  el valor de cada atributo perteneciente al objeto
     */
    set TskId(id){
         this.#tskId=id;
    }
    set ClmIdColumn(idColumn){
         this.#clmIdColumn=idColumn;
    }
    set BrdIdBoard(idBoard){
        this.#brdIdBoard=idBoard;
    }

    set TskName(name){
         this.#tskName=name;
    }
    set TskDescription(description){
        this.#tskDescription=description;
    }
    set TskDeliveryDate(deliverateDate){
        this.#tskDeliveryDate=deliverateDate;
    }
    set TskCreatedAt(created){
        this.#tskCreatedAt=created;
    }
    set TskUpdatedAt(update){
        this.#tskUpdatedAt=update;
    }
    set TaskLogs(logs){
        this.#tskLogs=logs;
    }


}