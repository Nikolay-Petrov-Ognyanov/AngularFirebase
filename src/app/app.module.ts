import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat"
import { AngularFirestoreModule } from "@angular/fire/compat/firestore"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FirebaseService } from './services/firebase.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostService } from './services/post.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthorService } from './services/author.service';
import { IsLoggedInService } from './services/is-logged-in.service';
import { IsLoggedOutService } from './services/is-logged-out.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CreatePostComponent,
    PostDetailsComponent,
    UpdatePostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDlrW5oNx7-YGL4BZm07sN5WmTtQQTLZDU",
      authDomain: "angularfirebase-9d5d5.firebaseapp.com",
      projectId: "angularfirebase-9d5d5",
      storageBucket: "angularfirebase-9d5d5.appspot.com",
      messagingSenderId: "275218571252",
      appId: "1:275218571252:web:04b5e4d760ac3faa68e3a1"
    }),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    FirebaseService,
    PostService,
    AuthorService,
    IsLoggedInService,
    IsLoggedOutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
