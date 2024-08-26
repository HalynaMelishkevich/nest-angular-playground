export interface Course {
	id: number;
	title: string;
	info: string;
	price: number;
	imageUrl: string;
}

export const courses: Course[] = [
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
	{
		id: 3,
		title: 'React.js for beginners',
		info: 'This course is designed for beginners in React.js. It covers the basics of React.js and how to build a simple web application.',
		price: 35,
		imageUrl: 'https://i.ytimg.com/vi/nTeuhbP7wdE/maxresdefault.jpg'
	},
	{
		id: 4,
		title: 'Angular for beginners',
		info: 'This course is designed for beginners in Angular. It covers the basics of Angular and how to build a simple web application.',
		price: 35,
		imageUrl: 'https://trisectinstitute.com/wp-content/uploads/2021/12/best-angular-training.png'
	},
	{
		id: 5,
		title: 'Vue.js for beginners',
		info: 'This course is designed for beginners in Vue.js. It covers the basics of Vue.js and how to build a simple web application.',
		price: 35,
		imageUrl: 'https://static-assets.codecademy.com/assets/course-landing-page/meta/16x9/learn-vue-js.jpg'
	},
	{
		id: 6,
		title: 'Svelte for beginners',
		info: 'This course is designed for beginners in Svelte. It covers the basics of Svelte and how to build a simple web application.',
		price: 35,
		imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*CNq4AlVmacJWUwpgvClFkA.png'
	}
];
