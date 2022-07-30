package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.TaskDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Facilita la comunicación con la capa de presistencia de datos
 * y la base de datos
 */
@Repository
public interface TaskRepository extends JpaRepository<TaskDomain, Integer> {
    /**
     * Encuentra todas las tareas por id del tablero
     * @param idBoard id del board
     * @return devuelve una lista con todas las tareas dependiendo el id del board
     */
    List<TaskDomain> findAllByIdBoard(Integer idBoard);

    /*@Query(value = "Select tsk_id from krl_task where brd_id_board = ?1", nativeQuery = true)
    List<Integer> findIdTasks(Integer id);*/

}
