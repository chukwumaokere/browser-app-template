import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemotwoComponent } from './demotwo/demotwo.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DemoComponent},
  { path: 'login', component: LoginComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'demotwo', component: DemotwoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
