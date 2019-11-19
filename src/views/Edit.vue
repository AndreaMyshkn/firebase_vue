<template>
   <div>
     <h1>Edit page</h1>
     {{id}}{{phrase}}
     <form @submit.prevent="editPhrase(phrase)">
         <input type="text" v-model='phrase.phrase'>
         <button type="submit">Edit</button>
     </form>
   </div>
</template>



<script>
import {mapActions, mapState} from 'vuex';
export default {
    name:'Edit',
    data(){
        return{
            id:this.$route.params.id
        }
    }, 
    methods:{
     ...mapActions(['getPhrase', 'editPhrase'])
    }, 
    created(){
        this.getPhrase(this.id)
    }, 
    computed:{
        ...mapState(['phrase'])
    }
}
</script>