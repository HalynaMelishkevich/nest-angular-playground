import {Injectable} from '@nestjs/common';
import {courses, FullCourseInfo, LimitedCourseInfo} from './data';

@Injectable()
export class CoursesService {
	private courses = courses || [];

	findAll(): LimitedCourseInfo[] {
		return this.courses
			.map(({
							id,
							title,
							info,
							imageUrl
						}) => ({id, title, info, imageUrl}));
	}

	findOne(id: string): FullCourseInfo {
		return this.courses.find(course => String(course.id) === String(id));
	}
}
