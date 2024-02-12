import { SelComponent } from './components/sel/sel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { apiGuard } from './guards/api.guard';
import { BonbonComponent } from './components/bonbon/bonbon.component';
import { EauComponent } from './components/eau/eau.component';
import { CaramelComponent } from './components/caramel/caramel.component';
import { ParentComponent } from './components/parent/parent.component';


const routes: Routes = [
  { path: '', component: ParentComponent, children: [
    { path: 'sel', component: SelComponent },
    { path: 'caramelAuSel', component: CaramelComponent, canActivate:[apiGuard] },
    { path: 'bonbon', component: BonbonComponent},
    { path: 'eau', component: EauComponent},
  ]},
  { path: '**', redirectTo: '/'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
