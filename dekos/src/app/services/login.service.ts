import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.class';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  loginUser(user: User) {
    const api = environment.serverUrl + '/user/login';
    return this.httpClient.post<User>(api, user);
  }
}
