package ru.techhaven.service;

import ru.techhaven.entity.Order;
import ru.techhaven.entity.User;
import ru.techhaven.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepository;

    public User getUserByName(String userName) {
        return userRepository.getUserByName(userName);
    }

    public void addOrder(Order order, String name) {
        var user = getUserByName(name);
        user.getOrders().add(order);
        userRepository.save(user);
    }
}
