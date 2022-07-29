export class LogModel{
    #logId;
    #tskIdTask;
    #clmIdPrevious;
    #clmIdCurrent;
    #logCreatedAt;
    constructor(id,idTask,idPrevious,idCurrent,created){
        this.#logId=id;
        this.#tskIdTask=idTask;
        this.#clmIdPrevious=idPrevious;
        this.#clmIdCurrent=idCurrent;
        this.#logCreatedAt=created;
    }

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