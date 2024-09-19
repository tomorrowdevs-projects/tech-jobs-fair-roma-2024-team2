package com.hackathon.moovt.service;

import com.hackathon.moovt.entity.Habit;
import com.hackathon.moovt.entity.User;
import com.hackathon.moovt.repo.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HabitService {
    @Autowired
    private HabitRepository habitRepository;

    public List<Habit> getHabitsByUser(User user) {
        return habitRepository.findByUser(user);
    }

    public Optional<Habit> getHabitById(int id) {
        return habitRepository.findById(id);
    }

    public Habit createHabit(Habit habit) {
        return habitRepository.save(habit);
    }

    public Habit updateHabit(int id, Habit habitDetails) {
        return habitRepository.findById(id).map(habit -> {
            habit.setTitle(habitDetails.getTitle());
            habit.setCategory(habitDetails.getCategory());
            habit.setDescription(habitDetails.getDescription());
            return habitRepository.save(habit);
        }).orElseThrow(() -> new RuntimeException("Habit not found"));
    }

    public void deleteHabit(int id) {
        habitRepository.deleteById(id);
    }
}
