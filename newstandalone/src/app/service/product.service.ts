import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)
  baseurl = 'http://localhost:3000/product'
  constructor() { }

  getAll() {
    return this.http.get<Product[]>(this.baseurl)
  }

  getProductById(id: number) {
    return this.http.get<Product[]>(this.baseurl + '?id=' + id)
  }

  createProduct(pro: Product) {
    return this.http.post(this.baseurl, pro)
  }

  updateProduct(pro: Product) {
    console.log('pro:', pro)
    return this.http.put(`${this.baseurl}/${pro.id}`, pro)
  }

  removeProduct(id: number) {
    return this.http.delete(this.baseurl + '/' + id)
  }
}
