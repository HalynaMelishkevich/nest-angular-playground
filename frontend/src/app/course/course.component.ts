import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../courses/courses.model";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  @Input({required: true}) course: Course | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() showToast = new EventEmitter<boolean>();

  closeModal() {
    this.close.emit();
  }

  onToastShown() {
    this.showToast.emit(true);
    this.closeModal();
  }
}
