import {Injectable} from '@nestjs/common';
import {courses, Course} from './data';

@Injectable()
export class CoursesService {
	private courses = courses;

	getCourses(): Course[] {
		return this.courses;
	}
}
