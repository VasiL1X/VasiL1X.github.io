import VueRouter from 'vue-router'
import Courses from './pages/Courses'
import Users from './pages/Users'


export default new VueRouter ({
	routes: [
		{
			path: '/Users',
			component: Users
		},
		{
			path: '/Courses',
			component: Courses
		},
		{
  	  path: '*',
  	  redirect: '/Users'
  	}
	],
	mode: 'history',
})