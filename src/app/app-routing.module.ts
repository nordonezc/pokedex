import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './core/welcome/welcome.component';


const routes: Routes = [
  { path: "", redirectTo: "/page/1", pathMatch: 'full'
},
  { path: "page/:id", component: WelcomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
