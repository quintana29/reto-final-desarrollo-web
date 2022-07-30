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
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
/**
 * Esta clase nos permite modelar la tabla que se encuentra en la base de datos mediante
 * Jpa Hibernate, la cual representa la entidad ColumnaForBoard.
 */
@Data
@Entity
@Table(name = "krl_column_for_board")
public class ColumnForBoardDomain implements Serializable {

    private static final long serialVersionUID = 1L;
    /**
     * Ayuda a inicializar la variable upDateAt con un valor de la fecha actual
     */
    @PreUpdate
    public void preUpdate() {
        if (this.updatedAt == null)
            this.updatedAt = Instant.now();
    }
    /**
     * Representa la llave primaria de la tabla krl_column_for_board
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cfb_id", nullable = false)
    private Integer id;
    /**
     * Relacion bidireccional con la tabla krl_board
     */
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = BoardDomain.class, optional = false, cascade = CascadeType.DETACH)
    @JoinColumn(name = "brd_id_board", nullable = false)
    @JsonBackReference(value = "columnsForBoard")
    private BoardDomain board;
    /**
     * Relacion bidireccional con la tabla krl_column
     */
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ColumnDomain.class, optional = false, cascade = CascadeType.DETACH)
    @JoinColumn(name = "clm_id_column", nullable = false)
    @JsonBackReference(value = "columnForBoards")
    private ColumnDomain column;
    /**
     * Propiedades de la tabla krl_column_for_board
     */
    @Column(name = "cfb_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    @Column(name = "cfb_updated_at")
    private Instant updatedAt;

}
