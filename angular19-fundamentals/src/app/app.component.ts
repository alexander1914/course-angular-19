import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { COURSES } from './db-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Angular Fundamentals 19v';

  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2];

  onLogoClick() {
    alert('Welcome new version angualar 19v')
  }

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }
}
