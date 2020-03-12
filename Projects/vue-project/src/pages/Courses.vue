<template>
	<div class="bg-light py-4">
		<add-course
	    v-show="isModalVisible"
      @close="closeModal"	
      @addNewCourse="addItem"	
		/>
		<div class="row px-100 align-items-center ">
			<div class="col-12 col-md-4">
				<div class="row text-center text-md-left">
					<div class="col col-md-2 mb-md-0 mb-2">
						<button type="submit" class="add mr-5" @click="showModal"></button>
					</div>
					<div class="col col-md-10">
						<form class="d-inline-block">
		  				<input type="text" placeholder="Search..." v-model="searchValue" @keyup.enter.prevent>
		  				<button type="submit" class="search" disabled="true"></button>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-5 text-center">
				<h6 class="text-uppercase title font-weight-bold">COURSES</h6>
			</div>
			<div class="col col-md-3 text-center">
	  		<select v-model="selected" class="btn btn-select">
  				<option v-for="selected in counters" class="rounded-circle">{{selected}}</option>
				</select>
			</div>
		</div>
		<div class="fill-80-viewport bg-light px-100 mt-3">
			<div class="row bg-dark align-items-center rounded py-1">
				<div class="col-8">
					<h5 class="text-light mb-0 d-inline-block"> NAME </h5>
					<button class="fas fa-arrows-alt-v bg-none text-light"  @click="sortItems('title')"></button>
				</div>
				<div class="col-4">
					<h5 class="text-light mb-0 d-inline-block"> CODE </h5>
					<button class="fas fa-arrows-alt-v bg-none text-light"  @click="sortItems('code')"></button>
				</div>
			</div>
			<div class="row align-items-center bg-white mb-1 py-2" v-for="(value, i) of paginatedData">
				<div class="col-8">{{ value['title'] }}</div>
				<div class="col-2">{{ value['code'] }}</div>
				<div class="col-2 text-right">
					<button class="fas fa-edit mx-2 bg-none" @click="showChangeWindow(i)"></button>
					<button class="fas fa-trash-alt mx-2 bg-none" @click="deleteItem(i)"></button>
				</div>
			</div>
			<pag-bar
				:listLength="filteredItems.length"
				:visibleSize="+selected"
				@limit="range = $event"
			/>
		</div>
		<change-course
			v-show="isChangeWindowVisible"
	    @changeCurrentCourse="changeItem"
	    :course="listOfItems[index]"
		/>
	</div>
</template>
<script>
import ListMixin from './js/Mixin'
import ModalCourse from './ModalWindows/ModalCourse'
import ChangeCourse from './ModalWindows/ChangeCourse'

export default {
	data () {
		return {
			pageTitle: 'courses',
			listOfItems: [ 
				{	title: 'Python',
					code: 'P6542'
				},
				{	title: 'Kotlin',
					code: 'K1236'
				},
				{	title: 'JS',
					code: 'J5887'
				},
				{	title: 'HTML',
					code: 'H4654'
				},
				{	title: 'JAVA',
					code: 'J5476'
				},
				{	title: 'C++',
					code: 'C4758'
				},
				{	title: 'GO',
					code: 'G7477'
				},
				{	title: 'VueJS',
					code: 'V5648'
				},
				{	title: 'ReactJS',
					code: 'R1652'
				},
				{	title: 'WebDev',
					code: 'W5646'
				}
			]
		}
	},
	mixins: [ListMixin],
	components: {
		addCourse: ModalCourse,
		changeCourse: ChangeCourse
	},
	methods: {

		addItem(obj) {
			this.listOfItems.push({ title: obj[0], code: obj[1] });
			localStorage.setItem(this.pageTitle, JSON.stringify(this.listOfItems));
		}
	}
};
</script>

<style scoped src="./css/main.css">

</style>