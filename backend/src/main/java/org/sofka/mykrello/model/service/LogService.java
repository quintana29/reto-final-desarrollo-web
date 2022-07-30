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
    /**
     * Inyeccionde dependencias de LogRepository
     */
    @Autowired
    LogRepository logRepository;

    /**}
     * Busca todos los log por id de la tarea
     * @param id de la tarea
     * @return una lista con todos los logs por id de la tarea
     */
    @Override
    @Transactional
    public List<LogDomain> findById(Integer id) {
        return logRepository.findAllByTaskId(id);
    }

    /**
     * Crea un nuevo Log
     * @param log
     * @return
     */
    @Override
    @Transactional
    public LogDomain create(LogDomain log) {
        return logRepository.save(log);
    }

    /**
     * Elimina todos los Logs que pertenezcan al id de la tarea
     * @param taskId id de la tarea
     */
    @Override
    @Transactional
    public void deleteLogByTaskId(Integer taskId) {
        logRepository.deleteAllByTaskId(taskId);
    }

    /**
     * Actualiza un Log modificando el id de la columna actual y de la columna anterior
     * @param id
     * @param logDomain
     */
    @Override
    public void upDateLog(Integer id, LogDomain logDomain) {
        logDomain.setIdPrevious(logDomain.getIdCurrent());
        logDomain.setIdCurrent(id);
        logRepository.save(logDomain);
    }

    /**
     * Elimina los Logs que pertenezcan al id de la tarea
     * @param taskId id de la tarea
     */
    @Override
    @Transactional
    public void deleteAllByTaskId(Integer taskId) {
        logRepository.deleteByTask(taskId);
    }

}
