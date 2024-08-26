import {Component, EventEmitter, inject, Output} from '@angular/core';
import {CoursesService} from "./courses.service";
import {NgFor, NgIf, CommonModule} from "@angular/common";
import {Course} from "./courses.model";
import {CourseComponent} from "../course/course.component";
import {UnderConstructionToastComponent} from "../under-construction-toast/under-construction-toast.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, CourseComponent, UnderConstructionToastComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {
  selectedCourse: Course | null = null;
  courses: Course[] = [];
  coursesService: CoursesService = inject(CoursesService);
  @Output() showToast = new EventEmitter<boolean>();
  @Output() hideToast = new EventEmitter<boolean>();

  constructor() {
    this.coursesService.getCourses().then((courses: Course[]) => {
      this.courses = courses;
    });
  }

  onLearnMoreClick(course: Course) {
    this.onToastHidden();
    this.coursesService.getCourse(course.id).then((course: Course) => {
      this.selectedCourse = course;
    })
  }

  onCourseDetailsClose() {
    this.selectedCourse = null;
  }

  onToastShown() {
    this.showToast.emit(true);
  }

  onToastHidden() {
    this.hideToast.emit(true);
  }
}
