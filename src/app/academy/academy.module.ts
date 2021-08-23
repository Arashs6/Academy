import { CourseCategoryComponent } from './course-categories/course-category/course-category.component';
import { RouterModule } from '@angular/router';
import { CourseCategoryListComponent } from './course-categories/course-category-list/course-category-list.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ACADEMY_ROUTES } from './course-categories/academy.routes';
import { CrouseCategoryService } from './course-categories/shared/course-category.service';
import {HttpClientModule} from '@angular/common/http'
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseCategoryListComponent,
    CourseCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ACADEMY_ROUTES),
    TreeViewModule,
    HttpClientModule,
    ButtonsModule,
    DialogsModule,
    FormsModule
  ],
  exports:[],
  providers : [CrouseCategoryService],
  entryComponents: [CourseCategoryComponent]
})
export class AcademyModule { }
