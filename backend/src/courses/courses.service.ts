import {Injectable} from '@nestjs/common';

@Injectable()
export class CoursesService {
	private courses = [
		{
			id: 1,
			title: 'Node.js for beginners',
			info: 'This course is designed for beginners in Node.js. It covers the basics of Node.js and how to build a simple web server.',
			price: 35,
			imageUrl: 'https://chennai.vit.ac.in/wp-content/uploads/2021/06/Cyber-Security-Certification-Course-Computer-Science-Certification-Courses.jpg',
		},
		{
			id: 2,
			title: 'UI/UX design for beginners',
			info: 'This course is designed for beginners in UI/UX design. It covers the basics of UI/UX design and how to create a simple website.',
			price: 35,
			imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjQX6BfrDxn62-zsygo7WyJcaVdmn8Lbjcw&s'
		},
	];

	getCourses() {
		return this.courses;
	}
}
