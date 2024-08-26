import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url = `${environment.apiUrl}/courses`;

  async getCourses(): Promise<any> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCourse(id: number): Promise<any> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
