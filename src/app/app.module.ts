import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api/api.service";


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent] // Make sure AppComponent is imported and declared
})
export class AppModule {
}
