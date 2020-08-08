<template>

      <div class="delete">
    <v-form>
      <v-container>
        <v-text-field label="Name" placeholder="Enter Your Name" v-model="name">name</v-text-field>
        <v-text-field label="Note" placeholder="Notification will appear here" v-model="notes">notes</v-text-field>
        <v-btn rounded color="primary" dark v-on:click="submit">Submit</v-btn>
        </v-container>
    </v-form>
  </div>

</template>
<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'
import Component from 'vue-class-component'
import {server} from '../helper'
import axios from 'axios'
Vue.use(Vuetify)
@Component
export default class Delete extends Vue
{
  name=""
  notes=""
submit()
{
  const response=axios.delete(`${server.baseURL}/delete/${this.name}`).then((response)=>{
this.notes=response.data
  
},(error)=>{
console.log(error)
});
}
}
</script>
<style lang="scss" scoped>

</style>