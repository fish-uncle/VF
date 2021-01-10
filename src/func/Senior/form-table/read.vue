<template>
  <index :language="language" :value="value" :status="status"/>
</template>
<script>
  import index from './index'

  export default {
    components: {
      index
    },
    props: [ 'language', 'value', 'status' ]
  }
</script>