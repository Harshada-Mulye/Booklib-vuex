<template>
  <div>
      <h1>booklist</h1>
      <div v-for ="b in books" :key=b.id @click.right="OnClick(b.id)" class="bookstyle">
          <h2>
              {{b.name}}
          </h2>
          <h3>
              {{b.author}}
          </h3>
        <button @click="deleteBook(b.id)">Delete Book</button>
      </div>
      <div>
{{findbook.name}}
      </div>
  </div>
</template>

<script>
import {REMOVE_BOOK} from '@/store/mutation-types.js'
export default {
    computed:{
        books()
        {
            return this.$store.getters.books;
        },
        findbook()
        {
            return this.$store.getters.getBookById(2)
        }
    },
    methods:{
        OnClick(id){
            this.$router.push(`/BookDesc/${id}`)
        },
        deleteBook(id){
            this.$store.commit(REMOVE_BOOK,id)
        }
    }

}
</script >

<style scoped>
.bookstyle{
    display:inline-block;
    padding:10px;
    border-style: solid;
    background-color: antiquewhite;
}
</style>