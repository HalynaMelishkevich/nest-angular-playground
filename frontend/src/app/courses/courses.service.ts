import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url = `${environment.apiUrl}/courses`;

  async getCourses(): Promise<any> {
    console.log('fetching courses', this.url)
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
}
