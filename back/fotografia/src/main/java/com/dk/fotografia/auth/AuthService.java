package com.dk.fotografia.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dk.fotografia.userObj.UserModel;
import com.dk.fotografia.jwt.JwtService;
import com.dk.fotografia.roleObj.RoleModel;
import com.dk.fotografia.userObj.UserRepository;
import com.dk.fotografia.userObj.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService 
{

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    public ResponseEntity<?> login(LoginRequest request) 
    {
        try 
        {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
            );
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        }

        UserDetails user = userRepository.findByUsername(request.getUsername()).orElseThrow();

        return ResponseEntity.ok(AuthResponse.builder()
            .token(jwtService.getToken(user))
            .build()
        );
    }

    public ResponseEntity<?> register(RegisterRequest request) 
    {
        if (userRepository.existsByUsername(request.getUsername())) 
        {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El usuario ya existe");
        }

        UserModel user = UserModel.builder()
            .username(request.getUsername())
            .password(passwordEncoder.encode(request.getPassword()))
            .firstName(request.getFirstName())
            .lastName(request.getLastName())
            .role(RoleModel.CUSTOMER)
            .build();

        userService.save(user);

        return ResponseEntity.ok(AuthResponse.builder()
            .token(jwtService.getToken(user))
            .build()
        );
    }
}