import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../model/services/products.service';
import { Iproducts } from '../model/services/iproducts';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductsService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  constructor(private productsService:ProductsService) {}
  products: Iproducts[] = [];

  ngOnInit(): void{
    this.products = this.productsService.getProducts();
  }

}
