import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Category } from '../../shared/interface/category.interface';
import { CategoryService } from '../../services/category.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatFormFieldModule, RouterLink, RouterLinkActive, MatButtonModule, MatRadioModule, FormsModule, MatToolbarModule, MatCardModule],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.css'
})
export class StartGameComponent {

  categoriesData: Category[] = [];
  selectedCategoryId: any = -1;

  constructor(public CategoryService: CategoryService, public router: Router, public GlobalService: GlobalService) { }

  ngOnInit(): void {
    this.GlobalService.showSpinner = true;
    this.CategoryService.getAllCategories()?.then(
      (categories) => {
        this.categoriesData = categories;
        this.GlobalService.showSpinner = false;
      }
    );
  }

  selectCategory(id: string) {
    this.selectedCategoryId = id;
  }

  startGame() {
    if (this.selectedCategoryId != -1) {
      this.router.navigate([`/language-game/game-mode/playing/${this.selectedCategoryId}`]);
    }
  }

}
