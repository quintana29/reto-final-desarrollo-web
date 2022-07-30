package org.sofka.mykrello.model.service;

import java.util.List;
import java.util.Optional;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.repository.BoardRepository;
import org.sofka.mykrello.model.repository.TaskRepository;
import org.sofka.mykrello.model.service.interfaces.TaskServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class TaskService implements TaskServiceInterface {
    /**
     * Inyeccion de dependencias del LogRepository
     */
    @Autowired
    private LogService logService;
    /**
     * Inyeccion de depencias de TaskRepository
     */
    @Autowired
    private TaskRepository taskRepository;
    /**
     * Inyeccion de depencias de BoardService
     */
    @Autowired
    private  BoardService boardService;
    /**
     * Busca todas las tareas segun el board Id
     * @param idBorad id del board
     * @return una lista con todas las tareas
     */
    @Override
    @Transactional
    public List<TaskDomain> findAllTasksByIdFromBoard(Integer idBorad){
        return taskRepository.findAllByIdBoard(idBorad);
    }

    /**
     * Busca una tarea por ID
     * @param id de la tarea
     * @return
     */
    @Override
    @Transactional
    public Optional<TaskDomain> findById(Integer id) {

        return taskRepository.findById(id);
    }

    /**
     * Crea una nueva tarea
     * @param task objeto de tipo tarea
     * @return un objeto de tipo tarea
     */
    @Override
    @Transactional
    public TaskDomain create(TaskDomain task) {
        var boardExists = boardService.findById(task.getIdBoard());                            //Valida si el board existe en la base de datos
        if (boardExists != null) {
            taskRepository.save(task);

            var log = new LogDomain(task.getId(), task.getIdColum(), task.getIdColum());
            logService.create(log);

        }
        return task;
    }

    /**
     * Actualizar una tarea
     * @param id de la tarea
     * @param task objeto con la información nueva
     * @return la tarea actualizada
     */
    @Override
    @Transactional
    public TaskDomain update(Integer id, TaskDomain task) {
        var oldTask = taskRepository.findById(id).orElse(null);

        if (oldTask != null){
            task.setId(id);
            return taskRepository.save(task);
        }

        return null;
    }

    /**
     * Elimina en cascada la tarea y todos los logs de la tarea
     * @param id de la tarea
     * @return la tarea eliminada
     */
    @Override
    @Transactional
    public Optional<TaskDomain> delete(Integer id) {

        var task = taskRepository.findById(id);
        if (task != null){
            logService.deleteAllByTaskId(id);
            taskRepository.deleteById(id);
            return task;
        }
        return null;

    }

    /**
     * Mueve la tarea a una nueva Columna
     * @param taskId id de la tarea
     * @param columnId id de la columna a la cual se va a mover
     * @return una tarea actualizada
     */
    public TaskDomain moveTask(Integer taskId, Integer columnId) {

        var task = taskRepository.findById(taskId).orElse(null);

        if (task != null) {
            var oldColumn = task.getIdColum();
            task.setIdColum(columnId);

            var log = new LogDomain(task.getId(),oldColumn,columnId);
            logService.create(log);

            var taskUpdate = taskRepository.save(task);


            return taskUpdate;
        }

        return null;
    }



}
