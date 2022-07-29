export class ColumnModel{
    #clmName;
    #clmId;
    #clmCreatedAt;
    #clmUpdateAt;
    #clmTask;
    constructor(id,name,created,updated,tasks){
        this.#clmId=id;
        this.#clmName=name;
        this.#clmCreatedAt=created;
        this.#clmUpdateAt=updated;
        this.#clmTask=tasks;
    }
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