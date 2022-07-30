package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
/**
 * Facilita la comunicación con la capa de presistencia de datos
 * y la base de datos
 */
@Repository
public interface LogRepository extends JpaRepository<LogDomain, Integer>{
    /**
     * Este metodo nos permite buscar todas las logs por el id de la tarea
     * @param task id de la tarea
     * @return la lista de logs que tienen el id de la tarea
     */
    List<LogDomain> findAllByTaskId(Integer task);

    /**
     * Elimina todos los logs por el id de la tarea
     * @param taskId id de la tarea
     */
    void deleteAllByTaskId(Integer taskId);

    /**
     * Query Jpql que elimina el log dependiendo el id de la tarea
     * @param taskId id de la tarea
     */
    @Query(value = "DELETE FROM LogDomain WHERE taskId= :taskId")
    @Modifying
    void deleteByTask(@Param("taskId") Integer taskId);
}
