import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {
  currentUserSubject: BehaviorSubject<any>;

  constructor() {
    const currentUser = sessionStorage.getItem("currentUser") as string;
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(currentUser)
    );
  }

  login(username: string, password: string) {
    let response;
    if (username === 'test' && password === 'test') {
      response = { status: 200 };
      const user = {
        id: 1,
        username: 'test',
        password: 'test',
        firstName: 'test',
        lastName: 'test'
      }
      this.currentUserSubject.next(user);
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      response = { status: 401 };
    }
    return of(response)
  }

  logout() {
    sessionStorage.removeItem("currentUser");
    this.currentUserSubject.next(undefined);
  }

  getAuthStatus() {
    const currentUser = sessionStorage.getItem("currentUser") as string;
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(currentUser)
    );
    if (this.currentUserSubject.value && this.currentUserSubject.value.id) {
      return true;
    } else {
      return false;
    }
  }
}
