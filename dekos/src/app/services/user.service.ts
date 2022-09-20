import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { User } from '../models/User.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient:HttpClient) {}

  saveUserToStorage(user: User) {
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  get loggedUser() {
    const loggedUser = localStorage.getItem('loggedUser');
    return loggedUser ? JSON.parse(loggedUser) : ({} as User);
  }

  logoutUser() {
    localStorage.clear()
    location.reload();
  }

  getAllUsers() {
    const api = environment.serverUrl + '/user/all'
    return this.httpClient.get<User[]>(api)
  }

}
