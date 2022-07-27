package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<BoardDomain, Integer> { }
