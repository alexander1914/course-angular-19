import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-image',
  imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent {

  @Input('scr')
  imageUrl!: string;

  constructor() { }

}
