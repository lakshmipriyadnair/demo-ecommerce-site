import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Api } from '../../services/api';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

  productId: number = 0;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private api: Api,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.productId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    console.log('ID:', this.productId);

    this.api
      .getProductById(this.productId)
      .subscribe((data) => {

        console.log('DATA:', data);

        this.product = data;

        this.cdr.detectChanges();

      });

  }

}