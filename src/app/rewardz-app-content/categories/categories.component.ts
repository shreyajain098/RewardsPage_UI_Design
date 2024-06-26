import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle as faCheckCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as faCheckCircleOutline } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatExpansionModule, MatIconModule, FontAwesomeModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories = ['e-Voucher', 'Products', 'Evergreen', 'Fashion & Retail'];
  faCheckCircleSolid = faCheckCircleSolid;
  faCheckCircleOutline = faCheckCircleOutline;

}
