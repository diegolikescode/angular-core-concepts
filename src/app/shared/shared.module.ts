import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentManagementService } from "./content-management.service";
import { GetReposService } from "./get-repos.service";
// import { HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ContentManagementService, GetReposService],
  exports: [],
})
export class SharedModule {}
