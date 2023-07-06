package io.angelonix.proyectpc.repository;
import io.angelonix.proyectpc.endpoint.model.Product;
import java.util.ArrayList;
import java.util.List;
public class DataBaseProduct {


    public static List<Product> Products;
    private static void generateProductList(){
        Products = new ArrayList<>();
        Product ProductOne = new Product();
        ProductOne.setId(1);
        ProductOne.setTipo_producto("Gabinete");
        ProductOne.setColor("Rojo");
        ProductOne.setFechafab("07/05/2023");
        Products.add(ProductOne);


        Product ProductTwo = new Product();
        ProductTwo.setId(2);
        ProductTwo.setTipo_producto("Monitor");
        ProductTwo.setColor("Negro");
        ProductTwo.setFechafab("07/03/2022");
        Products.add(ProductTwo);



        Product ProductThree = new Product();
        ProductThree.setId(2);
        ProductThree.setTipo_producto("Teclado");
        ProductThree.setColor("Blanco");
        ProductThree.setFechafab("07/04/2023");
        Products.add(ProductThree);




        Product ProductFour = new Product();
        ProductFour.setId(2);
        ProductFour.setTipo_producto("Mouse");
        ProductFour.setColor("Amarillo");
        ProductFour.setFechafab("30/01/2023");
        Products.add(ProductFour);
    }

    public static List<Product> getAllCars(){
        if(Products == null){
            generateProductList();
        }
        return Products;
    }
}

}
