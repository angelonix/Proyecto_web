package io.angelonix.proyectpc.repository.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Products")
@Getter
@Setter
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

    @Column(nullable = false, length = 6)
    private String Tipo_producto;

    @Column(nullable = false, length = 30)
    private String Marca;

    @Column(nullable = false, length = 30)
    private String Fechafab;

    @Column(nullable = false, length = 10)
    private String Color;

}
