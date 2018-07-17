import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <span>this is {{text}} {{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 123
    }
  }
}
// 全局注册一个组件
// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  template: `
  <div>
    <comp-one :active="true" prop-one="propone"></comp-one>
    <comp-one :active="false" propOne="proptwo"></comp-one>
  </div>
  `
})
