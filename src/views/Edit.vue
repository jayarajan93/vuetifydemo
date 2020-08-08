<template>
  <div class="view">
    <v-form>
      <v-container>
        <v-text-field label="Name" placeholder="Enter Your Name" v-model="name">name</v-text-field>
        <v-text-field label="Note" placeholder="Enter your note here" v-model="notes">notes</v-text-field>
        <v-text-field label="Record" placeholder="Your updated notes" v-model="recordNotes">recordNotes</v-text-field>
        <v-btn rounded color="primary" dark v-on:click="submit">Submit</v-btn>
        </v-container>
    </v-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'
import Component from 'vue-class-component'
import axios from 'axios'
import {server} from '../helper'
import {note} from '../Note.dto'
Vue.use(Vuetify)
@Component
export default class Edit extends Vue
{
  name=""
  notes=""
   updNote : note ={
    name:"",
    notes:""
  }
  recordNotes=""
submit()
{
  this.updNote.name=this.name
  this.updNote.notes=this.notes
  let newupdNotes:note={
  name:"",
  notes:""
}
if(typeof this.updNote==='object'){
   newupdNotes=JSON.parse(JSON.stringify(this.updNote))
}
  const response=axios.put(`${server.baseURL}/update`,newupdNotes).then((response)=>{
console.log(response.data);
  this.recordNotes=response.data
  },(error)=>{
console.log(error)
  })
}
}
</script>
<style lang="scss" scoped>

</style>