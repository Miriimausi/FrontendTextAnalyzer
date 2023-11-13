import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"

})

export class TextAnalysisApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  analyzeText(text: string, analysisType: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/analyze`, {text, analysisType});
  }

  getText(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/text`, { responseType: 'text' as 'json' });
  }

}
