import { Component } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { Course } from './course.model';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  
})
export class CourseListComponent {
  public data : Array<Course>;
  public state : State ={
    skip:0,
    take:5   
  }
  constructor(){
    this.data = new Array<Course>();
    this.data.push(new Course("1","Web"))
    this.data.push(new Course("2","Mobile"))
  }
}
