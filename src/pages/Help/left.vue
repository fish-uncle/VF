<template>
  <Menu class="fn-fl vf-help-left" :open-names="['1','2','3','4']" :active-name="help.helpName" @on-select="handleSelect">
    <Submenu name="1">
      <template slot="title">
        指南
      </template>
      <MenuItem name="介绍">介绍</MenuItem>
      <MenuItem name="目录介绍">目录介绍</MenuItem>
    </Submenu>
<!--    <Submenu name="2">-->
<!--      <template slot="title">-->
<!--        基础功能-->
<!--      </template>-->
<!--      <MenuItem name="快速使用">快速使用</MenuItem>-->
<!--      <MenuItem name="动态数据">动态数据</MenuItem>-->
<!--    </Submenu>-->
<!--    <Submenu name="3">-->
<!--      <template slot="title">-->
<!--        高级功能-->
<!--      </template>-->
<!--      <MenuItem name="自定义组件">自定义组件</MenuItem>-->
<!--      <MenuItem name="国际化">国际化</MenuItem>-->
<!--    </Submenu>-->
    <Submenu name="4">
      <template slot="title">
        其他
      </template>
      <MenuItem name="友情赞助">友情赞助</MenuItem>
      <MenuItem name="意见反馈">意见反馈</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    computed: mapState(["help"]),
    methods: {
      async handleSelect(name) {
        this.$router.push(`/help/${name}`);
        const content = await import(`./${name}.md`)
        this.$store.commit('help/changeHelp', {
          helpName: name,
          helpContent: content
        })
      }
    }
  }
</script>
<style lang="less">
  .vf-help-left {
    height: calc(100vh - 80px);
  }
</style>