import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Angular Fundamentals 19v';

  onLogoClick() {
    alert('Welcome new version angualar 19v')
  }

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }
}
