import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TextAnalyzerComponent} from "./text-analyzer/text-analyzer.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./error-handling/not-found/not-found.component";
import {TypoAnalyzerComponent} from "./typo-analyzer/typo-analyzer.component";

// redirects to home if nothing comes after the slash
// redirects to error page NotFound 404 if a wrong path is used
export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'text-analyzer', component: TextAnalyzerComponent},
  {path: 'typo-analyzer', component: TypoAnalyzerComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
