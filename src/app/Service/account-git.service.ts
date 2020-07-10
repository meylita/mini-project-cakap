import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountGitService {
  url = "https://api.github.com/users"
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url)
  }

  search(username) {
    const url = this.url + '/' + username;    
    return this.http.get(url)
  }

  repositoryUser(username) {
    const url = this.url + '/' + username + '/repos';    
    console.log(url, 'url');
    
    return this.http.get(url)
  }

}
