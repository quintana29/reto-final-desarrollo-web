package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.ColumnForBoardDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColumnForBoardRepository extends JpaRepository<ColumnForBoardDomain, Integer> { }
