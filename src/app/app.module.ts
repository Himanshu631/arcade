import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { UserListComponent } from './container/user-list/user-list.component';
import { UserCardComponent } from './container/user-list/user-card/user-card.component';
import { FilterComponent } from './container/user-list/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './container/signup-form/signup-form.component';
import { LoginBoxComponent } from './container/login-box/login-box/login-box.component';
import { ChatsHomeComponent } from './container/chats-home/chats-home.component';
import { ProfileHomeComponent } from './container/profile-home/profile-home.component';
import { MerchHomeComponent } from './container/merch-home/merch-home.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chats', component: ChatsHomeComponent },
  { path: 'profile', component: ProfileHomeComponent },
  { path: 'merchandise', component: MerchHomeComponent},
  { path: '**', component: ContainerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    UserListComponent,
    UserCardComponent,
    FilterComponent,
    FooterComponent,
    LoginComponent,
    SignupFormComponent,
    LoginBoxComponent,
    ChatsHomeComponent,
    ProfileHomeComponent,
    MerchHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
