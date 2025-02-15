import { Component, DoCheck, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements DoCheck {
  showMenu = true
  router = inject(Router)
  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl === '/' || currenturl === '/register') {
      this.showMenu = false
    } else {
      this.showMenu = true
    }
  }


}
