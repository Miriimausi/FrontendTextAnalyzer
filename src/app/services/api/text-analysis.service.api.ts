import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  analyzeText(text: string, analysisType: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/analyze`, { text, analysisType });
  }
}
