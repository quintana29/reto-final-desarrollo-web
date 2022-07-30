package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.sofka.mykrello.model.service.BoardService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
/**
 * Controlador con los endpoints del board
 */
@RestController
@CrossOrigin(value = "*")
@RequestMapping("/api/v1")
public class BoardController {
    /**
     * Inyeccion de dependencia de MyResponseUtility
     */
    @Autowired
    private MyResponseUtility response;
    /**
     * Inyeccion de dependencia de BoardService
     */
    @Autowired
    private BoardService boardService;
    /**
     * Metodo para obtener todas los boards
     * @return Una lista de objetos de tipo ResponseEntity con el Board y el codigo HttpStatus
     */
    @GetMapping(path = "/boards")
    public ResponseEntity<MyResponseUtility> index() {
        response.data = boardService.getAll();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     * Obtiene un board por su id
     * @param id del board
     * @return Un objeto de tipo ResponseEntity con el Board y el codigo HttpStatus
     */
    @GetMapping(path = "/board/{id}")
    public ResponseEntity<MyResponseUtility> getBoardById(@PathVariable(value = "id") Integer id) {
        response.data = boardService.findById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    /**
     * Crear un nuevo objeto de tipo Board
     * @param board
     * @return Un objeto de tipo ResponseEntity con el Board y el codigo HttpStatus
     */
    @PostMapping(path = "/board")
    public ResponseEntity<MyResponseUtility> create(@RequestBody BoardDomain board) {
        response.data = boardService.create(board);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * Actualiza un board
     * @param id del board
     * @param board objeto de tipo Json
     * @return Un objeto de tipo ResponseEntity con el Board actulizado y el codigo HttpStatus
     */
    @PutMapping(path = "/board/{id}")
    public ResponseEntity<MyResponseUtility> put(@PathVariable(value = "id") Integer id,
            @RequestBody BoardDomain board) {
        response.data = boardService.update(id, board);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * Elimina un board por Id
     * @param id del board
     * @return Un objeto de tipo ResponseEntity con el Board eliminado y el codigo HttpStatus
     */
    @DeleteMapping(path = "/board/{id}")
    public ResponseEntity<MyResponseUtility> delete(@PathVariable(value = "id") Integer id) {
        response.data = boardService.delete(id);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
