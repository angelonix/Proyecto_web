const navbarCode = `
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#">PcMaster</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="NuestoServicio.html">Acerca de</a>
            </li>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="Registro_producto.html">Gestion de Productos</a>
            </ul>
          <form class="form-inline my-2 my-lg-0">
            <a class="btn btn-outline-success my-2 my-sm-0" href="Registro.html" type="submit">Registrate</a>
          </form>
        </div>
    </nav>
`;

document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.createElement('div');
  navbarContainer.innerHTML = navbarCode;
  document.body.insertBefore(navbarContainer, document.body.firstChild);
});
