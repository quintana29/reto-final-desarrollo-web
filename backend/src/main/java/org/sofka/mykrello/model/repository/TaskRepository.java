package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.TaskDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<TaskDomain, Integer> { }
