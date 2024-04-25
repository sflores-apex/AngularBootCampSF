import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-form-dialog',
  standalone: true,
  imports: [],
  templateUrl: './product-form-dialog.component.html',
  styleUrl: './product-form-dialog.component.scss'
})
export class ProductFormDialogComponent {

  constructor(private dialogRef: MatDialogRef<ProductFormDialogComponent>) { }

}
