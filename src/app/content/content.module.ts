import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { MyReposComponent } from "./my-repos/my-repos.component";
import { GuardSigninComponent } from "./guard-signin/guard-signin.component";
import { LoginComponent } from "./login/login.component";
import { ControllerComponent } from "./controller/controller.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    MyReposComponent,
    GuardSigninComponent,
    LoginComponent,
    ControllerComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ControllerComponent],
})
export class ContentModule {}
