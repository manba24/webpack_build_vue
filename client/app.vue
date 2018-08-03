<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header></Header>
    <!-- <p>{{fullName}} {{counter}}</p> -->
    <!-- <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/app">app</router-link> -->
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
    <!-- <router-link to="/login">login</router-link> -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <button @click="notify">click me</button> -->
    <!-- <notification content="test notifiy"></notification> -->
    <Footer></Footer>


  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Loading from './components/loading/loading.vue'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'Jock\'s todo app'
  },
  components: {
    Header,
    Footer,
    Loading
  },
  mounted () {
    // this.$notify({
    //   content: 'this $notify',
    //   btn: 'close'
    // })
    // console.log(this.$store)
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // let i = 1
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)

    // this['a/add']()
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updateText']),
    notify () {
      this.$notify({
        content: 'this $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    ...mapState(['loading']),
    ...mapGetters({
      fullName: 'fullName',
      textPlus: 'a/textPlus'

    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
.active-link{
  color white
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
#loading {
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255,255,255,.3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>


