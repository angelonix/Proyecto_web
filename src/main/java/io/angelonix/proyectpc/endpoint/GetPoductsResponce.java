package io.angelonix.proyectpc.endpoint;
import io.angelonix.proyectpc.endpoint.model.Product;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetPoductsResponce {
    private List<Product> product;
}
