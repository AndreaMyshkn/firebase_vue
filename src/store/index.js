import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router'
import db from '../firebase';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phrases:[], 
    phrase:{ phrase:'', id:'' }
  },
  mutations: {
    setPhrases(state, allPhrases){
      state.phrases = allPhrases;
    }, 
    setPhraseSelected(state, phraseSelected){
      state.phrase = phraseSelected;
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
    },

    getPhrase({commit}, id){
      db.collection('phrases').doc(id).get()
      .then(doc=>{
         let phraseSelected = doc.data();
         phraseSelected.id = doc.id;
         console.log(phraseSelected)
         commit('setPhraseSelected', phraseSelected)
      })
     
    }, 

    editPhrase({commit}, phrase){
      db.collection('phrases').doc(phrase.id).update({
        phrase: phrase.phrase
      })
      .then(()=>{
        router.push({name:'init'})
      })
    }, 
    addPhrase({commit}, newPhrase){
      db.collection('phrases').add({
        phrase:newPhrase
      })
      .then(()=>{
        router.push({name:'init'})
      })
    }
  },
  modules: {
  }
})
