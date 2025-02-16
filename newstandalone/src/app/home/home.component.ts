import { Component, inject, signal, ViewChild } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../common/child/child.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    ReversePipe,
    FormsModule,
    ChildComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  toastr = inject(ToastrService)
  title = 'Agular 18 Tutorial';
  title1 = signal<string>('Agular 18 Tutorial')
  subtitle = 'Angular for begginers'
  todaydate = new Date()
  salary = 1000
  _obj = {
    "name": "INT"
  }

  constructor() {
    setTimeout(() => {
      this.title = "Zoneless test"
      this.title1.set('Zoneless test')
      console.log('this title: ', this.title)
    }, 1000);
  }

  @ViewChild(ChildComponent)
  _child!: ChildComponent

  _class = 'active'
  _color = 'blue'
  _font = '24'

  isShow = true

  firstname = ''

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

  updatetitle1(title: string) {
    this.title = title
  }

  addFruit(fruit: string) {
    let res = this._child.updateFruits(fruit)
    this.toastr.success(res, 'Success')
  }

  isDisabled = true
}
