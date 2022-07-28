package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogRepository extends JpaRepository<LogDomain, Integer>{

    List<LogDomain> findAllByTaskId(Integer task);
    void deleteAllByTaskId(Integer taskId);
}
