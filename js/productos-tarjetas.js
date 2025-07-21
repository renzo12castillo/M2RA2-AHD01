const URL = "https://fakestoreapi.com/products"; 

async function obtenerProductos() {
    try{
        const RESULTADO = await fetch(URL); 
        const PRODUCTOS = await RESULTADO.json();
        const CONTENEDOR = document.getElementById("verDatos");

        PRODUCTOS.forEach(producto=>{
            const COL = document.createElement("div"); 
            COL.className = "col-md-4 mb-4"; 
            const CARD = document.createElement("div"); 
            CARD.className = "card h-100"; 
            CARD.innerHTML = `
            <img src="${producto.image}" class="card-img-top img-fluid p-3" style="height: 200px; object-fit: contain;" alt="${producto.title}">
            <div class="card-body">
                <h5 class="card-title text-truncate fs-5">${producto.title}</h5>
                <h6 class="card-subtitle mb-2">${producto.price}</h6>
                <p class="card-text">${producto.description}</p>
                <a href="#" class="btn btn-primary">Mas detalles</a>
            </div>
            `; 

            COL.appendChild(CARD); 
            CONTENEDOR.appendChild(COL); 
        })
    } catch(error) {
        console.error("Error en datos, intente de nuevo", error); 
    }
}; 

obtenerProductos();