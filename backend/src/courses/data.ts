export interface LimitedCourseInfo {
	id: number;
	title: string;
	info: string;
	imageUrl: string;
}

export interface FullCourseInfo extends LimitedCourseInfo {
	price: number;
	extendedInfo?: string;
}

export const courses: FullCourseInfo[] = [
	{
		id: 1,
		title: 'Node.js for beginners',
		info: 'This course is designed for beginners in Node.js. It covers the basics of Node.js and how to build a simple web server.',
		extendedInfo: 'This course is designed for beginners in Node.js. It covers the basics of Node.js and how to build a simple web server. The course includes hands-on exercises and projects to help you learn the concepts and apply them in real-world scenarios. By the end of the course, you will have a solid understanding of Node.js and be able to build your own web applications. The course is suitable for beginners with no prior experience in Node.js or web development. It is also suitable for experienced developers who want to learn Node.js and enhance their skills. The course covers the following topics: Introduction to Node.js, Setting up a Node.js development environment, Building a simple web server with Node.js, Handling HTTP requests and responses, Working with files and directories, Building a RESTful API with Node.js, Using third-party modules with Node.js, Deploying a Node.js application to a server, and more.',
		price: 35,
		imageUrl: 'https://chennai.vit.ac.in/wp-content/uploads/2021/06/Cyber-Security-Certification-Course-Computer-Science-Certification-Courses.jpg',
	},
	{
		id: 2,
		title: 'UI/UX design for beginners',
		info: 'This course is designed for beginners in UI/UX design. It covers the basics of UI/UX design and how to create a simple website.',
		extendedInfo: 'This course is designed for beginners in UI/UX design. It covers the basics of UI/UX design and how to create a simple website. The course includes hands-on exercises and projects to help you learn the concepts and apply them in real-world scenarios. By the end of the course, you will have a solid understanding of UI/UX design and be able to create your own websites. The course is suitable for beginners with no prior experience in UI/UX design or web development. It is also suitable for experienced designers who want to learn UI/UX design and enhance their skills. The course covers the following topics: Introduction to UI/UX design, Design principles and guidelines, Wireframing and prototyping, User research and testing, Visual design and branding, Responsive design and mobile-first approach, Design tools and software, and more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
		price: 35,
		imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjQX6BfrDxn62-zsygo7WyJcaVdmn8Lbjcw&s'
	},
	{
		id: 3,
		title: 'React.js for beginners',
		info: 'This course is designed for beginners in React.js. It covers the basics of React.js and how to build a simple web application.',
		extendedInfo: 'This course is designed for beginners in React.js. It covers the basics of React.js and how to build a simple web application. The course includes hands-on exercises and projects to help you learn the concepts and apply them in real-world scenarios. By the end of the course, you will have a solid understanding of React.js and be able to build your own web applications. The course is suitable for beginners with no prior experience in React.js or web development. It is also suitable for experienced developers who want to learn React.js and enhance their skills. The course covers the following topics: Introduction to React.js, Setting up a React.js development environment, Building a simple web application with React.js, Working with components and props, Managing state and events, Using hooks and context API, Routing and navigation, Styling with CSS and CSS-in-JS, and more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
		price: 35,
		imageUrl: 'https://i.ytimg.com/vi/nTeuhbP7wdE/maxresdefault.jpg'
	},
	{
		id: 4,
		title: 'Angular for beginners',
		info: 'This course is designed for beginners in Angular. It covers the basics of Angular and how to build a simple web application.',
		extendedInfo: 'This course is designed for beginners in Angular. It covers the basics of Angular and how to build a simple web application. The course includes hands-on exercises and projects to help you learn the concepts and apply them in real-world scenarios. By the end of the course, you will have a solid understanding of Angular and be able to build your own web applications. The course is suitable for beginners with no prior experience in Angular or web development. It is also suitable for experienced developers who want to learn Angular and enhance their skills. The course covers the following topics: Introduction to Angular, Setting up an Angular development environment, Building a simple web application with Angular, Working with components and services, Managing state and events, Using pipes and directives, Routing and navigation, Styling with CSS and SCSS, and more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
		price: 35,
		imageUrl: 'https://trisectinstitute.com/wp-content/uploads/2021/12/best-angular-training.png'
	},
	{
		id: 5,
		title: 'Vue.js for beginners',
		info: 'This course is designed for beginners in Vue.js. It covers the basics of Vue.js and how to build a simple web application.',
		extendedInfo: 'This course is designed for beginners in Vue.js. It covers the basics of Vue.js and how to build a simple web application. The course includes hands-on exercises and projects to help you learn the concepts and apply them in real-world scenarios. By the end of the course, you will have a solid understanding of Vue.js and be able to build your own web applications. The course is suitable for beginners with no prior experience in Vue.js or web development. It is also suitable for experienced developers who want to learn Vue.js and enhance their skills. The course covers the following topics: Introduction to Vue.js, Setting up a Vue.js development environment, Building a simple web application with Vue.js, Working with components and props, Managing state and events, Using directives and filters, Routing and navigation, Styling with CSS and SCSS, and more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
		price: 35,
		imageUrl: 'https://static-assets.codecademy.com/assets/course-landing-page/meta/16x9/learn-vue-js.jpg'
	},
	{
		id: 6,
		title: 'Svelte for beginners',
		info: 'This course is designed for beginners in Svelte. It covers the basics of Svelte and how to build a simple web application.',
		extendedInfo: 'This course is designed for beginners in Svelte. It covers the basics of Svelte and how to build a simple web application. The course includes hands-on exercises and projects to help you learn the concepts and apply them in real-world scenarios. By the end of the course, you will have a solid understanding of Svelte and be able to build your own web applications. The course is suitable for beginners with no prior experience in Svelte or web development. It is also suitable for experienced developers who want to learn Svelte and enhance their skills. The course covers the following topics: Introduction to Svelte, Setting up a Svelte development environment, Building a simple web application with Svelte, Working with components and props, Managing state and events, Using stores and transitions, Routing and navigation, Styling with CSS and SCSS, and more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
		price: 35,
		imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*CNq4AlVmacJWUwpgvClFkA.png'
	}
];
