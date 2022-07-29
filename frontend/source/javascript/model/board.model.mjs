export class BoardModel {
    #id;
    #name;
    #createdAt;
    #updatedAt;
    #columnsForBoard;
    constructor(id,name,createdAt,updatedAt,columnsForBoard){
        this.#id=id;
        this.#name=name;
        this.createdAt=createdAt;
        this.updateAt=updatedAt;
        this.#columnsForBoard=columnsForBoard;
    }
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