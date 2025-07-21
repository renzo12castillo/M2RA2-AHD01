const URL = "https://fakestoreapi.com/users"; 

async function obtenerDatos() {
    try {
        const RESULTADO = await fetch(URL); 
        const USUARIOS = await RESULTADO.json(); 
        const TABLA = document.getElementById("verUsuarios"); 

        USUARIOS.forEach(usuario=>{
            const FILA = document.createElement("tr");
            FILA.innerHTML = `
                <td>${usuario.address.zipcode}</td>
                <td>${usuario.id}</td>
                <td>${usuario.email}</td>
                <td>${usuario.username}</td>
                <td>${usuario.name.firstname}</td>
                <td>${usuario.name.lastname}</td>
                <td>${usuario.phone}</td>
            `;
            TABLA.appendChild(FILA);
        })
    } catch(error) {
        console.error("Error en los datos, intentar nuevamente", error); 
    }
};

obtenerDatos(); 