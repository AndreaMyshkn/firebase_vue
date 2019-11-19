<template>
  <div>
      <h2>Phrases</h2>
       <ul >
          <li v-for="phrase of phrases" :key="phrase.id">
                 {{phrase.phrase}}
                  <router-link :to="{name:'edit', params:{id:phrase.id}}">
            <button>Edit text </button>
        </router-link>
          </li>

       </ul>
       
   </div>   

</template>

<script>

import { mapActions, mapState } from 'vuex';   

   export default {
    name:'Init',
    methods:{
        ...mapActions(['getPhrases'])
    }, 
    created(){
        this.getPhrases()
    }, 
    computed:{
        ...mapState(['phrases'])
    }



}



</script>