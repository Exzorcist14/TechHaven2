package ru.techhaven.controller;

import ru.techhaven.service.UserService;
import ru.techhaven.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

@Controller
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    OrderService orderService;

    @GetMapping("/account")
    public String accountPage(Principal principal, Model model) {
        var user = userService.getUserByName(principal.getName());
        model.addAttribute("user", user);

        return "account";
    }
}

