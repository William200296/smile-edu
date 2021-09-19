import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialAngularModule } from '../shared/material/material-angular.module';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    ModulesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialAngularModule,
    ComponentsModule
  ]
})
export class ModulesModule { }
