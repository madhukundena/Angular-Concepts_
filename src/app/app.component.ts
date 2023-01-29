import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Angular</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  username = 'Jhon smith';
  childData:any;
  parentMethod(data:any){
    this.childData = data;
  }
}
