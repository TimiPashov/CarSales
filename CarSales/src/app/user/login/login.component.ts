import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }


  form = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });


  login(): void {
    if (this.form.invalid) {
      return;
    }
    const { username, password } = this.form.value;
    this.userService.login(username!, password!).subscribe();
    this.form.reset();
  }
}
