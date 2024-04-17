import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { UserListComponent } from './container/user-list/user-list.component';
import { UserCardComponent } from './container/user-list/user-card/user-card.component';
import { FilterComponent } from './container/user-list/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HooksComponent } from './hooks/hooks.component';
import { TesthookComponent } from './hooks/testhook/testhook.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    UserListComponent,
    UserCardComponent,
    FilterComponent,
    HooksComponent,
    TesthookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
