<template>
  <div>
    <top/>
    <Timeline class="update-log">
      <TimelineItem v-for="item in log">
        <div class="version">{{item.version}}</div>
        <p>
          <code>{{item.time}}</code>
        </p>
        <ul class="log">
          <li v-for="child in item.content">
            {{child}}
          </li>
        </ul>
      </TimelineItem>
    </Timeline>
  </div>
</template>
<script>
  import log from "./log";
  import Top from '../../components/Top'

  export default {
    components: {
      Top
    },
    data() {
      return {
        log
      }
    }
  }
</script>
<style lang="less">
  .update-log {
    margin: 20px;

    .version {
      font-size: 20px;
      font-weight: 400;
    }

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

    .log {
      list-style: circle;

      li {
        list-style: circle;
        margin-bottom: 5px;
        font-size: 14px;
      }
    }

    .log {
      padding-left: 22px;
    }
  }
</style>
