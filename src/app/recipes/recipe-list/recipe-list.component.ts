import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =  [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://assets.epicurious.com/photos/5d375cfdae657500091e79e8/6:4/w_620%2Ch_413/TomatoCobbler_RECIPE_071719_7362.jpg')
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
