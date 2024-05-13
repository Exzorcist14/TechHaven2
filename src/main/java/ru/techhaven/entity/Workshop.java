package ru.techhaven.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Workshops")
@Getter
@Setter
public class Workshop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    private Product product;

    @Column(nullable=false)
    private int count;

    public void decreaseCount(int quantity) {
        this.count -= quantity;
    }

    public Workshop(Product product, int count) {
        this.product = product;
        this.count = count;
    }

    public Workshop() {}
}
