
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ResultComponent } from '../Component/result/result.component';
import { DisplayComponent } from '../Component/display/display.component';
import { LeaderbordComponent } from '../Component/leaderbord/leaderbord.component';
import { RoundpickComponent } from '../Component/roundpick/roundpick.component';


const appRoutes: Routes =[

  { path: 'display', component: DisplayComponent},
  { path: 'leaderbord', component: LeaderbordComponent},
  { path: 'result', component: ResultComponent},
  { path: 'roundpicker', component: RoundpickComponent},
  { path: '', redirectTo: '/display', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
