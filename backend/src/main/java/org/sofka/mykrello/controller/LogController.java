package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.service.LogService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
/**
 * Controlador con los endpoints del Log
 */
@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/v1/log")
public class LogController {
    /**
     * Inyeccion de dependencia de MyResponseUtility
     */
    @Autowired
    private MyResponseUtility response;
    /**
     * Inyeccion de dependencia de LogService
     */
    @Autowired
    private LogService logService;
    /**
     * Metodo para obtener todos los Logs por tareas
     * @return Una lista de objetos de tipo ResponseEntity con el Board y el codigo HttpStatus
     */
    @GetMapping(path = "/{idTask}")
    public ResponseEntity<MyResponseUtility> index(@PathVariable("idTask") Integer idTask) {
        response.data = logService.findById(idTask);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
