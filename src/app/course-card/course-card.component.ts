import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CoursesModel } from 'src/db-data';
import { CourseViewModel } from '../model/course';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  courseInput: CourseViewModel;
  @Input()
  cardindex: number;
  @Output()
  courseSelected = new EventEmitter<CourseViewModel>();
  constructor() { }

  ngOnInit() {
  }
  onCourseViewed() {
    console.log('couse clicked');
    this.courseSelected.emit(this.courseInput);
  }
  isImageVisible() {
    return this.courseInput && this.courseInput.iconUrl;
  }
}
