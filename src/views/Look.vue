<template>
  <div class="Look">
    <v-form>
      <v-container>
        <v-text-field label="Name" placeholder="Enter Your Name" v-model="name">name</v-text-field>
        <v-text-field label="Note" placeholder="Your notes will appear here" v-model="notes">notes</v-text-field>
        <v-btn rounded color="primary" dark v-on:click="submit">Submit</v-btn>
        </v-container>
    </v-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Ref} from 'vue-property-decorator' 
import Vuetify from'vuetify'
import axios from 'axios'
import {server} from '../helper'
Vue.use(Vuetify)
@Component
export default class Look extends Vue
{
  name=""
  notes=""
async submit()
{
  const response= await axios.get(`${server.baseURL}/view/${this.name}`).then((response)=>{
    this.notes=response.data
  },(error)=>{  
    console.log(error)
  }); 
}
}
</script>
<style lang="scss" scoped>

</style>>