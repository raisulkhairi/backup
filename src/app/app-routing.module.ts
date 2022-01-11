import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GradeComponent } from './grade/grade.component';
import { ProfilComponent } from './profil/profil.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'profil'
  },
  {
    path:'profil',
    component:ProfilComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'subject',
    component:SubjectComponent
  },
  {
    path:'grade',
    component:GradeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
