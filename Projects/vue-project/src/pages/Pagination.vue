<template>
	<div class="row justify-content-center m-3">
		<button 
			class="btn btn-secondary btn-sm mr-1" 
			@click="prevPage"
			:disabled="pageNumber==0"
			>
		  Previous
		</button>
		<button 
			class="btn btn-secondary btn-sm mr-1" 
			@click="nextPage"
			:disabled="pageNumber >= pageCount -1"
			>
		  Next
		</button>
	</div>
</template>

<script>
export default {
	props: {
	  listLength:{
	    type:Number,
	    required:true
	  },
	  visibleSize:{
	    type:Number,
	    required:false,
	    default: 10
	  }
	},
	data() {
	  return {
	    pageNumber: 0  
	  }
	},
	methods: {
    nextPage() {
       this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
	},
	computed: {
		pageCount() {
	    let l = this.listLength,
	        s = this.visibleSize;

	    if (s*this.pageNumber >= l) {
				this.pageNumber = 0;
			}

	    const start = this.pageNumber * this.visibleSize,
	    		  end = start + this.visibleSize;
	    this.$emit('limit', [start, end]);
	    return Math.ceil(l/s);
		}
	}
};
</script>

<style scoped>
button {
	width: 80px;
}
</style>