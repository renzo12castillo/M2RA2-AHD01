const URL = "https://hp-api.onrender.com/api/characters"; 

async function obtenerPersonajes() {
    try {
        const RESULTADO = await fetch(URL); 
        const PERSONAJES = await RESULTADO.json(); 
        const CONTENEDOR = document.getElementById("verPersonajes"); 

        PERSONAJES.forEach(personaje=>{ 
            const COL = document.createElement("div"); 
            COL.className = "col-md-4 mb-4"; 
            const CARD = document.createElement("div"); 
            CARD.className = "card h-100"; 
            CARD.innerHTML = ` 
            <img src="${personaje.image}" class="card-img-top img-fluid p-3" style="height: 200px; object-fit: contain;" alt="${personaje.name}"> 
            <div class="card-body"> 
                <h5 class="card-title text-truncate fs-5">${personaje.name}</h5> 
                <h6 class="card-subtitle mb-2">${personaje.species}</h6> 
                <p class="card-text">${personaje.house}</p> 
                <p class="card-text">${personaje.dateOfBirth}</p> 
                <p class="card-text">${personaje.ancestry}</p> 
                <a href="#" class="btn btn-primary">Mas detalles</a> 
            </div> 
            `; 

            COL.appendChild(CARD); 
            CONTENEDOR.appendChild(COL); 
        })
    } catch(error){
        console.error("Error en los datos, intentar nuevamente", error);
    }; 
}; 

obtenerPersonajes();