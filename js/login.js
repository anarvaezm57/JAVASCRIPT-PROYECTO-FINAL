// Función para validar el inicio de sesión
function login() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
 
    if (!validarClave(clave)) {
        alert("Contraseña incorrecta. Asegúrese de que cumpla con los requisitos.");
        return;
    }
 
    validarUsuario(usuario, clave)
        .then(function (isValidUser) {
            if (isValidUser) {
                // Mostrar mensaje de carga
                alert("Validando usuario. Por favor, espere...");

                setTimeout(function () {
                    window.location.href = '../paginaweb.html';
                }, 2000);
            } else {
                alert("contraseña incorrecta. Por favor, inténtelo de nuevo.");
            }
        })
        .catch(function (error) {
            alert("Error en la validación del usuario: " + error);
        });
}
 
function validarClave(clave) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(clave);
}
 

function validarUsuario(usuario, clave) {
    return new Promise(function (resolve, reject) {
        var validUsers = [
            { usuario: "andrea5@gmail.com", clave: "Andre123@" },
            { usuario: "juan15@gmail.com", clave: "Juan555?" },
            { usuario: "valeria11@gmail.com", clave: "Vale123!" }
           
        ];
 
        setTimeout(function () {
            var isValidUser = false;
            for (var i = 0; i < validUsers.length; i++) {
                if (validUsers[i].usuario === usuario && validUsers[i].clave === clave) {
                    isValidUser = true;
                    break;
                }
            }
 
            if (isValidUser) {
                resolve(true);
            } else {
                reject("Usuario no válido");
            }
        }, 1000); 
    });
}
