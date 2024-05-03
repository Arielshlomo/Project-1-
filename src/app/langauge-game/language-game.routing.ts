import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { PlayingGameComponent } from './playing-game/playing-game.component';
import { StartGameComponent } from './start-game/start-game.component';
import { NgModule } from '@angular/core';

export const languageGameRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'game-mode/start' },
    { path: 'category', component: CategoryTableComponent },
    { path: 'category-form', component: CategoryFormComponent },
    { path: 'category-form/:id', component: CategoryFormComponent },
    { path: 'game-mode/start', component: StartGameComponent },
    { path: 'game-mode/playing', component: PlayingGameComponent },
    { path: 'game-mode/playing/:id', component: PlayingGameComponent },
];