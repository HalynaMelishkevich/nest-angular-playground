import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { CoursesComponent } from "./courses/courses.component";
import { RouterOutlet } from '@angular/router';
import {NgIf} from "@angular/common";
import {UnderConstructionToastComponent} from "./under-construction-toast/under-construction-toast.component";

@Component({
  selector: 'app-root',
  standalone: true,
	imports: [RouterOutlet, CoursesComponent, NavigationComponent, NgIf, UnderConstructionToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showUnderConstructionToast = false;

  onToastShown() {
    this.showUnderConstructionToast = true;
  }

  onToastHidden() {
    this.showUnderConstructionToast = false;
  }
}
