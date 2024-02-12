import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { SelComponent } from './components/sel/sel.component';
import { BonbonComponent } from './components/bonbon/bonbon.component';
import { CaramelComponent } from './components/caramel/caramel.component';
import { EauComponent } from './components/eau/eau.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SelComponent,
    ParentComponent,
    BonbonComponent,
    CaramelComponent,
    EauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
