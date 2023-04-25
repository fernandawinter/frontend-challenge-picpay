import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Login } from './login';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  form!: FormGroup;
  show = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.password = 'password';
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  onTogglePasswordView() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  onSubmit() {
    const login: Login = {
      username: this.form.value.username,
      password: this.form.value.password,
    }
    console.log('login', login);
    this.authService.authenticate(login).subscribe((data: unknown) => {
      console.log('data', data);
    })
    console.log('fim submit') ; 
  }
}
  function onTogglePasswordView() {
    throw new Error('Function not implemented.');
  }

