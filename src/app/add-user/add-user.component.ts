import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../guards/un-saved-changes.guard';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, CanComponentLeave {
  userName:FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }
  canLeave(): boolean{
    if(this.userName.dirty)
    {
      return window.confirm('you have some unsaved changes Are you sure?');
    }
    return true;
  }

}
