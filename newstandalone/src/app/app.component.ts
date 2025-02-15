import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppmenuComponent } from './common/appmenu/appmenu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
