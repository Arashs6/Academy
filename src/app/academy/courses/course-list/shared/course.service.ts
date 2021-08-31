import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Injectable()
export class CourseService{
  
    private url = "https://localhost:5050/api/Course";
    constructor(private http: HttpClient){}

    public getAll(skip:number,take:number) :Observable<GridDataResult>  
    {
      
          var curl = `${this.url}?pageSize=${take}&skip=${skip}`;
          return  this.http.get<GridDataResult>(curl);
    }
  }