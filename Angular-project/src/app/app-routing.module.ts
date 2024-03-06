import {  NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { AllCoursesComponent } from './modules/course/all-courses/all-courses.component';
import { AddCourseComponent } from './modules/course/add-course/add-course.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Route[] = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"logOut",component:LoginComponent},
  {path:"allCourses",component:AllCoursesComponent},
  {path:"addCourse",component:AddCourseComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home", pathMatch:"full"} ,
 // {path:"**",title:"pageNotFound 404"}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
