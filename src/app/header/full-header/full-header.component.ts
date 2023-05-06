import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-full-header",
  templateUrl: "./full-header.component.html",
  styleUrls: ["./full-header.component.scss"],
})
export class FullHeaderComponent {
  @Input() componentToShow:
    | "home"
    | "get-repos"
    | "guard"
    | "login"
    | "signout" = "home";

  @Output() userSignedIn = false;
  @Output() contentSelected: string; // exportado pelo header ou pelo pai de todos? => event emiter!

  @Output() onClickHome = function () {
    this.componentToShow = "home";
    console.log(this.componentToShow);
  };

  @Output() onClickMyRepos = function () {
    this.componentToShow = "get-repos";
    console.log(this.componentToShow);
  };

  @Output() onClickGuard = function () {
    this.componentToShow = "guard";
    console.log(this.componentToShow);
  };

  @Output() onClickLogin = function () {
    this.componentToShow = "login";
    console.log(this.componentToShow);
  };
}
