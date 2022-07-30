package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

/**
 * Esta clase nos permite modelar la tabla que se encuentra en la base de datos mediante
 * Jpa Hibernate, la cual representa la entidad Board.
 */
@Data
@Entity
@Table(name = "krl_board")
public class BoardDomain implements Serializable {

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
     * Representa la llave primaria de la tabla krl_board
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "brd_id", nullable = false)
    private Integer id;
    /**
     * Propiedades de la tabla krl_board
     */
    @Column(name = "brd_name", nullable = false, length = 100)
    private String name;

    @Column(name = "brd_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    @Column(name = "brd_updated_at")
    private Instant updatedAt;
    /**
     * Relacion bidireccional con la tabla columnsForBoard
     */
    @OneToMany(fetch = FetchType.LAZY, targetEntity = ColumnForBoardDomain.class, cascade = CascadeType.ALL, mappedBy = "board")
    @JsonManagedReference(value = "columnsForBoard")
    private List<ColumnForBoardDomain> columnsForBoard = new ArrayList<>();

}
