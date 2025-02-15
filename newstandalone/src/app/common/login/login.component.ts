import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginModel } from '../../model/Login.model';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../service/master.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    localStorage.clear()
  }
  private masterService = inject(MasterService);
  private router = inject(Router)

  _logindata: LoginModel = {
    username: 'admin',
    password: 'admin'
  }
  ProceedLoign(form: any) {
    if (form.valid) {
      this.masterService.proceedlogin(this._logindata).subscribe({
        next: (item) => {
          let resp = item
          if (resp.length > 0) {
            localStorage.setItem('username', this._logindata.username)
            this.router.navigateByUrl('/home')
          } else {
            alert('Invalid credentials!')
          }
        },
        error: () => {

        }
      })
    }

  }
}
