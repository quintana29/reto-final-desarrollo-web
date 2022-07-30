package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.service.LogService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/v1/log")
public class LogController {

    @Autowired
    private MyResponseUtility response;
    @Autowired
    private LogService logService;

    @GetMapping(path = "/{idTask}")
    public ResponseEntity<MyResponseUtility> index(@PathVariable("idTask") Integer idTask) {
        response.data = logService.findById(idTask);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
