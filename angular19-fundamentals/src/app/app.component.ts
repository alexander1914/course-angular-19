import { AfterContentInit, AfterViewInit, Component, ContentChild, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { COURSES } from './db-data';
import { Course } from './model/course';
import { CourseImageComponent } from './course-image/course-image.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, AfterContentInit {

  title = 'Angular Fundamentals 19v';

  courses = [...COURSES];

  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2];

  startDate = new Date(2000, 0, 1);

  titleCard = COURSES[0].description;

  @ViewChild('cardRef')
  card!: CourseCardComponent;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<Course> | undefined;

  @ContentChild(CourseImageComponent)
  images!: QueryList<CourseImageComponent>;

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit" + this.card);
    console.log("ngAfterViewInit" + this.cards);
    console.log(this.cards?.changes.subscribe(
      cards => console.log(cards)

    ));
  }

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  onLogoClick() {
    alert('Welcome new version angualar 19v')
  }

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }

  onCourseSelected(course: Course) {
    console.log(this.card);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }

}
