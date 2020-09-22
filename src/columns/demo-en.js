const columns = [
  {
    title: 'Name',
    key: 'name',
    type: 'input',
    render: (h, { row, column, index }) => {
      return h ('v-component', {
        props: {
          id: '111',
          status: 'edit',
          value: {
            title: 'switch',
            type: 'input',
            labelWidth: 0,
            rules: {
              required: false,
              pattern: '',
              message: '该项格式不正确'
            },
          }
        }
      })
    }
  },
  {
    title: 'Age',
    key: 'age',
    type: 'input'
  },
  {
    title: 'Birth',
    key: 'birth',
    type: 'input'
  },
  {
    title: 'Sex',
    key: 'sex',
    type: 'input'
  },
];
module.exports = columns;