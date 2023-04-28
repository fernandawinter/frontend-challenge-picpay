import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Login } from './login';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface DataResponse {
  message: string,
  access_token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  isLoading = false;

  form!: FormGroup;
  show = false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.password = 'password';
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  // onTogglePasswordView() {
  //   if (this.password === 'password') {
  //     this.password = 'text';
  //     this.show = true;
  //   } else {
  //     this.password = 'password';
  //     this.show = false;
  //   }
  // }

  onSubmit() {
    this.isLoading = true;
    const login: Login = {
      username: this.form.value.username,
      password: this.form.value.password,
    }
    console.log('login', login);
    this.authService.authenticate(login).subscribe({
      next: (data: DataResponse) => { 
        console.log('data', data);
        if(data.access_token) {
          localStorage.setItem('access_token', data.access_token);
          this.router.navigate(['payment/list']);
        }
        this.isLoading = false; 
      }, error: (err) => {console.log(err)}
    });
  }
}

