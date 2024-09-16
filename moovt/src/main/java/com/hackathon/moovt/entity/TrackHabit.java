package com.hackathon.moovt.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TrackHabit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "habit_id")
    private Habit habit;

    private boolean completed;

    @Temporal(TemporalType.TIMESTAMP)
    private Date passedDays;
}