import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { COURSES } from './db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Angular Fundamentals 19v';

  courses = [...COURSES];

  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2];

  startDate = new Date(2000, 0, 1);

  titleCard = COURSES[0].description;

  onLogoClick() {
    alert('Welcome new version angualar 19v')
  }

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }

  onCourseSelected(course: Course) {
    console.log("App component - click event bubbled...", course);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
