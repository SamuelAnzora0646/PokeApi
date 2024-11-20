// server.js

import express from 'express';
import path from 'path';
import { PORT } from './config/config.js';
import pokemonRoutes from './routes/pokemonRoutes.js';

const app = express();

// Configuración de Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(path.resolve(), 'views'));

// Servir archivos estáticos (como imágenes y estilos)
app.use(express.static(path.join(path.resolve(), 'public')));

// Usamos las rutas de Pokémon
app.use(pokemonRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
