
const products = [
{ id: 1, genero:'Hombre', nombre: 'Jeans hombre', marca:'Rifle',
image:'../imagen/imgProductos/img1.png',
precio: 140000, talla: '32',color: 'Negro', 
tipo:'sports',material:'tela:algodon', referencia:'JR23755'},

{ id: 2, genero:'Hombre', nombre: 'Jeans hombre', marca:'Americanino', 
  image:'../imagen/imgProductos/img2.png',
  precio: 135000, talla:'32',color: 'AZUL',
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 3, genero:'Mujer', nombre: 'Jeans Dama', marca:'StudioF',
   image:'../imagen/imgProductos/img3.png', 
   precio: 140000, talla: '28', color: 'Negro',
   tipo:'casual',material:'tela:poliester', referencia:'JR23799'},

  { id: 4, genero:'Mujer', nombre: 'Jeans Dama', marca:'StudioF', 
   image:'../imagen/imgProductos/img4.png',
   precio: 140000, talla: '28', color: 'Blanco',
   tipo:'casual',material:'tela:algodon-spandex', referencia:'ST28M81'},

  { id: 5, genero:'Hombre', nombre: 'Jeans hombre', marca:'Chevignon', 
    image:'../imagen/imgProductos/img5.png', 
    precio: 140000, talla: '30', color: 'Gris',
    tipo:'casual',material:'tela:algodon', referencia:'JR23799'},

  { id: 6, genero:'Hombre', nombre: 'Jeans hombre', marca:'Americanino', 
    image:'../imagen/imgProductos/img6.png',  
    precio: 140000, talla: '30', color: 'Azul Obs', 
    tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 7, genero:'Mujer', nombre: 'Jeans Dama', marca:'Americanino', 
    image:'../imagen/imgProductos/img7.png',  
    precio: 130000, talla: '30', color: 'BLANCO',
    tipo:'sports',material:'tela:algodon', referencia:'JR23225'},

  { id: 8, genero:'Hombre', nombre: 'Jeans hombre', marca:'Rifle', 
    image:'../imagen/imgProductos/img8.png', 
    precio: 140000, talla: '32', color: 'Negro' ,
    tipo:'sports',material:'tela:algodon', referencia:'JR24446'},

  { id: 9, genero:'Mujer', nombre: 'Jeans Dama', marca:'Americanino', 
    image:'../imagen/imgProductos/img9.png', 
    precio: 150000, talla: '28', color: 'Hielo',
    tipo:'casual',material:'tela:algodon', referencia:'JR23755' },

  { id: 10, genero:'Hombre', nombre: 'Jeans hombre', marca:'Chevignon', 
    image:'../imagen/imgProductos/img10.png', 
    precio: 150000, talla: '34', color: 'Blanco',
    tipo:'casual',material:'tela:algodon', referencia:'JR23755' },

     // chaqueta............
  { id: 11, genero:'Mujer', nombre: 'Chaqueta', marca:'Americanino', 
    image:'../imagen/imgProductos/img11.png', 
    precio: 140000, talla: 'XL', color: 'Verdoso', 
    tipo:'casual',material:'tela:Nylon', referencia:'JR23905'},

  { id: 12, genero:'Mujer', nombre: 'Chaqueta', marca:'exclusia', 
    image:'../imagen/imgProductos/img12.png',
    precio: 140000, talla: 'M', color: 'Negro',
    tipo:'casual',material:'tela:Nylon', referencia:'JR23111' },

  { id: 33, genero:'Hombre', nombre: 'Chaqueta', marca:'Americanino',
    image:'../imagen/imgProductos/img13.png', 
    precio: 220000, talla: 'L', color: 'Negro',
    tipo:'casual',material:'tela:algodon', referencia:'JR23755' },

  { id: 14, genero:'Mujer', nombre: 'Chaqueta', marca:'Chevignon',
   image:'../imagen/imgProductos/img14.png',
   precio: 300000, talla: 'S', color: 'Blanco',
   tipo:'casual',material:'tela:Nylon', referencia:'JR23333'},

  { id: 15, genero:'Hombre', nombre: 'Chaqueta', marca:'Rifle',
    image:'../imagen/imgProductos/img15.png',
    precio: 240000, talla: 'XL', color: 'Cafe',
    tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 16, genero:'Mujer', nombre: 'Chaqueta', marca:'StudioF',
    image:'../imagen/imgProductos/img16.png', 
    precio: 190000, talla: 'XL', color: 'Fucsia', 
    tipo:'Elegante',material:'tela:algodon', referencia:'JR23755'},

  { id: 17, genero:'Mujer', nombre: 'Chaqueta', marca:'Chevignon',
    image:'../imagen/imgProductos/img17.png', 
    precio: 410000, talla: 'L', color: 'Azul',
    tipo:'casual',material:'tela:algodon', referencia:'JR23995'},

  { id: 18, genero:'Hombre', nombre: 'Chaqueta',  marca:'Tennis', 
    image:'../imagen/imgProductos/img18.png', 
    precio: 350000, talla: 'M', color: 'Azul',
    tipo:'casual',material:'tela:algodon', referencia:'JR23755' },

  { id: 19, genero:'Hombre', nombre: 'Chaqueta', marca:'Rifle', 
    image:'../imagen/imgProductos/img19.png',
    precio: 220000, talla: 'M', color: 'Negro',
    tipo:'sports',material:'tela:algodon', referencia:'JR23755'},

  { id: 20, genero:'Hombre', nombre: 'Chaqueta', marca:'Tennis', 
    image:'../imagen/imgProductos/img20.png', 
    precio: 240000, talla: 'XL', color: 'Azul',
    tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

 
       // camisetas............
  { id: 21, genero:'Hombre',nombre: 'Camiseta', marca:'Gef', 
  image:'../imagen/imgProductos/img21.png', 
  precio: 120000, talla: 'L', color: 'Negro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR2M33Y'},

  { id: 22, genero:'Hombre', nombre: 'Camiseta', marca:'Americanino', 
  image:'../imagen/imgProductos/img22.png', 
  precio: 110000, talla: 'L', color: 'Azul turqui', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 23, genero:'Hombre', nombre: 'Camiseta', marca:'Gef', 
  image:'../imagen/imgProductos/img23.png', 
  precio: 140000, talla: 'L', color: 'Verde', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 24, genero:'Mujer', nombre: 'Camiseta', marca:'Tennis', 
  image:'../imagen/imgProductos/img24.png', 
  precio: 95000, talla: 'S', color: 'Negro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 25, genero:'Hombre', nombre: 'Camiseta', marca:'Rifle', 
  image:'../imagen/imgProductos/img25.png', 
  precio: 110000, talla: 'L', color: 'Negro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23RS22'},

  { id: 26, genero:'Mujer', nombre: 'Camiseta', marca:'Chevignon', 
  image:'../imagen/imgProductos/img26.png', 
  precio: 100000, talla: 'S', color: 'Negro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 27, genero:'Mujer', nombre: 'Camiseta', marca:'Americanino', 
  image:'../imagen/imgProductos/img27.png', 
  precio: 95000, talla: 'S', color: 'Blanco', 
  tipo:'casual',material:'tela:algodon', referencia:'JR2DD37'},

  { id: 28, genero:'Hombre', nombre: 'Camiseta', marca:'Quest', 
  image:'../imagen/imgProductos/img28.png', 
  precio: 140000, talla: 'L', color: 'Blanco', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23PP5'},

  { id: 29, genero:'Mujer', nombre: 'Camiseta', marca:'Rifle', 
  image:'../imagen/imgProductos/img29.png', 
  precio: 120000, talla: 'M', color: 'Vinotinto', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 30, genero:'Hombre', nombre: 'Camiseta', marca:'Americanino', 
  image:'../imagen/imgProductos/img30.png', 
  precio: 950000, talla: 'M', color: 'Gris', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},


       // Ropa interior............
  { id: 31, genero:'Mujer', nombre: 'Panty en v', marca:'Gef', 
  image:'../imagen/imgProductos/img31.png', 
  precio: 75000, talla: 'M', color: 'Morado', 
  tipo:'Tanga',material:'tela:algodon', referencia:'JR23755'},

  { id: 32, genero:'Hombre', nombre: 'Boxer', marca:'Calvin Clean', 
  image:'../imagen/imgProductos/img32.png', 
  precio: 70000, talla: 'L', color: 'Vinotinto', 
  tipo:'Licra',material:'tela:algodon', referencia:'JR2777'},

  { id: 33, genero:'Mujer', nombre: 'Panty de encaje', marca:'Punto Blanco', 
  image:'../imagen/imgProductos/img33.png', 
  precio: 60000, talla: 'M', color: 'Negro', 
  tipo:'Encaje',material:'tela:Licra', referencia:'JR23755'},

  { id: 34, genero:'Mujer', nombre: 'Panty de encaje', marca:'Gef', 
  image:'../imagen/imgProductos/img34.png', 
  precio: 75000, talla: 'S', color: 'Blanco', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 35, genero:'Hombre', nombre: 'Boxer', marca:'Clavin Clean', 
  image:'../imagen/imgProductos/img35.png', 
  precio: 40000, talla: 'L', color: 'Gris', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23MM'},

  { id: 36, genero:'Hombre', nombre: 'Boxer en rayas', marca:'Gef', 
  image:'../imagen/imgProductos/img36.png', 
  precio: 80000, talla: 'M', color: 'Rayas', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 37, genero:'Hombre', nombre: 'Boxer', marca:'Gef', 
  image:'../imagen/imgProductos/img37.png', 
  precio: 60000, talla: 'M', color: 'Negro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 38, genero:'Mujer', nombre: 'Panty tanga', marca:'Punto blanco', 
  image:'../imagen/imgProductos/img38.png', 
  precio: 40000, talla: 'M', color: 'Rosado-piel', 
  tipo:'Tanga',material:'tela:algodon', referencia:'JR23755'},

  { id: 39, genero:'Hombre', nombre: 'Boxer', marca:'Calvin Clean', 
  image:'../imagen/imgProductos/img39.png', 
  precio: 75000, talla: 'M', color: 'Azul', 
  tipo:'casual',material:'tela:Licra', referencia:'JR23755'},

  { id: 40, genero:'Hombre', nombre: 'Boxer en rayas', marca:'Gef', 
  image:'../imagen/imgProductos/img40.png', 
  precio: 90000, talla: '32', color: 'Blanco-negro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  
       // bermudas y short............
  { id: 41, genero:'Hombre', nombre: 'Bermuda', marca:'Gef', 
  image:'../imagen/imgProductos/img41.png', 
  precio: 120000, talla: '34', color: 'Azul', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 42, genero:'Hombre', nombre:'Bermuda', marca:'Americanino', 
  image:'../imagen/imgProductos/img42.png', 
  precio: 150000, talla: '32', color: 'Azul-Obscuro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 43, genero:'Mujer', nombre: 'Shorts', marca:'Quest', 
  image:'../imagen/imgProductos/img43.png', 
  precio: 140000, talla: '32', color: 'Hielo', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 44,genero:'Hombre', nombre: 'Bermuda', marca:'Tennis', 
  image:'../imagen/imgProductos/img44.png', 
  precio: 140000, talla: '32', color: 'Cafe', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 45, genero:'Hombre', nombre: 'Bermuda', marca:'Gef', 
  image:'../imagen/imgProductos/img45.png', 
  precio: 140000, talla: '34', color: 'Negra', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 46, genero:'Hombre', nombre: 'Bermuda', marca:'Gef', 
  image:'../imagen/imgProductos/img46.png', 
  precio: 110000, talla: '32', color: 'Cielo', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 47, genero:'Mujer', nombre: 'Shorts', marca:'Tennis', 
  image:'../imagen/imgProductos/img47.png', 
  precio: 150000, talla: '32', color: 'Negro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 48, genero:'Hombre', nombre: 'Bermuda', marca:'Gef', 
  image:'../imagen/imgProductos/img48.png', 
  precio: 140000, talla: '30', color: 'Azul Obscuro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 49, genero:'Hombre', nombre: 'Bermuda', marca:'Gef', 
  image:'../imagen/imgProductos/img49.png', 
  precio: 90000, talla: '30', color: 'Negro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

  { id: 50, genero:'Mujer', nombre: 'Shorts', marca:'Quest', 
  image:'../imagen/imgProductos/img50.png', 
  precio: 140000, talla: '32', color: 'Azul Obscuro', 
  tipo:'casual',material:'tela:algodon', referencia:'JR23755'},

];


 const itemsPerPage = 10;
         let paginaActual = 1;
      
         function prodDet(index) {
          setTimeout(() => {
              if (index >= 0 && index < products.length) {
                  const productId = products[index].id;
                  const productDetailsURL = `detalle.html?id=${productId}`;
                  window.location.href = productDetailsURL;
              } else {
                  console.error(`El índice ${index} está fuera del rango del array products.`);
              }
          }, 1000);
      }
 
         // Function para enderizar cards de prodcutos
         function renderizarProdCards() {
             const container = document.getElementById('product-container');
             container.innerHTML = '';
 
             const startIndex = (paginaActual - 1) * itemsPerPage;
             const endIndex = startIndex + itemsPerPage;
 
             for (let i = startIndex; i < endIndex && i < products.length; i++) {
                 const product = products[i];
                 const card = document.createElement('article');
                 card.className = 'prod articulo';
                 card.innerHTML = `
                     <div class="prod-img">
                         <img src="${product.image}" alt="${product.nombre}">
                     </div>
                     <div class="prod-txt">
                         <h3>${product.nombre}</h3>
                         <p>Marca: ${product.marca}</p>
                         <p>Precio: $${product.precio}</p>
                         <p>Talla: ${product.talla}</p>
                         <p>Color: ${product.color}</p>
                         <button class="edit-btn btn-2" onclick="prodDet(${i})">Detalle</button>
                         </div>
                     `;
                     container.appendChild(card);
                 }
             }

     
             // Funcion para renderizar paginacion
             function renderizarPagCards() {
                 const totalPag = Math.ceil(products.length / itemsPerPage);
                 const paginacion = document.getElementById('paginacion');
                 paginacion.innerHTML = '';
     
                 for (let i = 1; i <= totalPag; i++) {
                     const pagButton = document.createElement('button');
                     pagButton.innerText = i;
                     pagButton.addEventListener('click', () => {
                         paginaActual = i;
                         renderizarProdCards();
                         renderizarPagCards();
                     });
                     paginacion.appendChild(pagButton);
                 }
             }
     
             // Funcion para regresar a la pagina anterior
             function regresarPag() {
                 if (paginaActual > 1) {
                     paginaActual--;
                     renderizarProdCards();
                     renderizarPagCards();
                 }
             }
     
             // Funcion para continuar en la pagina siguiente
             function nextPag() {
                 const totalPag = Math.ceil(products.length / itemsPerPage);
                 if (paginaActual < totalPag) {
                     paginaActual++;
                     renderizarProdCards();
                     renderizarPagCards();
                 }
             }
     
             // iniciar render
             renderizarProdCards();
             renderizarPagCards();


             function filtrar() {
              const filtroGenero = document.getElementById('filtroGenero').value.trim().toLowerCase();
              const filtroNombre = document.getElementById('filtroNombre').value.trim().toLowerCase();
              const filtroMarca = document.getElementById('filtroMarca').value.trim().toLowerCase();
          
              setTimeout(() => {
                  const productosFiltradas = products.filter(product => {
                      const genero = product.genero.toLowerCase();
                      const nombre = product.nombre.toLowerCase();
                      const marca = product.marca.toString().toLowerCase();
          
                      const coincideGenero = genero.includes(filtroGenero);
                      const coincideNombre = nombre.includes(filtroNombre);
                      const coincideMarca = marca.includes(filtroMarca);
          
                      return coincideGenero && coincideNombre && coincideMarca;
                  });
          
                  mostrarResultadosFiltrados(productosFiltradas);
              }, 1000); // 1 segundo
          }
          
          function mostrarResultadosFiltrados(resultados) {
              const container = document.getElementById('product-container');
              container.innerHTML = '';
          
              for (const product of resultados) {
                  const card = document.createElement('article');
                  card.className = 'prod articulo';
                  card.innerHTML = `
                      <div class="prod-img">
                          <img src="${product.image}" alt="${product.nombre}">
                      </div>
                      <div class="prod-txt">
                          <h3>${product.nombre}</h3>
                          <p>Marca: ${product.marca}</p>
                          <p>Precio: $${product.precio}</p>
                          <p>Talla: ${product.talla}</p>
                          <p>Color: ${product.color}</p>
                          <button class="edit-btn btn-2" onclick="prodDet(${product.id - 1})">Detalle</button>
                      </div>`;
                  container.appendChild(card);
              }
          }

          function borrarFiltros() {
            document.getElementById('filtroGenero').value = '';
            document.getElementById('filtroNombre').value = '';
            document.getElementById('filtroMarca').value = '';
        
            // Mostrar todos los productos nuevamente
            renderizarProdCards();
            renderizarPagCards();
        }
        
 