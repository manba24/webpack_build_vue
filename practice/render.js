import Vue from 'vue'

const component = {
//   template: `
//   <div :style="style">
//       <slot :value="value" aaa="789"></slot>
//   </div>

// `,
  name: 'comp',
  props: ['props1'],
  render (createElement) {
    return createElement('div', {
      style: this.style
      // on: {
      //   click: () => this.$emit('click')
      // }
    }, [this.$slots.header, this.props1])
  },
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
  data () {
    return {
      value: 123
    }
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  el: '#root',
  // template: `
  // <div>
  //   <comp-one ref="comp">
  //     <span slot-scope="props" ref="span">{{props.value}}-{{props.aaa}}-{{value}}</span>

  //   </comp-one>
  // </div>
  // `,
  render (createElement) {
    return createElement('comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        // on: {
        //   click: this.handleClick
        // },
        nativeOn: {
          click: this.handleClick
        }
      },
      [createElement('span', {
        ref: 'span',
        slot: 'header',
        domProps: {
          innerHTML: '<span>456</span>'
        },
        attrs: {
          id: 'test-id'
        }
      }, this.value)]
    )
  }
})
