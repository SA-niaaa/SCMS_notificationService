package com.demo.notification.service;

import com.demo.notification.entity.User;
import com.demo.notification.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(
            User user
    ) {

        if (
                userRepository.existsByUserId(
                        user.getUserId()
                )
        ) {

            throw new RuntimeException(
                    "User Id already exists"
            );

        }

        return userRepository.save(user);
    }

    public User login(
            String userId,
            String password
    ) {

        Optional<User> user =
                userRepository.findByUserId(
                        userId
                );

        if (
                user.isPresent()
                        &&
                        user.get()
                                .getPassword()
                                .equals(password)
        ) {

            return user.get();

        }

        return null;
    }
}