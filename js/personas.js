const URL = "http://127.0.0.1:5501/json/personas.json"; 

async function verPersonas() {
    try {
        const RESULTADO = await fetch(URL); 
        const PERSONAS = await RESULTADO.json(); 
        const TABLA = document.getElementById("verPersonasTabla"); 

        PERSONAS.forEach(persona=>{
            const FILA = document.createElement("tr"); 
            FILA.innerHTML = `
            <td>${persona.dpi}</td>
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.telefono}</td>
            <td><img src="${persona.imagen}" alt="${persona.nombre}" class="imageSize"></td>
            `; 
            TABLA.appendChild(FILA); 
        })
    } catch(Error) {
        console.error("Error en los datos, intente de nuevo", Error);
    }; 
}; 

verPersonas(); 