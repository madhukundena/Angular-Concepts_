import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute, private usersService:UsersService ) { }
  u:any;
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    let id = this.route.snapshot.params['id'];
    this.usersService.getUser(id).subscribe(user =>{
      console.log(user);
      this.u = user;
    })
  }

}
