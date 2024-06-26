import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import itemData from '../../../../assets/localResources/item.json';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, MatRadioModule, MatSidenavModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {

  originalItems = itemData
  items: any;
  selectedSortOption: string = '';
  @ViewChild('drawer')
  drawer!: MatSidenav;

  constructor() {
    this.items = [...this.originalItems];
  }

  selectSortOption(option: string) {
    this.selectedSortOption = option;
  }

  applySort() {
    if (this.selectedSortOption === 'ascending') {
      this.items.sort((a: any, b: any) => a.name.localeCompare(b.name));
    }
    else if (this.selectedSortOption === 'descending') {
      this.items.sort((a: any, b: any) => b.name.localeCompare(a.name));
    }
    this.drawer.close();
  }

  resetAll() {
    this.selectedSortOption = '';
    this.items = [...this.originalItems];
    this.drawer.close();
  }

  close() {
    this.drawer.close();
  }

}
