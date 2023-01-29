import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  getAllUsers(){
    // return [
    //   {id:101,name:'jhon',city:'delhi',dob:new Date("05/10/1989")},
    //   {id:102,name:'ramu',city:'hyderabad',dob:new Date("05/10/1991")},
    // ];
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users')
    
  }
  getUser(id:any){
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users/'+id);
    
  }
}
