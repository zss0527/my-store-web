import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Agular 18 Tutorial';
  subtitle = 'Angular for begginers'
  todaydate = new Date()
  salary = 1000
  _obj = {
    "name": "INT"
  }

  changetitle() {
    this.title = 'Agular 18 Full Tutorial'
  }

  updatetitle(event: any) {
    this.title = event.target.value
  }

  isDisabled = true
}
