import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PipesModule } from '../../core/pipes/pipes.module';

@Component({
  selector: 'app-product-prices',
  standalone: true,
  imports: [
    PipesModule,
    CommonModule
  ],
  templateUrl: './product-prices.component.html',
  styleUrl: './product-prices.component.scss'
})
export class ProductPricesComponent {
  @Input() priceTag: string = '';
  @Input() price: number = 0;
  @Input() offerDiscount?: number = 0;

  get discountPrice(): number {
    if (!this.offerDiscount) {
      return 0;
    }

    return this.price - (this.price * (this.offerDiscount / 100));
  }
}
