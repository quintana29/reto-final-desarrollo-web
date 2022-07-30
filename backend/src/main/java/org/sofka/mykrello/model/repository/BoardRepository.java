package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 * Facilita la comunicación con la capa de presistencia de datos
 * y la base de datos
 */
@Repository
public interface BoardRepository extends JpaRepository<BoardDomain, Integer> { }
