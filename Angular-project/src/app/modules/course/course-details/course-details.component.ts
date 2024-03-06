import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';
import { Category } from '../categoty.model';
import { Lecturer } from '../../user/lecturer.model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  course:Course;
  category:Category;
  lecturer:Lecturer;
  constructor(private  _courseService: CourseService,private _act:ActivatedRoute ,private _usrService:UserService){}
  ngOnInit(): void {
    this._act.paramMap.subscribe(p=>{
    if(p.has("id")){
    this._courseService.getCurseFromServer(+p.get("id")).subscribe(data => {
      this.course = data;
      if(this.course!=null)
      this._courseService.getCategoryFromServer(this.course.category).subscribe(d=>{this.category=d})
      this._usrService.getUserFromServer(this.course.codeLecturer).subscribe(d=>{
        if(d.lecturer==true)
          this.lecturer=d
         else
         this.lecturer=undefined
        }
       


      )

    })}
  })  
  }
}
