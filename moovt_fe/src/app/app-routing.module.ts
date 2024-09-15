import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component'; // Importa il componente desiderato

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rotta predefinita
  // { path: 'home', component: LoginComponent } // Rotta per LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
