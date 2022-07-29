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

@Data
@Entity
@JsonIgnoreProperties(value = {"taskDomain"
}, allowGetters = true, allowSetters = false,
        ignoreUnknown = true)
@Table(name = "krl_log")
public class LogDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id", nullable = false, updatable = false)
    private Integer id;

    @Column(name = "tsk_id_task", nullable = false)
    private Integer taskId;

    @Column(name = "clm_id_previous")
    private Integer idPrevious;

    @Column(name = "clm_id_current")
    private Integer idCurrent;

    /*@ManyToOne(fetch = FetchType.LAZY, targetEntity = ColumnDomain.class, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "clm_id_previous", nullable = false, updatable = false)
    @JsonBackReference(value = "logPrevious")
    private ColumnDomain previous;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ColumnDomain.class, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "clm_id_current", nullable = false, updatable = false)
    @JsonBackReference(value = "logCurrent")
    private ColumnDomain current;*/

    @Column(name = "log_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    @ManyToOne(targetEntity = TaskDomain.class)
    @JoinColumn(name = "tsk_id_task", insertable = false, updatable = false)
    private TaskDomain taskDomain;

    public LogDomain() {
    }

    public LogDomain(Integer taskId, Integer idPrevious, Integer idCurrent) {
        this.taskId = taskId;
        this.idPrevious = idPrevious;
        this.idCurrent = idCurrent;
    }
}
