<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal p-4 justify-content-around">
        <div class="text-center">Enter a new user</div>
        <form>
          <div class="form-group input-elem">
            <label for="inputTitle" >Enter user name</label>
            <input 
              type="text" 
              class="form-control"
              :class="{'is-invalid': $v.userName.$error}"
              @blur="$v.userName.$touch()"
              id="inputTitle" 
              placeholder="User name"
              v-model="userName"              
              >
              <div class="invalid-tooltip" v-if="$v.userName.$error">
                This field is required 
              </div>
          </div>
          <div class="form-group input-elem">
            <label for="inputMail">Enter user e-mail</label>
            <input 
              type="email" 
              class="form-control"
              :class="{'is-invalid': $v.userMail.$error}"
              id="inputMail" 
              placeholder="example@gmail.com"
              @blur="$v.userMail.$touch()"
              v-model="userMail"
              >
              <div class="invalid-tooltip" v-if="$v.userMail.$error">
                Please enter an email adress 
              </div>
          </div>
          <div class="form-group">
            <label for="FormControlSelect">Select status</label>
            <select class="form-control" id="FormControlSelect" v-model="userStatus" >
              <option selected>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <button type="button" class="btn btn-secondary" @click="close">
             Cancel
          </button>
          <button type="button" class="btn btn-success" @click="addNewUser" :disabled="$v.$invalid">
            Add
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import {isSpacesValidator } from './validator';

export default {
  data () {
    return {
      userName: '',
      userMail: '',
      userStatus: 'Active'      
    }
  },
  validations: {
    userMail: {
      required,
      email
    },
    userName: {
      required,
      isSpacesValidator
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addNewUser() {
        this.$emit('addNewUser', [this.userName, this.userMail, this.userStatus]);
        this.userName = this.userMail = '';
        this.$emit('close');
    }
  },
};
</script>

<style scoped>
@import 'modalCss.css';

  .modal {
    width:  40%;
    height: 400px;
  }
</style>