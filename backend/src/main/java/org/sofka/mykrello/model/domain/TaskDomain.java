package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@Entity
@JsonIgnoreProperties(value = {"boardDomain",
        "columnDomain"
        }, allowGetters = true, allowSetters = false,
        ignoreUnknown = true)
@Table(name = "krl_task")
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @PreUpdate
    public void preUpdate() {
        if (this.updateAt == null)
            this.updateAt = Instant.now();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;

    @Column(name = "clm_id_column",  nullable = false)
    private Integer idColum;

    @Column(name = "brd_id_board",  nullable = false)
    private Integer idBoard;

    @Column(name = "tsk_name", length = 100)
    private String name;

    @Column(name = "tsk_description", length = 2000)
    private String description;

    @Column(name = "tsk_delivery_date")
    private LocalDateTime deliveryDate;

    @Column(name = "tsk_created_at")
    private Instant createdAt =  Instant.now();
    @Column(name = "tsk_updated_at")
    private Instant updateAt;

    @ManyToOne(targetEntity = ColumnDomain.class)
    @JoinColumn(name = "clm_id_column", insertable = false, updatable = false)
    private ColumnDomain columnDomain;

    @JoinColumn(name = "brd_id_board", nullable = false, insertable = false, updatable = false)
    @ManyToOne(targetEntity = BoardDomain.class)
    private BoardDomain boardDomain;


}
