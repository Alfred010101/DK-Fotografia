package com.dk.fotografia.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController
{

    private final AuthService authService;

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest)
    {
        if (loginRequest.getUsername().trim().isEmpty() || loginRequest.getPassword().trim().isEmpty() ) 
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Faltan credenciales");
        }
        return authService.login(loginRequest);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) 
    {
        if (registerRequest.getUsername().trim().isEmpty() || registerRequest.getPassword().trim().isEmpty() ) 
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Faltan credenciales");
        }
        return authService.register(registerRequest);
    }

}