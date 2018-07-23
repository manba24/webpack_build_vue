<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/app">app</router-link>
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <router-view name="login"></router-view>


  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
  },
  mounted () {
    console.log(this.$store)
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // let i = 1
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)

    // this['a/add']()
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updateText'])
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    // ...mapState(['count']),
    ...mapState({
      // counter: 'count'
      counter: (state) => state.count,
      textA: state => state.a.text
    }),
    // count () {
    //   return this.$store.state.count
    // },
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
</style>


