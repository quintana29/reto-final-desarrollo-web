package org.sofka.mykrello.model.service;

import java.util.List;
import java.util.Optional;

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
    public TaskDomain create(TaskDomain task) {return taskRepository.save(task);}

    @Override
    @Transactional
    public TaskDomain update(Integer id, TaskDomain task) {

        return null;
    }

    @Override
    @Transactional
    public Optional<TaskDomain> delete(Integer id) {


        List<Integer> idTask = taskRepository.findIdTasks(id);

        for(Integer task : idTask){
            logService.deleteLogByTaskId(task);
        }
        for(Integer task : idTask){
           taskRepository.deleteById(task);
        }


        return null;
    }


}
