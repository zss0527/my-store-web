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

  _class = 'active'
  _color = 'blue'
  _font = '24'

  isShow = true

  tickerinfo = [
    { 'id': 1, 'name': 'angular', color: 'green' },
    { 'id': 2, 'name': 'react', color: 'yellow' },
    { 'id': 3, 'name': 'vue', color: 'blue' },
    { 'id': 4, 'name': 'flutter', color: 'pink' },
  ]

  _view = 'home'

  changetitle() {
    this.title = 'Agular 18 Full Tutorial'
    this.isDisabled = !this.isDisabled
    this.isShow = !this.isShow
  }

  updatetitle(event: any) {
    this.title = event.target.value
  }

  isDisabled = true
}
