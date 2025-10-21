package com.dk.fotografia.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.dk.fotografia.userObj.UserRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfing 
{

    private final UserRepository userRepository;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception
    {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() 
    {
        DaoAuthenticationProvider authenticationProvider = 
            new DaoAuthenticationProvider(userDetailService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        
        return authenticationProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() 
    {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailService() 
    {
        return username -> userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}