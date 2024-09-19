package com.hackathon.moovt.repo;

import com.hackathon.moovt.entity.Habit;
import com.hackathon.moovt.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HabitRepository extends JpaRepository<Habit, Integer> {
    List<Habit> findByUser(User user);
}
