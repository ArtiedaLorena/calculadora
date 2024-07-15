const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Limitar la longitud máxima del contenido de la pantalla
const MAX_LENGTH = 15;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                if (pantalla.textContent.includes('/0')) {
                    throw new Error("División por cero");
                }
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            // Solo agregar el nuevo contenido si no excede el límite
            if (pantalla.textContent.length < MAX_LENGTH) {
                pantalla.textContent += botonApretado;
            }
        }
    });
});
