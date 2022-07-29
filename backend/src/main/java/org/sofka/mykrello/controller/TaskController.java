package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.service.TaskService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/v1/task")
public class TaskController {

    @Autowired
    private MyResponseUtility response;

    @Autowired
    private TaskService taskService;

    @GetMapping(path = "/board/{board}")
    public ResponseEntity<MyResponseUtility> index(@PathVariable("board") Integer boardId) {
        response.data = taskService.findAllTasksByIdFromBoard(boardId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity<MyResponseUtility> findById(@PathVariable("id") Integer id){
        response.data = taskService.findById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<MyResponseUtility> saveTask(@RequestBody TaskDomain task){
        response.data = taskService.create(task);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<MyResponseUtility> updateTask(@PathVariable("id") Integer taskId, @RequestBody TaskDomain task) {
        try {
            var taskUpdate = taskService.update(taskId, task);
            if (taskUpdate == null) {
                response.responseMessage(false,HttpStatus.NOT_FOUND, "No se encontro la tarea");
                return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
            }
            response.responseMessage(true,HttpStatus.OK, "Se actualizo la tarea",task);
            return new ResponseEntity<>(response,HttpStatus.OK);

        }catch (DataAccessException e){
            response.responseMessage(false, HttpStatus.BAD_REQUEST, e.getCause().getCause().getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            response.responseMessage(false, HttpStatus.BAD_REQUEST, e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

   @DeleteMapping("/Delete/{id}")
   public ResponseEntity<MyResponseUtility> deleteTask(@PathVariable("id") Integer id){
       try{
           var task = taskService.delete(id);
           if (task.isEmpty()) {
               response.responseMessage(false,HttpStatus.NOT_FOUND, "No se encontro la tarea");
               return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
           }
           response.responseMessage(true,HttpStatus.OK, "Se elimino la tarea correctamente",task);
           return new ResponseEntity<>(response,HttpStatus.OK);
       }catch (DataAccessException e){
           response.responseMessage(false, HttpStatus.BAD_REQUEST, e.getCause().getCause().getMessage());
           return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
       }catch (Exception e){
           response.responseMessage(false, HttpStatus.BAD_REQUEST, e.getMessage());
           return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

}
