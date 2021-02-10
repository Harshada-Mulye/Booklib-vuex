<template>
  <div>
      <h1>Books</h1>
      <BookList/>
      <AddForm/>
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue'
import AddForm from '@/components/AddForm.vue'
export default {
    components:{
        BookList ,AddForm
    }

}
</script>

<style>

</style>