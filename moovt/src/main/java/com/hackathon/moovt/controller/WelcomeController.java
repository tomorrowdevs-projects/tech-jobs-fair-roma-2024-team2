package com.hackathon.moovt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    @GetMapping("/welcome")
    public String welcomePage() {
        return "Benvenuto! Sei autenticato con successo!";
    }
}
