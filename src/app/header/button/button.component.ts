import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() buttonName: string = "btn";
  @Output() @Input() onClickEvent = function () {
    console.log("onClickEvent");
  };

  constructor() {}
}
