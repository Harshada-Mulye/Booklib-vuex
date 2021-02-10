import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_BOOK,REMOVE_BOOK} from './mutation-types.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books:[
      {
      id:1,
      name:"Madeline",
      author:"Ludwig"
      },
      {
        id:2,
        name:"The tale of Peter Rabbit",
        author:"Betrix "
        },
      {
          id:3,
          name:"Charlottes web",
          author:"E.B. White "
          },
          {
            id:4,
            name:"Harold and the Purple Crayon ",
            author:"Crockett Johnson"
            },
    ]
  },
  getters:{
   books:state=>{
   return state.books;
   },
   getBookById:(state)=>(id)=>{
     return state.books.find(b=>b.id==id)
   }
  },
  mutations: {
    [ADD_BOOK](state,payload){
  state.books.push(payload)
    },
    [REMOVE_BOOK](state,payload){
      //payload==id
      const book=state.books.find(b=>b.id==payload)
      if(book)
      {
        const indexof=state.books.indexOf(book)
        state.books.splice(indexof,1)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
