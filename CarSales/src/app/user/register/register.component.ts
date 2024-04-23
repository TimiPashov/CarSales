import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  form = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\.-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/),
      ],
    ],
  });

  register(): void {
    if (this.form.invalid) {
      return;
    }
    const { username, email, password } = this.form.value;
    this.userService.register(username!, email!, password!).subscribe();
    this.form.reset();
  }
}
