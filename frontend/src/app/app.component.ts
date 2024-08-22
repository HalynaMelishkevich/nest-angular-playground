import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { CoursesComponent } from "./courses/courses.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helloWorld';
}
