import { Component, ContentChild, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: 'app-course-card',
  imports: [CourseImageComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  index!: number;

  @Input({
    required: true
  })
  course!: Course;

  @Input()
  cardIndex!: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked...");

    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    return {
      'beginner': this.course.category == 'BEGINNER'
    };
  }

  titleStyle() {
    return {
      'text- decoration': 'underline',
    };
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description })
  }

}
