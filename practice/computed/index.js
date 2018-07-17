import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <span>Name:{{firstName + ' '+ lastName}}</span>
      <span>Name:{{name}}</span>
      <p>fullName:{{fullName}}</p>
      <p>Name:{{ getName() }}</p>
      <p>Number:{{ number }}</p>
      <p><input v-model="number"></p>
      <p><input v-model="firstName"></p>
      <p><input v-model="obj.a"></p>

    </div>
  `,
  data: {
    firstName: 'jack',
    lastName: 'jesse',
    number: 0,
    fullName: '',
    obj: {
      a: 1
    }
  },
  computed: {
    name () {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    }
  },
  // handler立即执行 immediate: true
  // 监听变化
  watch: {
    firstName (newName, oldName) {
      this.fullName = newName + ' ' + this.lastName
    },
    'obj.a': {
      handler () {
        console.log('obj.a has changed')
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      console.log('invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
