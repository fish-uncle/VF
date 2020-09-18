<template>
  <div>
    <div class="fn-clear">
      <left/>
      <div class="vf-help-content">
        <div class="markdown-body">
          <div v-html="help.helpContent" v-if="help.helpType===1"/>
          <component :is="currentComponent" v-if="help.helpType===2"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Left from './left';
  import 'markdown-it-vue/dist/markdown-it-vue.css';
  import { mapState } from "vuex";

  export default {
    data () {
      return {
        currentComponent: null
      }
    },
    components: { Left },
    computed: mapState ([ "top", "help" ]),
    watch: {
      '$route': function () {
        this.init ();
      }
    },
    methods: {
      async init () {
        let { name } = this.$route.params;
        name = name.replace (/%20/g, '');
        if (name === 'Feedback' || name === 'Friendship sponsorship' || name === 'First example') {
          this.currentComponent = () => import(`./${this.help.helpName}`)
          this.$store.commit ('help/changeHelp', {
            helpName: name,
            helpContent: '',
            helpType: 2
          })
        } else {
          const content = await import(`./${name}-${this.$i18n.locale}.md`)
          this.$store.commit ('help/changeHelp', {
            helpName: name,
            helpContent: content,
            helpType: 1
          })
        }

      }
    },
    beforeDestroy () {
      this.$agent.$off ('languageChange', this.init)
    },
    mounted () {
      if (this.top.topIndex !== 3)
        this.$store.commit ('top/changeTop', { topIndex: 3 })
      this.init ();
      window.please = function () {
        this.$store.commit ('model/pleaseShow')
      }.bind (this);
      this.$agent.$on ('languageChange', this.init)
    }
  }
</script>
<style lang="less">
  .vf-help-content {
    margin-left: 240px;
    min-height: calc(100vh - 120px);
    padding: 40px 80px;
    overflow-y: auto;

    code {
      word-break: break-all;
      white-space: pre-wrap;
    }
  }

  .markdown-body {
    ul, li {
      list-style: circle;
    }
  }
</style>