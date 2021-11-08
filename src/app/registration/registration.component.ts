import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtClientService } from '../jwt-client.service';
import {User} from '../user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  msg2:any=''
  constructor(private jwtService:JwtClientService) {
   }

  ngOnInit(): void {}
  roles=['ADMIN','EMPLOYEE','STUDENT']
  user=new User('','','','','')
  
  handleForm(){
    
    this.jwtService.saveUser(this.user).subscribe(data=>
      {
        console.log(typeof(data))
        console.log(data)
        this.msg2=data
      this.user=new User('','','','','')
      },
     error=>console.log(error))

  }
  

}
