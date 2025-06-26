import { AfterContentInit, AfterViewInit, Component, ContentChild, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { COURSES } from './db-data';
import { Course } from './model/course';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent, HighlightedDirective, CommonModule],
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

  courses$!: Observable<Course[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.coursesService);

    this.courses$ = this.coursesService.loadCourses();
    console.log(this.courses$);

  }

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

  onToggle(ishighlighted: boolean) {
    console.log(ishighlighted);
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log("Course saved ...")
      );
  }

}
