import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemotwoComponent } from './demotwo/demotwo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: DemoComponent},
  { path: 'login', component: LoginComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'demotwo', component: DemotwoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
