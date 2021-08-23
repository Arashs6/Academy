import { CourseCategoryComponent } from './../course-category/course-category.component';
import { DialogService } from '@progress/kendo-angular-dialog';
import { CourseCategory } from './../shared/course-category.model';
import { CrouseCategoryService as CourseCategoryService } from './../shared/course-category.service';
import { Component, OnInit } from "@angular/core";
import { OK } from '../../shared/dialogresults.constants';


@Component({
    selector:'course-category-list',
    templateUrl:'./course-category-list.component.html'
})
export class CourseCategoryListComponent implements OnInit{
    constructor(private service : CourseCategoryService,
       private dialogService : DialogService)   {}
    
    
    delete(item : CourseCategory):void{
       this.service.delete(item.id).subscribe(a=>{
           this.loadTree();
       })
    }

    edit(item : CourseCategory):void{
        alert(`edit ${item.id}`)
       
    }
    addRoot():void{
        const  dialogRef = this.dialogService.open({
            title: "Please confirm",
            content: CourseCategoryComponent});

            dialogRef.result.subscribe(result=>{
                if(result == OK){
                    this.loadTree();
                }
            })
    }
       
   courseCategories: Array<CourseCategory> = []; 
   
   ngOnInit(): void {
       this.loadTree();
    }
    
    private loadTree() {
        this.service.getAll().subscribe(a => {
            this.courseCategories = a;
        });
    }
}