<template>
  <div>
      <h1>booklist</h1>
      <div v-for ="b in books" :key=b.id @click="OnClick(b.id)" class="bookstyle">
          <h2>
              {{b.name}}
          </h2>
          <h3>
              {{b.author}}
          </h3>
   
      </div>
      <div>
{{findbook.name}}
      </div>
  </div>
</template>

<script>
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
        }
    }

}
</script >

<style scoped>
.bookstyle{
    display:inline-block;
    padding:10px;
}
</style>