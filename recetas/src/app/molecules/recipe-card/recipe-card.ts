import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '@models/recipe.model'; // ¡Importamos la interfaz!
import { ButtonComponent } from '@atoms/button/button';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.html',
  imports: [ButtonComponent],
  standalone: true
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe; // Uso ! para asegurar que nunca será nulo

  @Output() deleteRequest = new EventEmitter<number>(); 

  onDelete(): void {
    // Verificamos que la receta exista y emitimos su ID.
    if (this.recipe) {
      this.deleteRequest.emit(this.recipe.id);
    }
  }
}