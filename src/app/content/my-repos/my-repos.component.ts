import { Component, OnInit } from "@angular/core";
import { GetReposService } from "src/app/shared/get-repos.service";

@Component({
  selector: "app-my-repos",
  templateUrl: "./my-repos.component.html",
  styleUrls: ["./my-repos.component.scss"],
})
export class MyReposComponent implements OnInit {
  myRepos: Array<object>;

  constructor(private _getRepos: GetReposService) {
    console.log("_getRepos", _getRepos);
    this._getRepos
      .getMyReposRequest()
      .subscribe((reps) => (this.myRepos = reps));

    setTimeout(() => {
      console.log(this.myRepos);
    }, 1500);
  }

  ngOnInit() {}
}
