package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
/**
 * Esta clase nos permite modelar la tabla que se encuentra en la base de datos mediante
 * Jpa Hibernate, la cual representa la entidad Task.
 */
@Data
@Entity
@JsonIgnoreProperties(value = {"boardDomain",
        "columnDomain"
        }, allowGetters = true, allowSetters = false,
        ignoreUnknown = true)
@Table(name = "krl_task")
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;
    /**
     * Ayuda a inicializar la variable upDateAt con un valor de la fecha actual
     */
    @PreUpdate
    public void preUpdate() {
        if (this.updateAt == null)
            this.updateAt = Instant.now();
    }
    /**
     * Representa la llave primaria de la tabla krl_task
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;
    /**
     * Propiedades de la tabla krl_task
     */
    @Column(name = "clm_id_column",  nullable = false)
    private Integer idColum;

    @Column(name = "brd_id_board",  nullable = false)
    private Integer idBoard;

    @Column(name = "tsk_name", length = 100)
    private String name;

    @Column(name = "tsk_description", length = 2000)
    private String description;

    @Column(name = "tsk_delivery_date")
    private LocalDate deliveryDate;

    @Column(name = "tsk_created_at")
    private Instant createdAt =  Instant.now();
    @Column(name = "tsk_updated_at")
    private Instant updateAt;
    /**
     * Relacion unidireccional con la entidad columnDomain;
     */
    @ManyToOne(targetEntity = ColumnDomain.class)
    @JoinColumn(name = "clm_id_column", insertable = false, updatable = false)
    private ColumnDomain columnDomain;
    /**
     * Relacion unidireccional con la entidad boardDomain;
     */
    @JoinColumn(name = "brd_id_board", nullable = false, insertable = false, updatable = false)
    @ManyToOne(targetEntity = BoardDomain.class)
    private BoardDomain boardDomain;

    /**
     * constructor por defecto
     */
    public TaskDomain() {

    }
}
