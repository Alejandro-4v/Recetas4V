// He investigado un poco sobre las interfaces después de que Gemini me hablara de ellas y he decidido quedarme con una interface para el ejercicio en vez de una clase. Realmente no existe lógica de negocio para las recetas, solamente se definen propiedades. Es por eso que aprovecho la propia dinámica que da TypeScript y empleo una interface

export interface Recipe {
    // Identificador único para poder borrar o editar 
    id: number;
    // Nombre de la receta 
    name: string;
    // Lista de ingredientes 
    ingredients: string[];
    // Tiempo de preparación en minutos 
    prepTimeMinutes: number;
}