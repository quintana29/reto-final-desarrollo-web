package org.sofka.mykrello.model.service.interfaces;

import java.util.List;
import java.util.Optional;

import org.sofka.mykrello.model.domain.TaskDomain;

public interface TaskServiceInterface {
    public List<TaskDomain> findAllTasksByIdFromBoard(Integer idBoard);
    public Optional<TaskDomain> findById(Integer id);
    public TaskDomain create(TaskDomain task);
    public TaskDomain update(Integer id, TaskDomain task);
    public Optional<TaskDomain> delete(Integer id);

}
