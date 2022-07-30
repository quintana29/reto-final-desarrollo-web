package org.sofka.mykrello.model.service;

import java.util.List;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.sofka.mykrello.model.domain.ColumnForBoardDomain;
import org.sofka.mykrello.model.repository.*;
import org.sofka.mykrello.model.service.interfaces.BoardServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BoardService implements BoardServiceInterface {
    /**
     * Inyeccionde dependencias del boardRepository
     */
    @Autowired
    private BoardRepository boardRepository;
    /**
     * Inyeccionde dependencias del columnRepository
     */
    @Autowired
    private ColumnRepository columnRepository;
    /**
     * Inyeccionde dependencias del ColumnForBoardRepository
     */
    @Autowired
    private ColumnForBoardRepository columnForBoardRepository;
    /**
     * Inyeccionde dependencias del TaskRepository
     */
    @Autowired
    private TaskRepository taskRepository;
    /**
     * Inyeccionde dependencias del LogRepository
     */
    @Autowired
    private LogRepository logRepository;

    /**
     * Metodo que obtiene todos los boards existentes
     * @return arreglos con todos los boards
     */
    @Override
    @Transactional(readOnly = true)
    public List<BoardDomain> getAll() {
        return boardRepository.findAll();
    }

    /**
     * Busca en la base de datos el tablero con el id pasado por parametro
     * @param id Identificador del tablero
     * @return un objeto de tipo BoardDomain
     */
    @Override
    @Transactional(readOnly = true)
    public BoardDomain findById(Integer id) {
        var board = boardRepository.findById(id);
        return board.isPresent() ? board.get() : null;
    }

    /**
     * Metodo para crear un nuevo board e instaciar sus 3 columnas
     * @param board Datos del tablero a crear
     * @return un nuevo board
     */
    @Override
    @Transactional
    public BoardDomain create(BoardDomain board) {
        var newBoard = boardRepository.save(board);
        var columns = columnRepository.findAll();
        if (!columns.isEmpty()) {
            columns.forEach(column -> {
                var columnForBoard = new ColumnForBoardDomain();
                columnForBoard.setColumn(column);
                columnForBoard.setBoard(newBoard);
                columnForBoardRepository.save(columnForBoard);
            });
        }
        return newBoard;
    }

    /**
     * Actualiza el board
     * @param id    Identificador del tablero a actualizar
     * @param board Datos del tablero a actualizar
     * @return
     */
    @Override
    @Transactional
    public BoardDomain update(Integer id, BoardDomain board) {
        board.setId(id);
        return boardRepository.save(board);
    }

    /**
     * Metodo que realiza la eliminación en cascada de todas las
     * relaciones que existen con la tabla Board
     * @param id Identificador del tablero a borrar
     * @return
     */
    @Override
    @Transactional
    public BoardDomain delete(Integer id) {
        var optionalBoard = boardRepository.findById(id);
        if (optionalBoard.isPresent()) {
            var board = optionalBoard.get();
            // Se borran las columnas del tablero
            var columnsForBoard = board.getColumnsForBoard();
            if (!columnsForBoard.isEmpty()) {
                columnsForBoard.forEach((column) -> {
                    columnForBoardRepository.delete(column);
                });
            }
            // Se borran las tareas
            var tasks = taskRepository.findAllByIdBoard(id);
            if (!tasks.isEmpty()) {
                tasks.forEach((task) -> {
                    // Se borran los logs
                    var logs = logRepository.findAllByTaskId(task.getId());
                    if(!logs.isEmpty()) {
                        logs.forEach((log) -> {
                            logRepository.delete(log);
                        });
                    }
                    taskRepository.delete(task);
                });
            }
            boardRepository.delete(optionalBoard.get());
            return optionalBoard.get();
        }
        return null;
    }
}
