<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div class="notification" :style="style"  v-show="visible" @mouseenter="clearTimer" @mouseleave="createTimer">
      <span class="content">
        {{content}}
      </span>
      <a @click="handleClose" href="" class="btn">
        {{btn}}
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'

    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave () {
      console.log('remove....')
      this.$emit('closed')
    },
    clearTimer () {},
    createTimer () {}
  }
}
</script>

<style>

</style>
