import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LmSeiteComponent } from './lm-seite/lm-seite.component';
import { CmSeiteComponent } from './cm-seite/cm-seite.component';
import { EmSeiteComponent } from './em-seite/em-seite.component';
import { LmListmodeComponent } from './lm-listmode/lm-listmode.component';
import { LmSinglemodeComponent } from './lm-singlemode/lm-singlemode.component';
import { EmSinglemodeComponent } from './em-singlemode/em-singlemode.component';
import { EmErgebnisseComponent } from './em-ergebnisse/em-ergebnisse.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  }, 

  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'lm-seite',
    component:LmSeiteComponent,
  },
  {
    path:'cm-seite',
    component: CmSeiteComponent,
  },
  {
    path:'em-seite',
    component:EmSeiteComponent,
  },
  {
    path:'em-singlemode',
    component:EmSinglemodeComponent,
  },

  {
    path:'em-ergebnisse',
    component:EmErgebnisseComponent,
  },

  {
    path:'lm-listmode',
    component:LmListmodeComponent,
  },
  {
    path:'lm-singlemode',
    component:LmSinglemodeComponent,
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
