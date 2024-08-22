import {Injectable} from '@nestjs/common';

@Injectable()
export class CoursesService {
	private courses = [
		{
			id: 1,
			title: 'course one',
		},
		{
			id: 2,
			title: 'course two',
		},
	];

	getCourses() {
		return this.courses;
	}
}
