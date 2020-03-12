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
              :class="{'is-invalid': $v.user['name'].$error}"
              @blur="$v.user['name'].$touch()"
              id="inputTitle" 
              v-model="user['name']"              
              >
          </div>
          <div class="form-group">
            <label for="inputMail">E-mail</label>
            <input 
              type="email" 
              class="form-control ml-1"
              :class="{'is-invalid': $v.user['mail'].$error}"
              @blur="$v.user['mail'].$touch()"
              id="inputMail" 
              v-model="user['mail']"
              >
          </div>
          <div class="form-group">
            <label for="FormControlSelect">Select status</label>
            <select class="form-control ml-1" id="FormControlSelect" v-model="user['status']" >
              <option selected>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <button 
            type="button" 
            class="btn btn-success" 
            @click="changeCurrentUser"
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
import { required, email } from 'vuelidate/lib/validators'
import { isSpacesValidator } from './validator';

export default {
	props: {
		user: Object
	},
  validations: {
    user: {
      name: { required },
      mail: { required, email }
    }
  },
  methods: {
    changeCurrentUser() {
        this.$emit('changeCurrentUser');
    }
  },
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