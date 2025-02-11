import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, HomeComponent, CommonModule, ReversePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
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
