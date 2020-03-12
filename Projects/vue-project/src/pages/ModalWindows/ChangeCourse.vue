<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal px-4 rounded justify-content-center">
        <form class="form-inline justify-content-around">
          <div class="form-group">
            <label for="inputTitle" >Name</label>
            <input 
              type="text" 
              class="form-control ml-1"
              :class="{'is-invalid': $v.course['title'].$error}"
              @blur="$v.course['title'].$touch()"  
              id="inputTitle" 
              v-model="course['title']"              
              >
          </div>
          <div class="form-group">
            <label for="inputCode">Code</label>
            <input 
              type="text" 
              class="form-control ml-1"
              :class="{'is-invalid': $v.course['code'].$error}"
              @blur="$v.course['code'].$touch()" 
              id="inputCode" 
              v-model="course['code']"
              >
          </div>

          <button 
            type="button" 
            class="btn btn-success" 
            @click="changeCurrentCourse"
            :disabled="$v.$invalid"
            >
             Change
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { isSpacesValidator } from './validator';

export default {
	props: {
		course: Object
	},
  validations: {
    course: {
      title: { required },
      code: { required }
    }
  },
  methods: {
    changeCurrentCourse() {
        this.$emit('changeCurrentCourse');
    }
  }
};
</script>

<style scoped>
@import 'modalCss.css';
  .modal {
    width:  80%;
    height: 8%;
    left: 10%;
    top: 10%;
  }

</style>