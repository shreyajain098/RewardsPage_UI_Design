import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './rewardz-nav-header/header/header.component';
import { FooterComponent } from './rewardz-app-footer/footer/footer.component';
import { SearchBarComponent } from './rewardz-app-content/search-bar/search-bar.component';
import { CategoriesComponent } from './rewardz-app-content/categories/categories.component';
import { ItemCardComponent } from './rewardz-app-content/items/item-card/item-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SearchBarComponent,
    CategoriesComponent, FooterComponent, ItemCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rewardz-app';
}
