document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Encuentra el producto con el ID correspondiente
    const product = products.find(p => p.id === productId);

    // Muestra los detalles del producto en el contenedor
    if (product) {
        const detailsContainer = document.getElementById('producto-container');
        detailsContainer.innerHTML = `

        <div class="container1">
            <div class="detalle-img">
                <img src="${product.image}" alt="${product.nombre}">
            </div>

            <div class="detalle-txt">
                <h3>${product.nombre}</h3> <br>
                 <hr>
                 <br>
                <p>Marca: ${product.marca}</p><hr>
                <br>
                <p>Precio: $${product.precio}</p><hr>
                <br>
                <p>Talla: ${product.talla}</p><hr>
                <br>
                <p>Color: ${product.color}</p><hr>
                <br>
                <p>Tipo: ${product.tipo}</p><hr>
                <br>
                <p>Material: ${product.material}</p><hr>
                <br>
                <p>Referencia: ${product.referencia}</p>
                
            </div>
            </div>
        `;
       
    } else {
        // Si el producto no se encuentra, muestra un mensaje de error
        const detailsContainer = document.getElementById('producto-container');
        detailsContainer.innerHTML = '<p>Producto no encontrado</p>';
    }
});

