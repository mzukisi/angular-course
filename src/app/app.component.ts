import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import {Course} from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coreCourse = COURSES[0];
rxjsCourse = COURSES[1];
ngrxCourse = COURSES[2];
  data = {
    title : 'angular core deep dive'
  };
  // onLogClicked()
  // {
  //   alert('hello world');
  // }
  // onKeyUp(newTittle:string){
  //   this.data.title=newTittle;
  // }
  onCourseSelected(course: Course) {
    console.log('card clicked', course);
  }
}
