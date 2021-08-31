import { CourseListComponent } from './../courses/course-list/course-list.component';
import { CourseCategoryListComponent } from './course-category-list/course-category-list.component';
import { Routes } from '@angular/router';

export const ACADEMY_ROUTES : Routes = [
    {path:'course-category-list',component:CourseCategoryListComponent}
    ,{path:'course-list', component:CourseListComponent}
]