import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  displayedColumns2: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource2!: MatTableDataSource<UserData>;

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
  dataSource!: MatTableDataSource<Product>;
  productService = inject(ProductService)
  dialog = inject(MatDialog)
  productList!: Product[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // // Assign the data to the data source for the table to render
    // this.dataSource2 = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    this.loadProducts()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (item) => {
        this.productList = item
        this.dataSource = new MatTableDataSource(this.productList)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort

        console.log('dataSource:', this.dataSource)
      }
    })
  }

  editProduct(id: number) {
    this.openPopup(id, 'Edit Product')
  }

  deleteProduct(id: number) {
    if (confirm('Do you want to remove?')) {
      this.productService.removeProduct(id).subscribe({
        next: item => {
          alert('delete product successfully!')
          this.loadProducts()
        }
      })
    }
  }

  createProduct() {
    this.openPopup(0, 'Create Product')
  }

  openPopup(id: number = 0, title: string) {
    this.dialog.open(AddproductComponent, {
      width: '40%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: {
        id: id,
        title: title
      }
    }).afterClosed().subscribe(item => {
      this.loadProducts()
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
