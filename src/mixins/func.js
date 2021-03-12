import { obj2Str, str2Obj } from '../utils'
import { mapState } from 'vuex'
import language from '../store/language'
export default {
	data () {
		return {
			language: language.store
		}
	},
    computed: {
        ...mapState(['center']),
        propsVal () {
            return obj2Str(this.item.props)
        },
		requiredVal () {
			return this.item.required ? 1 : 0
		},
        item () {
            if (this.center.list.length > 0) {
                return this.center.list[this.center.currentScale][this.center.current]
                    ? this.center.list[this.center.currentScale][this.center.current] : { changeList: [] }
            } else {
                return { changeList: [] }
            }
        },
        componentList () {
            const componentList = []; const result = []
            for (let i = 0; i <= this.center.list.length - 1; i++) {
                componentList.push(...this.center.list[i])
            }
            for (let i = 0; i <= componentList.length - 1; i++) {
                if (this.item.id !== componentList[i].id) {
                    result.push({
                        key: componentList[i].id,
                        label: componentList[i][`title_${this.language.lang}`]
                    })
                }
            }
            return result
        }
    },
    methods: {
		requiredChange (value) {
			const item = this.item
			item.required = !!value
		},
        editorChange (value, key) {
            const item = this.item
            try {
                item[key] = str2Obj(value)
            } catch (e) {

            }
        },
        onCmCodeChange (newCode, key) {
            const item = this.item
            item[key] = newCode
        },
        numberChange (e, key) {
            const value = e.target.value
            const item = this.item
            item[key] = Number(value)
        },
        inputChange (e, key) {
            const value = e.target.value
            const item = this.item
            item[key] = value
        },
        selectChange (value, key) {
            const item = this.item
            item[key] = value
        },
        selectListUrlChange (e, key) {
            const value = e.target.value
            const item = this.item
            item[key] = value
        },
        controlOthersHideChange (targetKeys, value) {
            const item = this.item
            const obj = Object.assign({}, item.controlOthersHideTargetKeys)
            obj[value] = targetKeys
            item.controlOthersHideTargetKeys = obj
        },
        controlOthersUpdateChange (targetKeys) {
            const item = this.item
            item.controlOthersUpdateTargetKeys = targetKeys
        },
        inputValueChange (e, index) {
            const value = e.target.value
            const item = this.item
            item.selectList[index].value = value
        },
        inputTitleChange (e, index) {
            const value = e.target.value
            const item = this.item
            item.selectList[index].label = value
        },
        selectDelChange (index) {
            const item = this.item
            if (item.selectList.length > 1) {
                item.selectList.splice(index, 1)
            }
        },
        selectAddChange (index) {
            const item = this.item
            item.selectList.splice(index + 1, 0, { label: '新建项标题', value: '新建项值' })
        },
        columnsValueChange (value, index) {
            const item = this.item
            item.columns[index].value = value
        },
        columnsKeyChange (e, index) {
            const value = e.target.value
            const item = this.item
            item.columns[index].key = value
        },
        columnsTitleChange (e, index) {
            const value = e.target.value
            const item = this.item
            item.columns[index].title = value
        },
        columnsDelChange (index) {
            const item = this.item
            if (item.columns.length > 1) {
                item.columns.splice(index, 1)
            }
        },
        columnsAddChange (index) {
            const item = this.item
            item.columns.splice(index + 1, 0, { key: 'key', title: 'title', type: 'input' })
        },
        checkChange (value, key) {
            const item = this.item
            item[key] = value
        },
        dateRangeKeyChange (e, key) {
            const value = e.target.value
            const item = this.item
            if (key === '0') {
                const newKey = value + ';' + item.key.split(';')[1]
                this.$agent.$emit({ type: 'formDataChange', oldKey: item.key.split(';')[0], newKey: value })
                this.$agent.$emit({ type: 'formDataChange', oldKey: item.key, newKey })
                item.key = newKey
                this.$store.commit('center/changeKey', { key: newKey, id: item.id })
            }
            if (key === '1') {
                const newKey = item.key.split(';')[0] + ';' + value
                this.$agent.$emit({ type: 'formDataChange', oldKey: item.key.split(';')[1], newKey: value })
                this.$agent.$emit({ type: 'formDataChange', oldKey: item.key, newKey })
                item.key = newKey
                this.$store.commit('center/changeKey', { key: newKey, id: item.id })
            }
        },
        keyChange (e) {
            const value = e.target.value
            const item = this.item
            this.$agent.$emit({ type: 'formDataChange', oldKey: item.key, newKey: value })
            item.key = value
            this.$store.commit('center/changeKey', { key: value, id: item.id })
        }
    }
}
