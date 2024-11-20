// controllers/pokemonController.js

import fetch from 'node-fetch';
import { API_URL } from '../config/config.js';

/**
 * Obtener información del Pokémon por ID
 */
export const getPokemonById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fetch(`${API_URL}${id}`);
        if (!response.ok) {
            return res.status(404).json({ error: 'Pokémon no encontrado' });
        }

        const data = await response.json();
        res.json({
            name: data.name,
            sprite: data.sprites.front_default,
        });
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
        res.status(500).json({ error: 'Error al obtener el Pokémon' });
    }
};
