package ru.techhaven.repository;

import ru.techhaven.entity.Product;
import ru.techhaven.entity.Workshop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkshopRepository extends JpaRepository<Workshop, Integer> {
    Workshop getWorkshopByProduct(Product product);
}
