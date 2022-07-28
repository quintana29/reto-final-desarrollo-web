package org.sofka.mykrello.model.service;

import java.util.List;
import java.util.Optional;

import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.repository.BoardRepository;
import org.sofka.mykrello.model.repository.TaskRepository;
import org.sofka.mykrello.model.service.interfaces.TaskServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService implements TaskServiceInterface {

    @Autowired
    private LogService logService;
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private BoardRepository boardRepository;

    @Override
    public List<TaskDomain> findAllTasksByIdFromBoard(Integer idBorad){
        return taskRepository.findAllByIdBoard(idBorad);
    }

    @Override
    public Optional<TaskDomain> findById(Integer id) {

        return taskRepository.findById(id);
    }

    @Override
    public TaskDomain create(TaskDomain task) {

        return taskRepository.save(task);
    }

    @Override
    public TaskDomain update(Integer id, TaskDomain task) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Optional<TaskDomain> delete(Integer id) {
        var getTask = taskRepository.findById(id);
        if (getTask.isEmpty()) {
            return Optional.empty();
        }
        taskRepository.deleteById(id);
        return getTask;

    }
}
