import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./content/home/home.component";
import { MyReposComponent } from "./content/my-repos/my-repos.component";
import { GuardSigninComponent } from "./content/guard-signin/guard-signin.component";
import { LoginComponent } from "./content/login/login.component";

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "my-repos", component: MyReposComponent },
  {
    path: "guard",
    component: GuardSigninComponent,
  },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
