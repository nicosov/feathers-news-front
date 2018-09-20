import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule  } from '@angular/forms';
import { Feathers } from './services/feathers.service';
import {PostComponent} from "./components/post/post.component";
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [Feathers, AuthGuard, AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
