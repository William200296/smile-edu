import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { MaterialAngularModule } from '../material/material-angular.module';
import { YearDetailComponent } from './year-detail/year-detail.component';
import { SearchDinamicComponent } from './search-dinamic/search-dinamic.component';
import { SelectDinamicComponent } from './select-dinamic/select-dinamic.component';
import { ButtonerComponent } from './buttoner/buttoner.component';
import { CardOutletComponent } from './card-outlet/card-outlet.component';
import { SideLeftComponent } from './card-outlet/side-left/side-left.component';
import { SideRightComponent } from './card-outlet/side-right/side-right.component';
import { StudentSelectedComponent } from './student-selected/student-selected.component';
import { ImageAvatarComponent } from './image-avatar/image-avatar.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { TableSchoolComponent } from './table-school/table-school.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    YearDetailComponent,
    SearchDinamicComponent,
    SelectDinamicComponent,
    ButtonerComponent,
    CardOutletComponent,
    SideLeftComponent,
    SideRightComponent,
    StudentSelectedComponent,
    ImageAvatarComponent,
    AccordionItemComponent,
    TableSchoolComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
  ],
  exports: [
    UserLoginComponent,
    YearDetailComponent,
    SearchDinamicComponent,
    SelectDinamicComponent,
    ButtonerComponent,
    CardOutletComponent,
    SideLeftComponent,
    SideRightComponent,
    StudentSelectedComponent,
    ImageAvatarComponent,
    AccordionItemComponent,
    TableSchoolComponent
  ]
})
export class ComponentsModule { }
