import {Component, inject} from '@angular/core';
import {CoursesService} from "./courses.service";
import {NgFor, CommonModule} from "@angular/common";
import {Course} from "./courses.model";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {
  courses: Course[] = [];
  coursesService: CoursesService = inject(CoursesService);

  constructor() {
    this.coursesService.getCourses().then((courses: Course[]) => {
      this.courses = courses;
    })
  }
}
