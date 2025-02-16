import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  firstname: any

  @Input('lastname')//Input()内如果有别名参数，那么传参时按照这个别名使用属性，否则用下面的真是变量名
  lsname: any

  @Input()
  obj: any

  @Output()
  dataupdater = new EventEmitter<string>()

  fruits = ['Apple', 'orange']

  updateFruits(fruitname: string) {
    this.fruits.push(fruitname)
    return 'data added'
  }

}
