import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CourseCategory } from "./course-category.model";

@Injectable()
export class CrouseCategoryService{
  
  constructor(private httpModule : HttpClient) { }
  private url  = "https://localhost:5050/api/CourseCategory"

    public getAll() : Observable<Array<CourseCategory>> 
    {
     
      return  this.httpModule.get<Array<CourseCategory>>(this.url)
          }
         
    public delete(id : number): Observable<any>{
      
      var url  = this.url +id
      return this.httpModule.delete<CourseCategory>(url)
      
    }      
    public save(model : CourseCategory):Observable<any>{
      
      return this.httpModule.post(this.url,model)
    }
}