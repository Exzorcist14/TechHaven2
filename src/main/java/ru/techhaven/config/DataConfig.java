package ru.techhaven.config;

import ru.techhaven.entity.Product;
import ru.techhaven.entity.Workshop;
import ru.techhaven.repository.ProductRepository;
import ru.techhaven.repository.WorkshopRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;

@Configuration
public class DataConfig {
    @Bean
    public CommandLineRunner loadData(ProductRepository productRepository, WorkshopRepository workshopRepository) {
        return (args) -> {

            if (productRepository.findAll().isEmpty()) {
                var products = new ArrayList<Product>();

                products.add(new Product("RTX 3070 Ti", 65000, "gpu"));
                products.add(new Product("GTX 1060 6GB", 22000, "gpu"));
                products.add(new Product("RTX 4060", 78000, "gpu"));
                products.add(new Product("GTX 1080 Ti", 38000, "gpu"));
                products.add(new Product("RTX 2080 Ti", 40000, "gpu"));
                products.add(new Product("RX 7600", 33000, "gpu"));

                products.add(new Product("Intel Core i7-11700F", 24000, "cpu"));
                products.add(new Product("Intel Core i9-10900F", 34000, "cpu"));
                products.add(new Product("AMD Ryzen 9 7900X", 46000, "cpu"));
                products.add(new Product("AMD Ryzen 7 5800X", 23000, "cpu"));
                products.add(new Product("Intel Core i5-10400F", 10500, "cpu"));

                products.add(new Product("Kingston KF46BB16", 4000, "ram"));
                products.add(new Product("Kingston KF42BA16", 4700, "ram"));
                products.add(new Product("Kingston KF55BBA8", 4400, "ram"));

                productRepository.saveAll(products);

                for (var product : products)  {
                    workshopRepository.save(new Workshop(product, 50));
                }
            }
        };
    }
}
