import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';

@Injectable()
export class CourseService extends BehaviorSubject<GridDataResult>{
  
    private url = "https://localhost:5050/api/Course";
    
    constructor(private http: HttpClient,grid:GridDataResult){

      super(grid)
    }

    public query(state : State) 
    {
      
          var curl = `${this.url}?pageSize=${state.take}&skip=${state.skip}`;
          this.http.get<GridDataResult>(curl).subscribe(a=> this.next(a));
    }
  }