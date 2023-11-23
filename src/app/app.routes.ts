import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TextAnalyzerComponent} from "./text-analyzer/text-analyzer.component";

export const routes: Routes = [
  {path: '', redirectTo: '/text-analyzer', pathMatch: 'full'},
  {path: 'text-analyzer', component: TextAnalyzerComponent},
 // { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
