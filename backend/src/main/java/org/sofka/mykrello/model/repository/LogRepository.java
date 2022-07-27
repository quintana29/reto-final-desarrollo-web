package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.LogDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogRepository extends JpaRepository<LogDomain, Integer>{ }
