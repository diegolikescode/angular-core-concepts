import { Component, Input, OnInit } from "@angular/core";
import { ContentManagementService } from "src/app/shared/content-management.service";

@Component({
  selector: "app-controller",
  templateUrl: "./controller.component.html",
  styleUrls: ["./controller.component.scss"],
})
export class ControllerComponent implements OnInit {
  @Input() componentToShow:
    | "home"
    | "get-repos"
    | "guard"
    | "login"
    | "signout" = "home";

  constructor(private _contentManager: ContentManagementService) {
    this._contentManager.ScreenState.subscribe((c) => {
      this.componentToShow = c;
    });
  }

  ngOnInit() {
    console.log("INIT CONTENT CONTROLLER");
  }
}
