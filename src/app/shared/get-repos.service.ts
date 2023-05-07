import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetReposService {
  constructor(private http: HttpClient) {}

  getMyReposRequest = (): Observable<any> => {
    return this.http
      .get<Array<object>>("https://api.github.com/users/diegolikescode/repos")
      .pipe(
        map(function (res) {
          return res || {};
        })
      );
  };
}
