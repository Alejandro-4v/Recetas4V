import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from '../../molecules/form-group/form-group';
import { ButtonComponent } from '../../atoms/button/button';
import { Recipe } from '@models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  templateUrl: './recipe-form.html',  
  imports: [
    CommonModule,
    FormGroupComponent,
    ButtonComponent
  ]
})
export class RecipeFormComponent {
  newRecipe: {
    name: string;
    ingredients: string;
    prepTimeMinutes: number;
  } = {
    name: '',
    ingredients: '',
    prepTimeMinutes: 0
  };

  // Array para almacenar los mensajes de error de la validación
  validationErrors: string[] = [];

  @Output() recipeSubmit = new EventEmitter<Recipe>();

  // Cambios en los inputs
  updateName(value: string | number): void {
    this.newRecipe.name = String(value);
  }

  updateIngredients(value: string | number): void {
    this.newRecipe.ingredients = String(value);
  }

  updatePrepTime(value: string | number): void {
    this.newRecipe.prepTimeMinutes = Number(value);
  }

  // Lógica para procesar los ingredientes y separarlos en string[]
  private processIngredientsString(ingredientsString: string): string[] {
    if (!ingredientsString) {
      return [];
    }
    // Parte el string por comas, limpia espacios y filtra entradas vacías
    return ingredientsString
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }

  // Lógica de validación y errores
  private validateForm(): boolean {
    this.validationErrors = []; 
    const ingredientsArray = this.processIngredientsString(this.newRecipe.ingredients);
    
    // Validar Nombre (he puesto que al menos tenga tres caracteres para que tenga un poco de coherencia)
    if (!this.newRecipe.name || this.newRecipe.name.trim().length < 3) {
      this.validationErrors.push('El nombre de la receta es obligatorio y debe tener al menos 3 caracteres.');
    }

    // Validar Ingredientes
    if (ingredientsArray.length === 0) {
      this.validationErrors.push('La lista de ingredientes no puede estar vacía.');
    }

    // Validar Tiempo de Preparación
    if (!this.newRecipe.prepTimeMinutes || this.newRecipe.prepTimeMinutes <= 0 || !Number.isInteger(this.newRecipe.prepTimeMinutes)) {
      this.validationErrors.push('El tiempo de preparación debe ser un número entero mayor a cero.');
    }

    return this.validationErrors.length === 0;
  }
  
  onSubmit(): void {
    if (!this.validateForm()) {
      return; 
    }

    const ingredientList = this.processIngredientsString(this.newRecipe.ingredients);

    const recipeToAdd: Recipe = {
      id: Date.now(),
      name: this.newRecipe.name.trim(),
      ingredients: ingredientList,
      prepTimeMinutes: this.newRecipe.prepTimeMinutes
    };

    this.recipeSubmit.emit(recipeToAdd);
    this.resetForm();
    this.validationErrors = [];
  }

  resetForm(): void {
    this.newRecipe = { name: '', ingredients: '', prepTimeMinutes: 0 };
    this.validationErrors = [];
  }
}