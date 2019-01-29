import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;
  @Output()
  courseSelected = new EventEmitter<Course>();
  constructor() { }

  ngOnInit() {
  }
  onCourseViewed() {
    debugger
    console.log('couse clicked');
    this.courseSelected.emit(this.course);
  }
}
