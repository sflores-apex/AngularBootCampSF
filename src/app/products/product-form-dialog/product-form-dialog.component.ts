import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-form-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './product-form-dialog.component.html',
  styleUrl: './product-form-dialog.component.scss'
})
export class ProductFormDialogComponent {

  constructor(private dialogRef: MatDialogRef<ProductFormDialogComponent>) { }

  protected saveProduct(): void {

  }

}
