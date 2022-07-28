package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.TaskDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<TaskDomain, Integer> {
    //@Query(value = "SELECT task FROM TaskDomain task where task.idBoard  = :idBoard")
    //@Query(value = "select * from krello.krl_task where brd_id_board = :id",
    //nativeQuery = true)
    List<TaskDomain> findAllByIdBoard(Integer idBoard);

}
