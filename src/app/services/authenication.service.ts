import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    const currentUser = sessionStorage.getItem("currentUser") as string;
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(currentUser)
    );
  }

  get currentUserSub(): BehaviorSubject<User> {
    return this.currentUserSubject;
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
    if (this.currentUserSubject.value && this.currentUserSubject.value.id) {
      return true;
    } else {
      return false;
    }
  }
}
