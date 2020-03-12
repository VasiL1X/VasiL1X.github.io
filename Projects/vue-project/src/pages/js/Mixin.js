export default {
	data () {
		return {
			counters: [5, 10, 15],
			selected: 10,
			range: [],
			searchValue: '',
			isModalVisible: false,
			isChangeWindowVisible: false,
			index: 0
		}
	},
	methods: {
		changeItem() {
			this.isChangeWindowVisible = false;
			localStorage.setItem(this.pageTitle, JSON.stringify(this.listOfItems));
		},

		deleteItem(i) {
			this.listOfItems.splice(i + this.range[0], 1);
			localStorage.setItem(this.pageTitle, JSON.stringify(this.listOfItems));
		}, 

		sortItems(value) {
			this.listOfItems.sort( function(a, b) {
				var nameA = a[value].toLowerCase(), nameB = b[value].toLowerCase();

				if (nameA < nameB) 
				  return -1
				if (nameA > nameB)
				  return 1
				return 0
				});
		}, 
		showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
       this.isModalVisible = false;
    },
    showChangeWindow(index) {
    	this.index = index + this.range[0];
    	this.isChangeWindowVisible = true;
    }
	},
	computed: {
		filteredItems() {
			return this.listOfItems.filter(obj => {
				for (let elem in obj) {
					if (obj[elem].toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1) return true;
				}
			})
		},
		paginatedData() {
    	return this.filteredItems.slice(this.range[0], this.range[1]);
		}
	},
	created () {
		if (localStorage.getItem(this.pageTitle)) {
			this.listOfItems = JSON.parse(localStorage.getItem(this.pageTitle));
		};
	}
}