import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { FullHeaderComponent } from "./full-header/full-header.component";

@NgModule({
  declarations: [ButtonComponent, FullHeaderComponent],
  imports: [CommonModule],
  exports: [FullHeaderComponent],
})
export class HeaderModule {}
