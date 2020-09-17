<template>
  <div>


  </div>
</template>
<script>
  import { obj2Str, str2Obj } from '../../utils'
  import Schema from 'async-validator'

  const descriptor = {
    name: {
      type: 'string',
      required: true,
      pattern: /^[a-z]+$/,
    },
  };
  const validator = new Schema (descriptor);
  const source = { name: '1' };
  validator.validate (source, (errors, fields) => {
    if (errors) {
      // validation failed, errors is an array of all errors
      // fields is an object keyed by field name with an array of
      // errors per field
      console.log (errors)
    }
    // validation passed
  });
  const test1 = '{"required":false,"test":"function (){}","pattern":"^([a-zA-Z]|[0-9])(\\\\w|\\\\-)+@[a-zA-Z0-9]+\\\\.([a-zA-Z]{2,4})$"}'
  const test2={"required":false,"test":function(){},"pattern":"^([a-zA-Z]|[0-9])(\\\\w|\\\\-)+@[a-zA-Z0-9]+\\\\.([a-zA-Z]{2,4})$"}
  console.log(obj2Str(test2))
  console.log(str2Obj(test1))
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
    methods: {
      log (evt) {
        console.log (evt);
      }
    }
  }
</script>