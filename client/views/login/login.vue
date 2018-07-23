<template>
  <div>
    this is login page
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'login page'
  },
  mounted () {
    console.log(this.id)
  },
  props: ['id']
}
</script>

<style>

</style>
