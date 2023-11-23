import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TextAnalyzerComponent} from "./text-analyzer/text-analyzer.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./error-handling/not-found/not-found.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'text-analyzer', component: TextAnalyzerComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
