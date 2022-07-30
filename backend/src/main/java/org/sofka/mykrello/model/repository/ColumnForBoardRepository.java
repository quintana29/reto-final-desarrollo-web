package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.ColumnForBoardDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 * Facilita la comunicación con la capa de presistencia de datos
 * y la base de datos
 */
@Repository
public interface ColumnForBoardRepository extends JpaRepository<ColumnForBoardDomain, Integer> { }
