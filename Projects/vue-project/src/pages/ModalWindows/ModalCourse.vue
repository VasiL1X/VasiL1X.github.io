<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal p-4 justify-content-around">
        <div class="text-center">Enter a new course</div>
        <form>
          <div class="form-group">
            <label for="inputTitle" >Enter course title</label>
            <input 
              type="text" 
              class="form-control"
              :class="{'is-invalid': $v.courseTitle.$error}"
              @blur="$v.courseTitle.$touch()" 
              id="inputTitle" 
              placeholder="Course title"
              v-model="courseTitle"              
              >
              <div class="invalid-tooltip" v-if="$v.courseTitle.$error">
                This field is required 
              </div>
          </div>
          <div class="form-group">
            <label for="inputCourseCode">Enter course code</label>
            <input 
              type="text" 
              class="form-control"
              :class="{'is-invalid': $v.code.$error}"
              @blur="$v.code.$touch()"
              id="inputCourseCode" 
              placeholder="Course code"
              v-model="code"
              >
              <div class="invalid-tooltip" v-if="$v.code.$error">
                This field is required 
              </div>
          </div>
          <button type="button" class="btn btn-secondary" @click="close">
             Cancel
          </button>
          <button type="button" class="btn btn-success" @click="addNewCourse" :disabled="$v.$invalid">
            Add
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import {isSpacesValidator } from './validator';

export default {
  data () {
    return {
      courseTitle: '',
      code: '',
      checker: false
    }
  },
  validations: {
    courseTitle: {
      required,
      isSpacesValidator
    },
    code: {
      required,
      isSpacesValidator
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addNewCourse() {
      if (!!this.courseTitle && !!this.code ) {
        this.checker = false;
        this.$emit('addNewCourse', [this.courseTitle, this.code]);
        this.courseTitle = this.code = '';
        this.$emit('close');
      } else {
        this.checker = true;
      }
    }
  }
};
</script>

<style scoped>
@import 'modalCss.css';
</style>