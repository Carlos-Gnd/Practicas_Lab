const express = require('express');
const path = require('path');

//crear una app express
const app = express();
const PORT = 3000;

//configurar middleware para servir archivos estaticos
//archivos dentro de la carpeta 'public'
app.use(express.static('public'));

// **Rutas**

//ruta principal
app.get('/', (req, res)=>{
    //envia el archivo 'index.html¿ como respuesta al usuario cuando accede a '/'
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//Rutas "Acerca de" (página secundaria)
app.get('/about', (req, res)=>{
    //enviar el archivo 'about.html' como respuesta cuando el usuario accede a '/about'
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
    });

    //manejo de rutas no existentes(404)
    //Este middleware captura cualquier ruta no definida previamente
    app.use((req, res)=>{
        //configurar el codigo de estado como el 404 (no encontrado)
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    });

    // ** Iniciar el servidor **
        //escuchar peticiones en el puerto definido
    app.listen(PORT, ()=>{
        //mostrar un mensaje en la consola indicando que el servidor está activo
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });