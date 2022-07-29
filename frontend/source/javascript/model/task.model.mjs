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

    constructor(id,idColumn,idBoard,name,description,deliverateDate,created){
        this.#tskId=id;
        this.#clmIdColumn=idColumn;
        this.#brdIdBoard=idBoard;
        this.#tskName=name;
        this.#tskDescription=description;
        this.#tskDeliveryDate=deliverateDate;
        this.#tskCreatedAt=created;
        //this.#tskUpdatedAt=updated;
        this.#tskLogs=[];
    }
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