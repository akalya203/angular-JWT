import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:any;
  books:any;
  msg2:any
  accessAllBooks: any;
  welcomePage: any;

  constructor(private jwtService:JwtClientService,private router:Router) {  }

  ngOnInit(): void {
    
  }
  login=new Login('','')
  
  handleForm()
  {
    this.jwtService.loginUser(this.login)
                   .subscribe(data=>
                    {
                      console.log(data)
                      this.token=data
                      //console.log(this.token["token"])
                      this.router.navigate(['/book',this.token])
                      //this.welcomePage(data)
                    }
                    ,error=>
                    {
                      console.log(error)
                    })
                }
  

}
