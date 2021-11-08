import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }

  saveUser(user:User)
  {
    return this.http.post("http://localhost:8080/user/save",user);
  }


  loginUser(login_credentials:any)
  {
    return this.http.post("http://localhost:8080/user/login",login_credentials);
  }
  welcomePage(token:any)
  {
    return this.http.get("http://localhost:8080/welcome",{headers:{"Authorization":token}})
  }

  accessBooks(token:any)
  {
    return this.http.get("http://localhost:8080/books",{headers:{"Authorization":token}})
  }

}