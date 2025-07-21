const URL = "https://dummyjson.com/products"; 

async function verProductosTabla() {
    try {
        const RESULTADO = await fetch(URL); 
        const PRODUCTOS = await RESULTADO.json(); 
        const PRODUCTOS_ARRAY_FIX = PRODUCTOS.products;
        const TABLA = document.getElementById("verProductosTabla"); 

        PRODUCTOS_ARRAY_FIX.forEach(producto=>{
            const FILA = document.createElement("tr");
            FILA.innerHTML = `
                <td>${producto.id}</td>
                <td>${producto.title}</td>
                <td>${producto.description}</td>
                <td>${producto.category}</td>
                <td>${producto.price}</td>
                <td>${producto.discountPercentage}</td>
                <td>${producto.rating}</td>
                <td>${producto.stock}</td>
                <td>${producto.brand}</td>
                <td>${producto.sku}</td>
                <td>${producto.warrantyInformation}</td>
                <td>${producto.availabilityStatus}</td>
                <td><img src="${producto.images[0]}" alt="${producto.title}" class="imageSize"></td>
            `;
            TABLA.appendChild(FILA);
        }); 
    } catch(error) {
        console.error("Error en los datos, intentar nuevamente", error);
    }; 
}; 

verProductosTabla();