import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPipe } from './utils/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
