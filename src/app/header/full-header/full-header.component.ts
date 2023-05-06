import { Component, Output, OnInit } from "@angular/core";
import { ContentManagementService } from "src/app/shared/content-management.service";

@Component({
  selector: "app-full-header",
  templateUrl: "./full-header.component.html",
  styleUrls: ["./full-header.component.scss"],
})
export class FullHeaderComponent implements OnInit {
  @Output() componentToShow:
    | "home"
    | "get-repos"
    | "guard"
    | "login"
    | "signout" = "home";

  @Output() userSignedIn = false;
  @Output() contentSelected: string;

  constructor(private _contentManager: ContentManagementService) {
    this._contentManager.ScreenState.subscribe((c) => {
      this.componentToShow = c;
    });
  }

  ngOnInit(): void {
    console.log("INIT FULL HEADER");
  }

  @Output() onClickHome = () => this._contentManager.ScreenState.next("home");

  @Output() onClickMyRepos = () =>
    this._contentManager.ScreenState.next("get-repos");

  @Output() onClickGuard = () => this._contentManager.ScreenState.next("guard");

  @Output() onClickLogin = () => this._contentManager.ScreenState.next("login");
}
