package com.hackathon.moovt.controller;

import com.hackathon.moovt.entity.Habit;
import com.hackathon.moovt.entity.User;
import com.hackathon.moovt.service.HabitService;
import com.hackathon.moovt.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/habits")
public class HabitController {

    @Autowired
    private HabitService habitService;

    @Autowired
    private UserService userService;

    // Crea un nuovo habit per l'utente loggato
    @PostMapping
    public ResponseEntity<Habit> createHabit(@RequestBody Habit habit, Authentication authentication) {
        System.out.println("ciao come butta?");
        // Estrai l'oggetto User dall'oggetto Authentication
        User user = (User) authentication.getPrincipal(); // Cast esplicito a User
        habit.setUser(user); // Imposta l'utente sull'habit
        Habit newHabit = habitService.createHabit(habit);
        return ResponseEntity.ok(newHabit);
    }

    // Ottieni tutte le habit dell'utente loggato
    @GetMapping
    public List<Habit> getUserHabits(Authentication authentication) {
        User user = (User) authentication.getPrincipal(); // Ottiene l'utente loggato
        return habitService.getHabitsByUser(user);
    }

    // Ottieni una singola habit per ID
    @GetMapping("/{id}")
    public ResponseEntity<Habit> getHabitById(@PathVariable int id) {
        return habitService.getHabitById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Aggiorna una habit per ID
    @PutMapping("/{id}")
    public ResponseEntity<Habit> updateHabit(@PathVariable int id, @RequestBody Habit habitDetails) {
        Habit updatedHabit = habitService.updateHabit(id, habitDetails);
        return ResponseEntity.ok(updatedHabit);
    }

    // Cancella una habit per ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHabit(@PathVariable int id) {
        habitService.deleteHabit(id);
        return ResponseEntity.noContent().build();
    }
}
