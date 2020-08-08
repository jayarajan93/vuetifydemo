<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    <v-list>     
    <v-list-item>
      <v-list-item-content>
        <router-link to ="/view">view</router-link>
      </v-list-item-content>
    </v-list-item>
    <v-list-item><router-link to ="/edit">Edit</router-link></v-list-item>
    <v-list-item><router-link to ="/delete">Delete</router-link></v-list-item>
    <v-list-item><router-link to ="/create">Create</router-link></v-list-item>
    </v-list>
   
      </v-main>
      
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Login from "./components/Login.vue"
import Component from "vue-class-component";
import Vuetify from 'vuetify'
@Component({
  components:
  {
    Login
  }
})
export default class App extends Vue
{

}


</script>
