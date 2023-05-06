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
    | "need-signin"
    | "signin"
    | "signout" = "home";

  @Output() clickedButton: string; // exportado pelo header ou pelo pai de todos?
  @Output() onClickEvent = function () {
    // this.componentToShow
  };

  @Output() onClickHome = function () {
    this.componentToShow = "home";
  };
}
