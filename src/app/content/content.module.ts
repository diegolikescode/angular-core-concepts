import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyReposComponent } from './my-repos/my-repos.component';
import { GuardSigninComponent } from './guard-signin/guard-signin.component';



@NgModule({
  declarations: [HomeComponent, MyReposComponent, GuardSigninComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
