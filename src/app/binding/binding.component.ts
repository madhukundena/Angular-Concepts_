import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
title:string = "this is Title";
imageUrl:string ='assets/images/header.png';
flag: boolean = false;
isUserLoggedIn: boolean= false;
username:string = "ramu";
  users1:string[] = ["John","Peter","Omed"];
  users2:any[]=[];
  constructor(private usersService:UsersService) {
   }

  ngOnInit(): void {
    // this.users2 = this.usersService.getAllUsers();
      this.usersService.getAllUsers().subscribe((data:any)=>{
        this.users2=data;
      });
  }
  changeTitle(){
    // this.titie=title;
    this.title= "new Title";
  }
}
