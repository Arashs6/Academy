import { CrouseCategoryService } from './../shared/course-category.service';
import { Component } from "@angular/core";
import { DialogRef } from "@progress/kendo-angular-dialog";
import { CourseCategory } from "../shared/course-category.model";
import { OK } from '../../shared/dialogresults.constants';


@Component({
    selector:'course-category',
    templateUrl:'./course-category.component.html'
})
export class CourseCategoryComponent {

    public model : CourseCategory
    constructor( private dialog : DialogRef,
        private service : CrouseCategoryService){
        
            this.model = new CourseCategory()
    }

    save():void{
        this.service.save(this.model).subscribe(a=>{
            this.dialog.close(OK);
        })
    }
   
}