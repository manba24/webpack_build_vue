import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <ul>
        <li v-for="(item,index) in arr" :key="item">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(val,key) in obj">{{val}}:{{key}}</li>
      </ul>
      <span v-text="text"></span>

      <span v-if="active">{{text}}</span>
      <span v-else-if="text === 'jack'">else jack</span>
      <span v-else>else content</span>

      <span v-show="active">{{text}}</span>
      <div>
        <input v-model.number="text">
        <input v-model.trim="text">
        <input v-model.lazy="text">
      </div>
      <div>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
      </div>

      <div>
        <input type="radio" value="one"  v-model="picked">
        <input type="radio" value="two"  v-model="picked">

      </div>

    </div>
  `,
  data: {
    arr: [1, 2],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    text: 0,
    active: false,
    picked: ''
  }
})
