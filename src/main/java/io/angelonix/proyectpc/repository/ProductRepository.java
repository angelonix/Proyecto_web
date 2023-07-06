package io.angelonix.proyectpc.repository;
import io.angelonix.proyectpc.repository.model.ProductEntity;
import org.springframework.data.repository.ProductRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProductRepository
        extends ProductRepository<ProductEntity, Integer> {
}
