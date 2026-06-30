package com.demo.notification.controller;

import com.demo.notification.entity.User;
import com.demo.notification.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(
            @RequestBody User user
    ) {

        return userService.register(user);
    }

    @PostMapping("/login")
    public Object login(
            @RequestBody Map<String, String> body
    ) {

        User user =
                userService.login(

                        body.get("userId"),

                        body.get("password")
                );

        if (user == null) {

            return "Invalid Credentials";
        }

        return user;
    }

    @GetMapping("/captcha")
    public Map<String, String> captcha() {

        String chars =
                "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

        Random random =
                new Random();

        StringBuilder captcha =
                new StringBuilder();

        for (int i = 0; i < 6; i++) {

            captcha.append(

                    chars.charAt(

                            random.nextInt(
                                    chars.length()
                            )
                    )
            );
        }

        Map<String, String> response =
                new HashMap<>();

        response.put(
                "captcha",
                captcha.toString()
        );

        return response;
    }
}