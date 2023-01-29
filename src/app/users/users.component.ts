import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users2:any[]=[];
  constructor(private usersService:UsersService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.usersService.getAllUsers().subscribe((data:any)=>{
    //   this.users2=data;
    // });
    this.users2 =this.activatedRoute.snapshot.data['data'];
  }

}
