import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Login } from './login';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


interface DataResponse {
  message: string,
  access_token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  isLoading = false;

  form!: FormGroup;
  showPassword = false;
  errorMessage = '';

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onTogglePasswordView() {
   this.showPassword = !this.showPassword 
  }

  onSubmit() {
    this.errorMessage = ''
    this.isLoading = true;
    const login: Login = {
      username: this.form.value.username,
      password: this.form.value.password,
    }
    this.authService.authenticate(login).subscribe({
      next: (data: DataResponse) => {
        if(data.access_token) {
          localStorage.setItem('access_token', data.access_token);
          this.router.navigate(['payment/list']);
        }
        this.isLoading = false; 
      }, 
      error: (err) => {
        this.errorMessage = 'Não foi possível efetuar o login'; 
        this.isLoading = false;
      }
    });
  }
}

