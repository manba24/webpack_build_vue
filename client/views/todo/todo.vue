<template>
  <section class="real-app">
    <div class="tab-container" >
      <tabs :value="filter" @change="handleChangeTab">
          <tab v-for="tab in states" :index="tab" :label="tab" :key="tab"></tab>
        <!-- <tab label="tab1" index="1">
          <span>tab content 1</span>
        </tab>
        <tab index="2">
          <span slot="label" style="color:red">tab2</span>
          <span>tab content2</span>
        </tab>
        <tab label="tab3" index="3">
          <span>tab content 3</span>
        </tab> -->
      </tabs>
    </div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="handleAdd"
    >
    <item
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
      @toggle="toggleTodoState"
    />
    <Helper
      :filter="filter"
      :todos="todos"
      @clearAllCompleted="clearAllCompleted"
    />
    <!-- <router-view></router-view> -->
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Item from './item.vue'
import Helper from './Helper.vue'

export default {
  metaInfo: {
    title: 'The todo app'
  },
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter1')
    next(vm => {
      console.log('after enter this.id is', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo before updated2')
    next()
  },
  // beforeRouteLeave (to, from, next) {
  //   if (global.confirm('are you sure')) {
  //     console.log('todo before leave3')
  //     next()
  //   }
  // },
  mounted () {
    console.log('to mounted')
    this.fetchTodos()
  },
  // props: ['id'],
  // created () {
  //   console.log(this.id)
  // },
  data () {
    return {
      filter: 'all',
      // tabValue: 'all',
      states: ['all', 'active', 'completed']
    }
  },
  components: {
    Item,
    Helper
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    ...mapActions([
      'fetchTodos',
      'addTodo',
      'deleteTodo',
      'updateTodo',
      'deleteAllCompleted'
    ]),
    handleAdd (e) {
      const content = e.target.value.trim()
      if (!content) {
        this.$notify({
          content: '必须输入要做的内容'
        })
        return
      }
      const todo = {
        content,
        completed: false
      }
      this.addTodo(todo)
      e.target.value = ''
    },
    toggleTodoState (todo) {
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, {
          completed: !todo.completed
        })
      })
    },
    // deleteTodo (id) {
    //   this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    // },
    // toggleFilter (state) {
    //   this.filter = state
    // },
    clearAllCompleted () {
      this.deleteAllCompleted()
    },
    handleChangeTab (value) {
      this.filter = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
.tab-container
  background-color #ffffff
  padding 0 15px
</style>


