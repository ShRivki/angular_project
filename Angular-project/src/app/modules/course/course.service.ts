import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseService {
    constructor(private _http:HttpClient){}
    getCursesFromServer():Observable<Course[]>{
        return this._http.get<Course[]>("/api/Courses") 
     }
     getCoursesFromSrverByNme(name:string):Observable<Course[]>{
        if (name == '')
            return this.getCursesFromServer()
        return this._http.get<Course[]>("api/Students/name=" + name)
    }
    getCurseFromServer( id:number):Observable<Course>{
        return this._http.get<Course>(`/api/Courses/${id}`) 
    }
    getCategoryFromServer( id:number):Observable<Course>{
        return this._http.get<Course>(`/api/Category/${id}`) 
    }

}