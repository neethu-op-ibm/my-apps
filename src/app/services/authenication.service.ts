import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem("currentUser") as string;
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(currentUser)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    // mocked api response
    let response = {};
    if (username === 'test' && password === 'test') {
      response = { status: 200 };
    } else {
      response = { status: 401 };
    }
    return of(response)
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next({});
  }
}
