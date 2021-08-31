import { observable, Observable } from 'rxjs';

import { DataStateChangeEvent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

import { Component, OnInit } from '@angular/core';


import { CourseService } from './shared/course.service';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  
})
export class CourseListComponent implements OnInit 
{
  public data: Observable<GridDataResult>  ;
  
  public state : State ={
  
    skip: 0,
    take: 5,
    }
  
  constructor(private service : CourseService){  }
 
  ngOnInit(): void {
        
        this.data = this.service;
        this.service.query(this.state)
  }
  
  public gridStateChanged(state: DataStateChangeEvent): void {
    this.state = state
    this.service.query(this.state);
  }

}