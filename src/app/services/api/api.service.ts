import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"

})
export class ApiService {
  private apiUrl =  'http://localhost:8080';


  constructor(private http:HttpClient) {
  }

  getText(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/text`, { responseType: 'text' as 'json' });
  }
}
