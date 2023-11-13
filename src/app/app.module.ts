import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api/api.service";
import {TextAnalysisApiService} from "./services/api/text-analysis.service.api";


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    HttpClientModule,
    ApiService,
    TextAnalysisApiService
  ],
  bootstrap: [AppComponent] // Make sure AppComponent is imported and declared
})
export class AppModule {
}
