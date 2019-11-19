import Vue from 'vue';
import Vuex from 'vuex';
import db from '../firebase';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phrases:[]
  },
  mutations: {
    setPhrases(state, allPhrases){
      state.phrases = allPhrases;
    }



  },
  actions: {
   
    getPhrases({commit}){
      const allPhrases = []
      db.collection('phrases').get()
      .then(snapshot=>{
        snapshot.forEach(doc =>{
          let phrase = doc.data();
          phrase.id = doc.id;
          console.log(doc.id);
          console.log(doc.data());
          allPhrases.push(phrase) 

        })
      })

      commit('setPhrases', allPhrases)
    }
  },
  modules: {
  }
})
