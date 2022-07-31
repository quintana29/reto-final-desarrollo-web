/**
 * Clase utilizada para contener objetos de tipo tablero
 */
export class BoardModel {
    #id;
    #name;
    #createdAt;
    #updatedAt;
    #columnsForBoard;
    /**
     * Constructor con todos los atributos del objeto tarea
     * @param {*} id atributo de tipo Integer que contiene el identificador del objeto
     * @param {*} name atributo de tipo String que contiene el nombre de la tablero
     * @param {*} createdAt atributo de tipo date que contiene la fecha de creación del tablero
     * @param {*} updatedAt atributo de tipo date que contiene la fecha de actualización del tablero
     * @param {*} columnsForBoard atributo de tipo Integer que contiene el identificador del objeto columnsForBoard
     */
    constructor(id,name,createdAt,updatedAt,columnsForBoard){
        this.#id=id;
        this.#name=name;
        this.createdAt=createdAt;
        this.updateAt=updatedAt;
        this.#columnsForBoard=columnsForBoard;
    }
     /**
     * Funciones gettes que devuelven el valor de cada atributo perteneciente 
     * al objeto
     */
    get Id(){
        return this.#id;
    }
    get Name(){
        return this.#name;
    }
    get CreatedAt(){
        return this.#createdAt;
    }
    get UpdatedAt(){
        return this.#updatedAt;
    }
    get ColumnsForBoard(){
        return this.#columnsForBoard;
    }
     /**
     * Funciones set que permite registrar de forma individual
     *  el valor de cada atributo perteneciente al objeto
     */
    set Id(id){
        this.#id=id;
    }
    set Name(name){
        this.#name=name;
    }
    set CreatedAt(created){
        this.#createdAt=created;
    }
    set UpdatedAt(update){
        this.#updatedAt=update;
    }
    set ColumnsForBoard(columns){
         this.#columnsForBoard=columns;
    }



}