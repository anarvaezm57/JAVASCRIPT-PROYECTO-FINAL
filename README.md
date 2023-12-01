# JAVASCRIPT-PROYECTO-FINAL
Login 

Proceso de funcionalidad del login 
se presenta una pagina web con un cuado login para acceder a la pagina principal.
este formulario de inicio de sesion presenta dos campos:
*Usuario
*Contraseña
dichos campos debe cumplir con requisitos especiales como son(mas de 8 caracteres, mayusculas, minusculas, 2 numeros y un caracter especial).
mediante el boton Acceder, se deben cumplir las funciones anteriores para pemitir ingresar a la pagina principal con un mensaje de acceso.
se realiza la validación del usuario mediante una función validarUsuario que compara el nombre de usuario y la contraseña con una lista de usuarios registrados,
en un arreglo después de un retraso de 2 segundos.
si no se cumplen los requisitos de contraseña, sale un mensaje de error.


Pagina de productos(ropa).

Dentro de esta pagina se evidencia los productos, la aplicacion de filtros y redireccion hacia otra pagina de detalles.

funcionalidad
una vez el usuario se loguea ingresa a la pagina web donde se encuentran los 50 productos, separados en paginas de 10 elementos,
cada uno con sus respectivos detalles(nombre, talla, precio etc.), los cuales se renderizan desde el arreglo de productos mediante la funcion renderizarProdCards.
se realiza Filtrado de Productos: Se pueden aplicar filtros mediante funciones de filtrar por genero, nombre del producto y marca del mismo, 
con un retraso de 1 segundo, de manera que me registre en la pagina los elementos filtrados.

El proceso de paginacion permite navegar a través de las distintas páginas como es cerrar sesion regresando al login y redirecciionando hacia otra pagina,
mediante una funcion prodDet con un retraso de un segundo, que me permite ver el detalle de un producto seleccionado. 
asi mismo contiene diferentes botones que permiten avanzar o retroceder paginas de los productos y botones en secuencia que permiten ubicarse en la pagina de los productos deseada.

Pagina de detalles.

una vez se redirecciona desde la pagina de productos mediante el boton ver detalle, se ingresa a la pagina de detalles, dentro de la cual,
se identifica los detalles del producto seleccionado.
este proceso de reaiza mediante una funcion y condiciones que redirecciona los detalles completos que se encuentran en el array de productos,
permitiendo ver los que no aparecen en la pagina princiapl de los productos.

el proceso de paginacion se puede regresar a la pagina principal mediante el boton de inicio.





