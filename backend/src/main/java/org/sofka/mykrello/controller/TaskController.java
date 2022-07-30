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

/**
 * Controlador con los endpoints de la tarea
 */
@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/v1/task")
public class TaskController {
    /**
     * Inyeccion de dependencia de MyResponseUtility
     */
    @Autowired
    private MyResponseUtility response;
    /**
     * Inyeccion de dependencia de TaskService
     */
    @Autowired
    private TaskService taskService;

    /**
     * Metodo para obtener todas las tareas por id del board
     * @param boardId id del board
     * @return Un objeto de tipo ResponseEntity con la nueva tarea y el codigo HttpStatus
     */
    @GetMapping(path = "/board/{board}")
    public ResponseEntity<MyResponseUtility> index(@PathVariable("board") Integer boardId) {
        response.data = taskService.findAllTasksByIdFromBoard(boardId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     * Metodo para obtener una tarea por Id
     * @param id de la tarea
     * @return Un objeto de tipo ResponseEntity con la nueva tarea y el codigo HttpStatus
     */
    @GetMapping(path = "/{id}")
    public ResponseEntity<MyResponseUtility> findById(@PathVariable("id") Integer id){
        response.data = taskService.findById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     * Metodo para crear una nueva tarea
     * @param task objeto de tipo Json
     * @return Un objeto de tipo ResponseEntity con la nueva tarea y el codigo HttpStatus
     */
    @PostMapping("/create")
    public ResponseEntity<MyResponseUtility> saveTask(@RequestBody TaskDomain task){
        response.data = taskService.create(task);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     * Actuliza una tarea que se envia como parametros
     * @param taskId id de la tarea
     * @param task objeto de tipo Json
     * @return Un objeto de tipo ResponseEntity con la tarea actualizada y el codigo HttpStatus
     */
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

    /**
     * Elimina una tarea por Id
     * @param id de la tarea
     * @return Un objeto de tipo ResponseEntity con la tarea eliminada y el codigo HttpStatus
     */
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

    /**
     * Cambia de columna una tarea
     * @param taskId id de la tarea
     * @param idColum id de la nueva columna
     * @return Un objeto de tipo ResponseEntity con la tarea actualizada y el codigo HttpStatus
     */
    @PutMapping("/move-task/{id}/{idColumn}")
    public ResponseEntity<MyResponseUtility> moveTask(@PathVariable("id") Integer taskId, @PathVariable("idColumn") Integer idColum)  {
        try {
            var taskUpdate = taskService.moveTask(taskId, idColum);
            if (taskUpdate == null) {
                response.responseMessage(false,HttpStatus.NOT_FOUND, "No se encontro la tarea");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
            response.responseMessage(true,HttpStatus.OK, "Se desplazo la tarea correctamente",idColum);
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
