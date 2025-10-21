package com.dk.fotografia.userObj;

import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService 
{
    private final UserRepository userRepository;

    public void createUser(UserModel user)
    {
        UserModel userSaved = userRepository.save(user);
        System.out.println(userSaved);
    }

    public Optional<UserModel> findByEmail(String email)
    {
        return userRepository.findByEmail(email);
    }

}