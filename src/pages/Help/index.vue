<template>
  <div>
    <div class="fn-clear">
      <left/>
      <div class="vf-help-content">
        <div class="markdown-body">
          <div v-html="help.helpContent"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Left from './left';
  import 'markdown-it-vue/dist/markdown-it-vue.css';
  import {mapState} from "vuex";

  export default {
    components: {Left},
    computed: mapState(["top", "help"]),
    async mounted() {
      if (this.top.topIndex !== 3)
        this.$store.commit('top/changeTop', {topIndex: 3})
      const {name} = this.$route.params;
      const content = await import(`./${name}.md`)
      this.$store.commit('help/changeHelp', {
        helpName: name,
        helpContent: content
      })
      window.please = function () {
        this.$store.commit('model/pleaseShow')
      }.bind(this);
    }
  }
</script>
<style lang="less">
  .vf-help-content {
    margin-left: 240px;
    height: calc(100vh - 80px);
    padding: 40px 80px;

    &::-webkit-scrollbar {
      width: 4px;
      height: 1px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #535353;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #ededed;
    }

    code {
      word-break: break-all;
      white-space: pre-wrap;
    }

  }
</style>