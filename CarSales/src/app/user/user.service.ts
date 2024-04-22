import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    return this.http.post('http://localhost:3000/register', {
      username, password
    })
      .pipe(tap((user) => { console.log(user) }))
  }
}
