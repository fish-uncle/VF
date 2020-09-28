<template>
  <div>
    <Timeline class="vf-update-log vf-scrollbar">
      <TimelineItem v-for="item in log" :key="item.version">
        <div class="vf-update-version">{{item.version}}</div>
        <p>
          <code>{{item.time}}</code>
        </p>
        <ul class="vf-log">
          <li v-for="(child,index) in item.content" :key="index">
            {{child}}
          </li>
        </ul>
      </TimelineItem>
    </Timeline>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        log: []
      }
    },
    beforeDestroy () {
      this.$agent.$off ('languageChange', this.init)
    },
    methods: {
      async init () {
        const log = await import(`./log-${this.$i18n.locale}`);
        this.log = log.default;
      }
    },
    mounted () {
      this.$store.commit ('top/changeTop', { topIndex: 2 });
      this.$agent.$on ('languageChange', this.init);
      this.init ();
    }
  }
</script>
<style lang="less">
  .vf-update-version {
    font-size: 20px;
    font-weight: 400;
  }

  .vf-update-log {
    padding: 20px;
    height: calc(100vh - 120px);
    overflow-y: auto;

    p {
      margin: 5px;
      font-size: 14px;
    }

    code {
      margin: 8px 0 10px;
      background: #f7f7f7;
      padding: 1px 5px;
      border-radius: 3px;
      color: #666;
      border: 1px solid #eee;
      display: inline-block;
    }

    .vf-log {
      list-style: circle;
      padding-left: 22px;

      li {
        list-style: circle;
        margin-bottom: 5px;
        font-size: 14px;
      }
    }
  }
</style>
