import Vue from 'vue'

// new Vue({
//   el: '#root',
//   template: '<div>this is content </div>'
// })

const app = new Vue({
  template: '<div ref="div">{{text}}</div>',
  data: {
    text: 1
  }
  // watch: {
  //   text(newText, oldText) {
  //     console.log(`${newText}:${oldText}`)
  //   }
  // }
})

app.$mount('#root')
setInterval(function () {
  app.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// console.log(app.$root)
// console.log(app.$children)

// console.log(app.$slots)
// console.log(app.$scopedSlots)

// console.log(app.$refs)
// console.log(app.$isServer)

// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(newText)
//   console.log(oldText)
// })

// setTimeout(() => {
//   unWatch()
// }, 2000)
// app.$once 只触发一次
// app.$forceUpdate  强制渲染
// app.$set(app.obj,'a',i)
// app.$nextTick dom渲染结束调用的回调函数
app.$on('test', (a, b) => {
  console.log(`test emited${a}`)
})

app.$emit('test', 1, 2)
