import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from '../../service/product.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Product } from '../../model/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit {
  productService = inject(ProductService)
  formBuilder = inject(FormBuilder)
  ref = inject(MatDialogRef<AddproductComponent>)
  toastr = inject(ToastrService)
  _dialogdata: any
  _productinfo: any
  // productForm!: FormGroup
  productForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    name: this.formBuilder.control('', Validators.required),
    description: this.formBuilder.control('', Validators.required),
    price: this.formBuilder.control(10, Validators.required),
    status: this.formBuilder.control(false, Validators.required),

  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this._dialogdata = this.data
    if (this._dialogdata.id !== 0) {
      this.productService.getProductById(this._dialogdata.id).subscribe({
        next: (item) => {
          this._productinfo = item[0]
          this.productForm.patchValue({
            id: this._productinfo.id,
            name: this._productinfo.name,
            description: this._productinfo.description,
            price: this._productinfo.price,
            status: this._productinfo.status
          })
        },
        error: (item) => {
          alert("error when fetch product")
        }
      })
    }

  }



  cancelpopup() {
    this.ref.close()
  }

  proceedAdd() {
    if (this.productForm.valid) {
      let data: Product = {
        id: this.productForm.value.id as number,
        name: this.productForm.value.name as string,
        description: this.productForm.value.description as string,
        price: this.productForm.value.price as number,
        status: this.productForm.value.status as boolean
      }
      if (this._dialogdata.id !== 0) {
        console.log('data:', data)
        this.productService.updateProduct(data).subscribe({
          next: (item) => {
            this.toastr.success('product updated successfully!', 'Success')
            this.productForm.reset()
            this.cancelpopup()
          },
          error: (item) => {
            alert('product updated failed!')
          }
        })
      } else {
        this.productService.createProduct(data).subscribe({
          next: (item) => {
            this.toastr.success('product created successfully!', 'Success')
            this.productForm.reset()
            this.cancelpopup()
          },
          error: (item) => {
            alert('product created failed!')
          }
        })
      }

    }
  }
}
