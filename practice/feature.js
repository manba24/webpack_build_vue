import Vue from 'vue'

const childComponent = {
  template: '<div>child component:{{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted () {
    console.log(this.$parent.$options.name)
    console.log(this.yeye, this.value)
  }
}
const component = {
  name: 'comp',
  components: {
    childComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">

  //       <slot name="body"></slot>
  //     </div>
  //   </div>

  // `,
  template: `
  <div :style="style">
    <div class="header">
      <slot :value="value" aaa="789"></slot>
      <child-component></child-component>
    </div>
  </div>

`,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid red'
      },
      value: 666
    }
  }
}
// 全局注册一个组件
// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    const data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true

    })
    return {
      yeye: this,
      data
    }
  },
  data () {
    return {
      value: 123
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  el: '#root',
  template: `
  <div>
    <comp-one ref="comp">
      <span slot-scope="props" ref="span">{{props.value}}-{{props.aaa}}-{{value}}</span>
      <span slot="body">this is body</span>
    </comp-one>
    <input v-model="value" />
  </div>
  `
})
