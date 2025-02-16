import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  isShow = false
  userInput = ""
  fruits = ['Apple', 'Banana', 'Orange']
  cannavigate() {
    if (this.userInput !== '') {
      if (confirm('if you navigating your data going to lost. do you want continue?')) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
}
