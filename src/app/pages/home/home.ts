import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '@models/recipe.model';
import { DEFAULT_RECIPES } from 'src/app/default-recipes';
import { RecipeListComponent } from '../../organisms/recipe-list/recipe-list';
import { RecipeFormComponent } from '../../organisms/recipe-form/recipe-form';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [
    CommonModule, 
    RecipeListComponent,
    RecipeFormComponent
  ]
})
export class HomeComponent implements OnInit {
  public recipes: Recipe[] = []; 

  constructor() { }

  // Cargo recetas
  ngOnInit(): void {
    // Con ese triple punto hago una copia del array
    this.recipes = [...DEFAULT_RECIPES]; 
  }


  addRecipe(newRecipe: Recipe): void {
    // Creo copia del array y añado la nueva receta.
    this.recipes = [...this.recipes, newRecipe];
    console.log('Receta añadida. Total:', this.recipes.length);
  }

  // Borro receta haciendo una copia del array y guardando todas menos la que coincide con el ID a borrar
  deleteRecipe(id: number): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    console.log(`Receta con ID ${id} eliminada. Total restante:`, this.recipes.length);
  }
}