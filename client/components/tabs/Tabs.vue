<script>
import TabContainer from './tab-container.vue'
export default {
  name: 'Tabs',
  // provide () {
  //   return {
  //     //状态不联动 需要用defineProperty来设置
  //     value: this.value
  //   }
  // },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  components: {
    TabContainer
  },
  data () {
    return {
      panes: []
    }
  },
  render () {
    return (
      <div class='tabs'>
        <ul class='tabs-header'>
          {this.$slots.default}
        </ul>
        <tab-container panes={this.panes}></tab-container>
      </div>
    )
  },
  methods: {
    onChange (index) {
      // console.log(index)
      this.$emit('change', index)
    }
  }
}
</script>
