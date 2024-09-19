package com.hackathon.moovt.response;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class LoginResponse {
    private String token;
    private long expiresIn;

    public LoginResponse setToken(String token) {
        this.token = token;
        return this;
    }

    public LoginResponse setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }

    // I getter possono rimanere invariati
    public String getToken() {
        return token;
    }

    public long getExpiresIn() {
        return expiresIn;
    }
}
