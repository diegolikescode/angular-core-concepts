import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

type screenOptions = "home" | "get-repos" | "guard" | "login" | "signout";

@Injectable({
  providedIn: "root",
})
export class ContentManagementService {
  ScreenState: BehaviorSubject<screenOptions> =
    new BehaviorSubject<screenOptions>("home");

  constructor() {}
}
