import { Component, computed, effect, inject, OnInit, Signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

import { MasterService } from '../../service/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit {

  masterService = inject(MasterService)
  displayValue = 0

  totalPlayers = computed(() =>
    this.masterService.players().length
  )

  totalPlayers$ = toObservable(this.totalPlayers)
  _signalCount = toSignal(this.totalPlayers$)

  constructor() {
    effect(() => {
      this.displayValue = this.masterService.counterValue()
    })
  }

  ngOnInit(): void {
    // this.displayValue = this.masterService.counterValue()
  }

}

