import Vue from 'vue'
import Vuex from 'vuex'

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
  },
  actions: {
  },
  modules: {
  }
})
