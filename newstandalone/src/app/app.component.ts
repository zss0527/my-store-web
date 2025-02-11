import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, HomeComponent, CommonModule, ReversePipe],
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
}
