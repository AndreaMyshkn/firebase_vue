<template>
  <div>
      <h2>Phrases</h2>
       <ul >
          <li v-for="phrase of phrases" :key="phrase.id">
                 {{phrase.phrase}}
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