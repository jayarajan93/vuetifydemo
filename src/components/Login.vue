<template>

     <v-card>
         <v-card-title>Login</v-card-title>
         <v-card-text>
             <v-form >
                 <v-text-field v-model="form['name']" label="Username" />
                 <v-text-field v-model="form['password']" label="Password" type="Password"/>
                 </v-form>
         </v-card-text>
         <v-btn ref="forms" @click="Logger">Login</v-btn>
         <v-btn @click="Registration">Register</v-btn>
         <v-main >{{message}}</v-main>
    </v-card>

 
</template>
<script lang="ts">
import {Vue,Component,Prop,Ref} from 'vue-property-decorator'
import Vuetify from 'vuetify'
@Component
export default class Login extends Vue
{
    message=""
    form={}
    
    @Ref() forms!:HTMLFormElement

Logger()
{
    let formobj:any
    if(typeof(this.form) ==='object'){
        console.log("test")
     
     formobj=JSON.parse(JSON.stringify(this.form))
    console.log(formobj)
    }
    this.message=`Thanks for logging in...${formobj.name}`

}
Registration()
{
    this.message="Welcome, Thanks for registering"
}
}
</script>