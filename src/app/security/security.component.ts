import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private jwtService:JwtClientService) { }

  token:any;
  books:any
  ngOnInit(): void {
          this.userLogin({"username":"anci1010","password":"anci"})
  }


  userLogin(login_data:any)
  {
    this.jwtService.loginUser(login_data)
                   .subscribe(response=>
                    {
                      console.log(response)
                      this.token=response
                      console.log(this.token["token"])
                      this.accessAllBooks(this.token["token"])
                      
                    }
                    ,error=>
                    {
                      console.log(error)
                    })
                    
  }


  accessAllBooks(token:any)
  {
    this.jwtService.accessBooks(token)
    .subscribe(
    response=>{
      console.log(response)
      this.books=response
    }
    ,error=>console.log(error))
  }



}
