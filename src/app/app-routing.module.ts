import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddressComponent } from './address/address.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminGuard } from './guards/admin.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { UnSavedChangesGuard } from './guards/un-saved-changes.guard';
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  // { path:'', redirectTo:'users',pathMatch:'full'}, 
  { path:'home', component:AppComponent},
  { path:'binding', component:BindingComponent},
  { path:'users', component:UsersComponent,
  resolve:{
    data: ResolveGuard,
  }
  //canActivate: [AuthGuard]
},
  { path:'about', component:AboutComponent,
children:[
  {path:'location',outlet:'map' ,component:LocationComponent},
  {path:'feedback',outlet: 'feeds', component:FeedbackComponent}
]},
  { path:'contact', component:ContactComponent},
  { path:'user/:id', component:UserComponent,
  canActivate:[AuthGuard],
  canActivateChild:[AdminGuard],
  children : [
   // {path: '', redirectTo:'address',pathMatch:'full'},
    {path:'address',component: AddressComponent},
    {path:'company',component: CompanyComponent}
  ]},
  {path:'addUser',component:AddUserComponent,
  canDeactivate:[UnSavedChangesGuard]},
  { path:'**', redirectTo:'users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
