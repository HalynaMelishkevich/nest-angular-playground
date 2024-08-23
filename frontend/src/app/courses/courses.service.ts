import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url = 'http://localhost:3000/courses';

  async getCourses(): Promise<any> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
}
