<template>
  <div>
    <form @submit.prevent="addPhrase(newPhrase)">
        <input type="text" v-model='newPhrase'>
        <br/>
        <button type="submit"> Add phrase</button>
        </form>
        {{newPhrase}}
   </div>   
</template>

<script>
   import {mapActions} from 'vuex';
   export default {
       name: 'Add', 
       data(){
           return{
               newPhrase:''
           }
       },
       methods:{
         ...mapActions(['addPhrase'])
       }
   }


</script>