import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MasterService } from '../../service/master.service';
import { user } from '../../model/Login.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    RouterLink,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  builder = inject(FormBuilder)
  masterservice = inject(MasterService)
  router = inject(Router)

  roles: Role[] = [
    { value: 'salesman', viewValue: 'Salesman' },
    { value: 'supervisor', viewValue: 'Supervisor' },
    { value: 'manager', viewValue: 'Manager' },
  ]
  registerform = this.builder.group({
    username: this.builder.control('larry', Validators.required),
    password: this.builder.control('123', Validators.compose([Validators.required, Validators.minLength(3)])),
    email: this.builder.control({ value: '', disabled: true }, Validators.compose([Validators.email, Validators.required])),
    role: this.builder.control('manager', Validators.required),
    gender: this.builder.control('m'),
    term: this.builder.control(false),
  })

  // registerform = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
  //   email: new FormControl({ value: '', disabled: true }, Validators.compose([Validators.email, Validators.required])),
  //   role: new FormControl('', Validators.required),
  //   gender: new FormControl('m'),
  //   term: new FormControl(false),
  // })

  proceedRegister() {
    if (this.registerform.valid) {
      console.log(this.registerform.value)
      // this.registerform.setValue({
      //   // username: 'jack',
      //   // password: '123',
      //   // email: 'dddd@outlook.com'
      // })
      let data: user = {
        id: this.registerform.value.username as string,
        password: this.registerform.value.password as string,
        role: this.registerform.value.gender as string,
        username: this.registerform.value.username as string,
        gender: this.registerform.value.gender as string

      }
      this.masterservice.proceedregister(data).subscribe({
        next: (item) => {
          console.log('item:', item)
          alert('registe success!')
          this.router.navigateByUrl('/login')
        },
        error: (item) => {
          alert('registe failed!')
        }
      })
    }


  }
}

type Role = {
  value: string,
  viewValue: string
}
