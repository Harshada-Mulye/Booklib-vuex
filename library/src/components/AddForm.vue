<template>
  <div>
      <form @submit.prevent="onSubmit">
          <input type="text" v-model="id">
            <input type="text" v-model="name">
           <input type="text" v-model="author">
           <input type="submit" value="save">

      </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id:0,
            name:'',
            author:''
        }
    },
    methods:{
        onSubmit(){
              const books={
                  id:this.id,
                  name:this.name,
                  author:this.author
              }
              this.$store.commit('AddBook',books)
        }
    }

}
</script>

<style>

</style>