import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <p>
      contact works!
      <input [(ngModel)]='content'/>{{content}}
    </p>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {
    console.log('constructor...')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked....')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit....')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked...')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit....')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck....')
  }
  content = ''
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes)
  }
  ngOnInit(): void {
    console.log('ngOnInit!')
  }


}
