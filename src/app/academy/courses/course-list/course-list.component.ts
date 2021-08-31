
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

import { Component, OnInit } from '@angular/core';


import { CourseService } from './shared/course.service';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  
})
export class CourseListComponent implements OnInit 
{
  public data!: GridDataResult;
  public pageSize = 5;
  public skip = 0;
  constructor(private service : CourseService){  }
 
  ngOnInit(): void {
        
        this.reloadGrid();
  }
  
  public gridStateChanged(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.reloadGrid();
  }
  
  private reloadGrid(){
    this.service.getAll(this.skip, this.pageSize).subscribe(response => { this.data = response; });
  }


}
