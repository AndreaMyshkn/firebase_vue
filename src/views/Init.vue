<template>
  <div>
      <h2>Phrases</h2>
   </div>   

</template>

<script>

import { mapActions } from 'vuex';   

   export default {
    name:'Init',
    methods:{
        ...mapActions(['getPhrases'])
    }, 
    created(){
        this.getPhrases()
    }



}



</script>