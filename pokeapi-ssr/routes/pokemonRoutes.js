// routes/pokemonRoutes.js

import express from 'express';
import { getPokemonById } from '../controllers/pokemonController.js';

const router = express.Router();

/**
 * Ruta para obtener Pokémon por ID
 */
router.get('/pokemon/:id', getPokemonById);

export default router;
