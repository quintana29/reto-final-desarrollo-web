package org.sofka.mykrello.utilities;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MyResponseUtility {
    public Boolean error;
    public String message;
    public Object data;
    public Boolean ok;
    public int status;


    public MyResponseUtility() {
        error = false;
        message = "Success";
        data = null;
    }

    public MyResponseUtility(Boolean error, String message, Object data) {
        this.error = error;
        this.message = message;
        this.data = data;
    }

    public void restart() {
        error = false;
        message = "Success";
        data = null;
    }
    public void responseMessage(Boolean ok, HttpStatus status, String message, Object data) {
        this.ok = ok;
        this.status = status.value();
        this.message = message;
        this.data = data;
    }
    public void responseMessage(Boolean ok, HttpStatus status, String message) {
        this.ok = ok;
        this.status = status.value();
        this.message = message;
        this.data = List.of();
    }

}
