import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesManagementService {

  constructor(private http: HttpClient) { }

  getStories() {
    return this.http.get("assets/mockData.json");
  }
}
