import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string) {
    return this.http
      .post('http://localhost:3000/auth/register', {
        username,
        email,
        password,
      })
      .pipe(
        tap((data) => {
          console.log(data);
        })
      );
  }

  login(username: string, password: string) {
    return this.http
      .post('http://localhost:3000/auth/login', {
        username,
        password,
      })
      
  }

  logout() {
    return this.http.get('http://localhost:3000/auth/logout')
  }
}
