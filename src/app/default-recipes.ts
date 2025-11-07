import { Recipe } from './models/recipe.model';

// Recetas por defecto que se cargan al iniciar la aplicación.
// Nota: El ID debería ser único.

export const DEFAULT_RECIPES: Recipe[] = [
    {
        id: 1,
        name: 'Tortilla de Patatas',
        ingredients: ['Patatas', 'Huevos', 'Cebolla (opcional)', 'Aceite de Oliva', 'Sal'],
        prepTimeMinutes: 45
    },
    {
        id: 2,
        name: 'Gazpacho Andaluz',
        ingredients: ['Tomates', 'Pepino', 'Pimiento Verde', 'Ajo', 'Pan duro', 'Aceite de Oliva', 'Vinagre', 'Sal'],
        prepTimeMinutes: 20
    },
    {
        id: 3,
        name: 'Bocata de Jamón con tomate',
        ingredients: ['Pan', 'Tomate', 'Jamón', 'Aceite de Oliva', 'Sal', 'Pimienta'],
        prepTimeMinutes: 3
    },
    {
        id: 4,
        name: 'Cheescake',
        ingredients: ['Harina', 'Queso crema', 'Azúcar', 'Galleta'],
        prepTimeMinutes: 45
    }
];