<template>
  <div>


    <draggable
      v-model="list"
      group="people"
      @change="log"
    >
      <div
        class="list-group-item"
        v-for="(element, index) in list"
        :key="element.name"
      >
        {{ element.name }} {{ index }}
      </div>
    </draggable>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'

  export default {
    data () {
      return {
        list: [
          { name: "John", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 }
        ]
      }
    },
    components: {
      draggable,
    },
    methods: {
      log (evt) {
        console.log (evt);
      }
    }
  }
</script>