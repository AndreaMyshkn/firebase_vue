import Vue from 'vue';
import Vuex from 'vuex';
import db from '../firebase';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phrases:[]
  },
  mutations: {

  },
  actions: {
    getPhrases({commit}){
      db.collection('phrases').get()
      .then(snapshot=>{
        snapshot.forEach(doc =>{
          console.log(doc.id);
          console.log(doc.data());
        })
      })
    }
  },
  modules: {
  }
})
