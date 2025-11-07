import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '@models/recipe.model';
import { RecipeCardComponent } from '@molecules/recipe-card/recipe-card';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.html',
  imports: [
    CommonModule, RecipeCardComponent
  ]
})
export class RecipeListComponent {
  // El array de recetas que este organismo recibe del padre
  @Input() recipes: Recipe[] = [];

  // Evento para eliminar receta (enviado al padre)
  @Output() deleteRequest = new EventEmitter<number>();

  // Evento para editar receta (enviado al padre)
  @Output() editRequest = new EventEmitter<Recipe>();

  handleDeleteRequest(recipeId: number): void {
    // Envio el ID al padre, ahí esta la lógica para eliminar
    this.deleteRequest.emit(recipeId);
  }
}