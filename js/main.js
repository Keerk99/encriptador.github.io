function validarTecla(event) {

    const teclaAltPresionada = event.altKey;

    if (teclaAltPresionada) {
        event.preventDefault();
    }
    const teclaPresionada = event.key;

    if (teclaPresionada === teclaPresionada.toUpperCase() && teclaPresionada.match(/[A-ZÁÉÍÓÚÜÑ]/)
        || teclaPresionada.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
        || teclaPresionada === teclaPresionada.toLowerCase() && teclaPresionada.match(/[áéíóúü]/)) {
        event.preventDefault();
    }
}

function encriptar() {
    const texto = document.getElementById("texto_encriptar");
    const resultado = document.getElementById("resultado_texto");

    const contenido = texto.value;
    let encriptado = "";

    const main = document.querySelector(".principal");
    const container = document.querySelector(".container");
    const div = document.querySelector(".desencriptar_container");


    if (contenido === "") {
        document.getElementById('sin_texto_modal').style.display = 'flex';
        document.getElementById('resultado_modal').style.display = 'none';
    } else {
        for (let i = 0; i < contenido.length; i++) {
            const letra = contenido[i];
            if (letra === "a") {
                encriptado += "ai"
            } else if (letra === "e") {
                encriptado += "enter"
            } else if (letra === "i") {
                encriptado += "imes"
            } else if (letra === "o") {
                encriptado += "ober"
            } else if (letra === "u") {
                encriptado += "ufat"
            } else {
                encriptado += letra;
            }
        }
        document.getElementById('resultado_modal').style.display = 'block';
        document.getElementById('sin_texto_modal').style.display = 'none';
    }

    if (window.innerWidth <= 400) {
        if (contenido === "") {
            document.getElementById('sin_texto_modal').style.display = 'grid';
            document.getElementById('resultado_modal').style.display = 'none';
            main.style.height = "900px";
            container.style.height = "900px";
            div.style.height = "200px";
        } else {
            main.style.height = "1200px";
            container.style.height = "1200px";
            div.style.height = "500px";
        }
    } else if (window.innerWidth <= 800) {
        if (contenido === "") {
            document.getElementById('sin_texto_modal').style.display = 'flex';
            document.getElementById('resultado_modal').style.display = 'none';
            main.style.height = "800px";
            container.style.height = "800px";
            div.style.height = "100px";
        } else {
            main.style.height = "1000px";
            container.style.height = "1000px";
            div.style.height = "300px";
        }
    }

    resultado.textContent = encriptado;
}

function desencriptar() {
    const texto = document.getElementById("texto_encriptar");
    const resultado = document.getElementById("resultado_texto");

    const oracion = texto.value;
    let desencriptado = "";

    let i = 0;

    const main = document.querySelector(".principal");
    const container = document.querySelector(".container");
    const div = document.querySelector(".desencriptar_container");

    if (oracion === "") {
        document.getElementById('sin_texto_modal').style.display = 'flex';
        document.getElementById('resultado_modal').style.display = 'none';
    } else {
        while (i < oracion.length) {
            if (oracion.slice(i, i + 2) === "ai") {
                desencriptado += "a";
                i += 2;
            } else if (oracion.slice(i, i + 5) === "enter") {
                desencriptado += "e";
                i += 5;
            } else if (oracion.slice(i, i + 4) === "imes") {
                desencriptado += "i";
                i += 4;
            } else if (oracion.slice(i, i + 4) === "ober") {
                desencriptado += "o";
                i += 4;
            } else if (oracion.slice(i, i + 4) === "ufat") {
                desencriptado += "u";
                i += 4;
            } else {
                desencriptado += oracion[i];
                i++;
            }
        }
        document.getElementById('sin_texto_modal').style.display = 'none';
        document.getElementById('resultado_modal').style.display = 'block';
    }

    if (window.innerWidth <= 400) {
        if (oracion === "") {
            document.getElementById('sin_texto_modal').style.display = 'grid';
            document.getElementById('resultado_modal').style.display = 'none';
            main.style.height = "900px";
            container.style.height = "900px";
            div.style.height = "200px";
        } else {
            main.style.height = "1200px";
            container.style.height = "1200px";
            div.style.height = "500px";
        }
    } else if (window.innerWidth <= 800) {
        if (oracion === "") {
            document.getElementById('sin_texto_modal').style.display = 'flex';
            document.getElementById('resultado_modal').style.display = 'none';
            main.style.height = "800px";
            container.style.height = "800px";
            div.style.height = "100px";
        } else {
            main.style.height = "1000px";
            container.style.height = "1000px";
            div.style.height = "300px";
        }
    }

    resultado.textContent = desencriptado;
}

function copiarTexto() {
    //Obtener el elemento del textarea
    const texto = document.getElementById("resultado_texto");

    //Obtener el texto encrtiptado
    const textoCopiado = texto.textContent;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            console.log("Texto copiado al portapapeles");
        })
        .catch((error) => {
            console.log("Error al copiar el texto: ", error);
        });
}