<template>
  <div>
    <form class="login-from" @submit="doSubmit" >
      <h1>
        <span>Login</span>
        <span class="error-msg" v-show="errMsg">{{errMsg}}</span>
      </h1>
      <input type="text" class="login-input" v-model="username">
      <input type="password" class="login-input" v-model="password" autocomplete="new-password">
      <button type="submit" class="login-btn">登 录</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  metaInfo: {
    title: 'login page'
  },
  data () {
    return {
      username: '',
      password: '',
      errMsg: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    doSubmit (e) {
      e.preventDefault()
      if (this.validate()) {
        this.login({
          username: this.username,
          password: this.password
        }).then(() => {
          this.$router.replace('/app')
        })
      }
    },
    validate () {
      if (!this.username) {
        this.errMsg = '姓名不能为空'
        return false
      }
      if (!this.username.trim()) {
        this.errMsg = '密码不能为空'
        return false
      }
      this.errMsg = ''
      return true
    }
  },
  mounted () {
    console.log(this.id)
  },
  props: ['id']
}
</script>

<style>

</style>
