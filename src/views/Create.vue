<template>
    <div class="create">
        
    <v-form>
      <v-container>
        <v-text-field label="Name" placeholder="Enter Your Name" v-model="name">name</v-text-field>
        <v-text-field label="Note" placeholder="Enter your note here" v-model="notes">notes</v-text-field>
        <v-text-field label="Record" placeholder="Your added notes" v-model="recordnotes">recordnotes</v-text-field>
        <v-btn rounded color="primary" dark v-on:click="submit">Submit</v-btn>
        </v-container>
    </v-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'
import Component from 'vue-class-component'
import axios from 'axios';
import {server} from '../helper'
import  {note} from  '../Note.dto'
Vue.use(Vuetify)
@Component 
export default class Create extends Vue
{
  name=""
  notes=""
  newNote : note ={
    name:"",
    notes:""
  }
  recordnotes=""
  

async submit()
{
  console.log(this.name)
  console.log(this.notes)
  this.newNote.name=this.name
this.newNote.notes=this.notes
let newNotes:note={
  name:"",
  notes:""
}

if(typeof this.newNote==='object'){
   newNotes=JSON.parse(JSON.stringify(this.newNote))
}

const response=await axios.post(`${server.baseURL}/create`,newNotes).then((response) => {
  console.log(response.data);
  this.recordnotes=response.data
}, (error) => {
  console.log(error);
});

}
}
</script>
<style lang="scss" scoped>

</style>