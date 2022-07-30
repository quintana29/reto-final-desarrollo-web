package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
/**
 * Esta clase nos permite modelar la tabla que se encuentra en la base de datos mediante
 * Jpa Hibernate, la cual representa la entidad LogDomain.
 */
@Data
@Entity
@JsonIgnoreProperties(value = {"taskDomain"
}, allowGetters = true, allowSetters = false,
        ignoreUnknown = true)
@Table(name = "krl_log")
public class LogDomain implements Serializable {

    private static final long serialVersionUID = 1L;
    /**
     * Representa la llave primaria de la tabla krl_log
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id", nullable = false, updatable = false)
    private Integer id;
    /**
     * Propiedades de la tabla krl_log
     */
    @Column(name = "tsk_id_task", nullable = false)
    private Integer taskId;

    @Column(name = "clm_id_previous")
    private Integer idPrevious;

    @Column(name = "clm_id_current")
    private Integer idCurrent;


    @Column(name = "log_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();
    /**
     * Relación unidireccional con la entidad taskDomain
     */
    @ManyToOne(targetEntity = TaskDomain.class)
    @JoinColumn(name = "tsk_id_task", insertable = false, updatable = false)
    private TaskDomain taskDomain;

    /**
     * constructor por defecto
     */
    public LogDomain() {
    }

    /**
     * Constructor para inicializar un Log al cual se le pasa como parametros
     * @param taskId almacena el id de la tarea
     * @param idPrevious almacena el id de la columna anterior
     * @param idCurrent almacena el id de la columna actual
     */
    public LogDomain(Integer taskId, Integer idPrevious, Integer idCurrent) {
        this.taskId = taskId;
        this.idPrevious = idPrevious;
        this.idCurrent = idCurrent;
    }

}
