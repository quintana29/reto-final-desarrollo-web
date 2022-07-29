package org.sofka.mykrello.model.service.interfaces;

import java.util.List;

import org.sofka.mykrello.model.domain.LogDomain;

public interface LogServiceInterface {
    public List<LogDomain> findById(Integer id);
    public LogDomain create(LogDomain log);
    public void deleteLogByTaskId(Integer taskId);
    public void upDateLog(Integer id, LogDomain logDomain);
    public void deleteAllByTaskId(Integer taskId);
}
