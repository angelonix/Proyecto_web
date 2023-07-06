$(document).ready(function() {
    // Cargar la lista de productos al cargar la página
    cargarProductos();
  
    // Escuchar el evento submit del formulario de agregar producto
    $('#agregarForm').submit(function(event) {
      event.preventDefault();
      var tipo = $('#tipo').val();
      var marca = $('#marca').val();
      var color = $('#color').val();
      var fecha = $('#fecha').val();
  
      // Agregar el producto a la base de datos
      agregarProducto(tipo, marca, color, fecha);
    });
  
    // Escuchar el evento click del botón de eliminar producto
    $('#productosTable').on('click', '.eliminar', function() {
      var id = $(this).closest('tr').data('id');
  
      // Eliminar el producto de la base de datos
      eliminarProducto(id);
    });
  });
  
  // Cargar la lista de productos desde el servidor
  function cargarProductos() {
    $.ajax({
      url: 'productos.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        var table = $('#productosTable');
        table.empty();
  
        $.each(data, function(index, producto) {
          var row = $('<tr>').attr('data-id', producto.id);
          row.append($('<td>').text(producto.id));
          row.append($('<td>').text(producto.tipo));
          row.append($('<td>').text(producto.marca));
          row.append($('<td>').text(producto.color));
          row.append($('<td>').text(producto.fecha));
          row.append($('<td>').html('<button class="eliminar">Eliminar</button>'));
          table.append(row);
        });
      }
    });
  }
  
  // Agregar un producto al servidor
  function agregarProducto(tipo, marca, color, fecha) {
    $.ajax({
      url: 'productos.php',
      type: 'POST',
      data: { tipo: tipo, marca: marca, color: color, fecha: fecha },
      success: function() {
        cargarProductos();
        $('#tipo').val('');
        $('#marca').val('');
        $('#color').val('');
        $('#fecha').val('');
      }
    });
  }
  
  // Eliminar un producto del servidor
  function eliminarProducto(id) {
    $.ajax({
      url: 'productos.php',
      type: 'DELETE',
      data: { id: id },
      success: function() {
        cargarProductos();
      }
    });
  }
  