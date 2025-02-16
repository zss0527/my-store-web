import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-counterbtn',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './counterbtn.component.html',
  styleUrl: './counterbtn.component.css'
})
export class CounterbtnComponent {
  @ViewChild('user')
  userInput: ElementRef | undefined

  masterService = inject(MasterService)

  increment() {
    this.masterService.counterValue.update(previous => previous + 1)
  }

  decrement() {
    this.masterService.counterValue.update(previous => previous - 1)
  }

  reset() {
    this.masterService.counterValue.update(previous => previous = 0)
  }

  addUser(param: string) {
    let id = this.masterService.players().length + 1
    this.masterService.players.update(prev => [...prev, { id: id, name: param }])
    this.userInput!.nativeElement.value = ''
  }
}
