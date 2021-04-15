import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudcompComponent } from './components/studcomp/studcomp.component';
import { DepartmentComponent } from './departmentcomps/department/department.component';
import { DepartmentAddComponent } from './departmentcomps/department-add/department-add.component';
import { DepartmentDeleteComponent } from './departmentcomps/department-delete/department-delete.component';
import { DepartmentEditComponent } from './departmentcomps/department-edit/department-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudcompComponent,
    DepartmentComponent,
    DepartmentAddComponent,
    DepartmentDeleteComponent,
    DepartmentEditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
