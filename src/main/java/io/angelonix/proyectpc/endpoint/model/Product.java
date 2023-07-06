package io.angelonix.proyectpc.endpoint.model;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Product {
    private int Id;
    private String Tipo_producto;
    private String Marca;
    private String Color;
    private String Fechafab;
}
