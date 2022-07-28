package org.sofka.mykrello.model.service;

import java.util.List;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.repository.LogRepository;
import org.sofka.mykrello.model.service.interfaces.LogServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class LogService implements LogServiceInterface {

    @Autowired
    LogRepository logRepository;
    @Override
    @Transactional
    public List<LogDomain> findById(Integer id) {
        return logRepository.findAllByTaskId(id);
    }

    @Override
    @Transactional
    public LogDomain create(LogDomain log) {
        return logRepository.save(log);
    }

    @Override
    @Transactional
    public void deleteLogByTaskId(Integer taskId) {
        logRepository.deleteAllByTaskId(taskId);
    }

    @Override
    public void upDateLog(Integer id, LogDomain logDomain) {
        logDomain.setIdPrevious(logDomain.getIdCurrent());
        logDomain.setIdCurrent(id);

        logRepository.save(logDomain);
    }

}
