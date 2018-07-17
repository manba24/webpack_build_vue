import Vue from 'vue'

const app = new Vue({
  // template: `
  //   <div :id="aa" @click="handleClick">
  //     {{isActive ? 'active' : arr.join('')}}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  // [isActive ? 'active': '']
  template: `
  <div
    :class="{active: !isActive}"
    :style="[styles,styles2]"
  >
    {{isActive ? 'active' : arr.join('')}}
    <p>{{getJoinArr(arr)}}</p>
  </div>
`,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aa: 'main',
    // vue可自动判断浏览器加前缀
    styles: {
      color: 'red',
      appearance: 'none'

    },
    styles2: {
      color: 'black'
    }
  },
  methods: {
    getJoinArr (arr) {
      return arr.join(' ')
    }
  }
})

app.$mount('#root')
