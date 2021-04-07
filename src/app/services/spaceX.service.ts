import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILaunch, ILaunchPad } from "../models/launch.model";
import { catchError } from "rxjs/operators";
import { BaseHttpService } from "./base-http-service";

@Injectable({providedIn: "root"})
export class SpaceXService extends BaseHttpService {

  private uri: string = "https://api.spacexdata.com/v4/";

  constructor(private http: HttpClient) {
    super();
  }

  public getLaunches(): Observable<ILaunch[]> {
    return this.http.get<ILaunch[]>(`${this.uri}launches`)
      .pipe(catchError(super.handleError));
  }

  public getLaunchPads(): Observable<ILaunchPad[]> {
    return this.http.get<ILaunchPad[]>(`${this.uri}launchpads`)
      .pipe(catchError(super.handleError));
  }
}
