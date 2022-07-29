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

    @Autowired
    private LogService logService;
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private  BoardService boardService;




    @Override
    @Transactional
    public List<TaskDomain> findAllTasksByIdFromBoard(Integer idBorad){
        return taskRepository.findAllByIdBoard(idBorad);
    }
    @Override
    @Transactional
    public Optional<TaskDomain> findById(Integer id) {

        return taskRepository.findById(id);
    }

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

    @Override
    @Transactional
    public TaskDomain update(Integer id, TaskDomain task) {
        var oldTask = taskRepository.findById(id).orElse(null);

        if (oldTask != null){
            return taskRepository.save(task);
        }

        return null;
    }

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
