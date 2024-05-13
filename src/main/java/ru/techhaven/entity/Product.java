package ru.techhaven.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Products")
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable=false, length=25)
    private String title;

    @Column(nullable=false, length=25)
    private String category;

    @Column(nullable=false)
    private int cost;

    public Product(String title, int cost, String category) {
        this.title = title;
        this.cost = cost;
        this.category = category;
    }

    public Product() {}
}
