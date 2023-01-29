import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AgePipe } from './pipes/age.pipe';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { UnSavedChangesGuard } from './guards/un-saved-changes.guard';
import { ResolveGuard } from './guards/resolve.guard';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ChildComponent,
    AgePipe,
    AboutComponent,
    UsersComponent,
    ContactComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    LocationComponent,
    FeedbackComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService,AuthGuard,AdminGuard,UnSavedChangesGuard,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
