package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.service.TaskService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
   @DeleteMapping("/Delete/{id}")
   public ResponseEntity<MyResponseUtility> deleteTask(@PathVariable("id") Integer id){
       try{
           var invoice = taskService.delete(id);
           if (invoice.isEmpty()) {
               response.responseMessage(false,HttpStatus.NOT_FOUND, "Invoice not exist in database");
               return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
           }
           response.responseMessage(true,HttpStatus.OK, "Invoice removed successfully",invoice);
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
