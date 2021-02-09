<template>
  <div>
      <h1>hi</h1>
    {{ books.id }}
     {{ books.name }}
  </div>
</template>

<script>
export default {
 computed:{
        books()
        { const id=this.$route.params.id
            return this.$store.getters.getBookById(id);
        }
}
}
</script>

<style>

</style>