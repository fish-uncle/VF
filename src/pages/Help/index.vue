<template>
  <div>
    <div class="fn-clear">
      <left/>
      <div class="vf-help-content vf-scrollbar">
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
    methods: {
      async init() {
        console.log(1);
        const {name} = this.$route.params;
        const content = await import(`./${name}-${this.$i18n.locale}.md`)
        this.$store.commit('help/changeHelp', {
          helpName: name,
          helpContent: content
        })
      }
    },
    beforeDestroy() {
      this.$agent.$off('languageChange', this.init)
    },
    mounted() {
      if (this.top.topIndex !== 3)
        this.$store.commit('top/changeTop', {topIndex: 3})
      this.init();
      window.please = function () {
        this.$store.commit('model/pleaseShow')
      }.bind(this);
      this.$agent.$on('languageChange', this.init)
    }
  }
</script>
<style lang="less">
  .vf-help-content {
    margin-left: 240px;
    height: calc(100vh - 80px);
    padding: 40px 80px;
    overflow-y: auto;

    code {
      word-break: break-all;
      white-space: pre-wrap;
    }

  }
</style>