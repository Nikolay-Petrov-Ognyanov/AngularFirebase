import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IsLoggedOutGuard } from './guards/is-logged-out.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { IsAuthorGuard } from './guards/is-author.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [IsLoggedOutGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [IsLoggedOutGuard]
  },
  {
    path: "create",
    component: CreatePostComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: "user/:id",
    component: ProfileComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: "post/:id",
    component: PostDetailsComponent,
  },
  {
    path: "post/:id/update",
    component: UpdatePostComponent,
    canActivate: [IsAuthorGuard]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }