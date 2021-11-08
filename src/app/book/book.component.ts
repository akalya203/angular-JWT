import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:any;
  token:any
 
  constructor(private route:ActivatedRoute,private jwtService:JwtClientService) { 
 
    this.route.paramMap.subscribe(params => {
     
       this.token = params.get('token');
      })
  
     this.jwtService.welcomePage(this.token)
   }
  
  showBooks()
  {
    this.jwtService.accessBooks(this.token)
    .subscribe(
    data=>{
      console.log(data)
      this.books=data
    }
    ,error=>console.log(error))
  }
  
  
  ngOnInit(): void {
  }
}


