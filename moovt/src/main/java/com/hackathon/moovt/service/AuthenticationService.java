package com.hackathon.moovt.service;



import com.hackathon.moovt.dto.LoginUserDto;
import com.hackathon.moovt.dto.RegisterUserDto;
import com.hackathon.moovt.entity.User;
import com.hackathon.moovt.repo.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
            UserRepository userRepository,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Registrazione con username e email
    public User signup(RegisterUserDto input) {
        User user = new User();
        user.setUsername(input.getUsername());  // Usa username per l'autenticazione
        user.setEmail(input.getEmail());        // Mantieni l'email per l'informazione
        user.setPassword(passwordEncoder.encode(input.getPassword()));

        return userRepository.save(user);
    }

    // Autenticazione solo tramite username
    public User authenticate(LoginUserDto input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getUsername(),  // Usa solo username per login
                        input.getPassword()
                )
        );

        return userRepository.findByUsername(input.getUsername())  // Cerca solo per username
                .orElseThrow();
    }
}