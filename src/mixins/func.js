import {str2Obj} from "../utils";
import {mapState} from 'vuex'

export default {
	computed: {
		...mapState([ 'language']),
	},
	props:['item','propsVal'],
	methods:{
		editorChange (value, key) {
			let item = this.item;
			try {
				item[key] = str2Obj (value)
			} catch (e) {

			}
		},
		onCmCodeChange (newCode, key) {
			let item = this.item;
			item[key] = newCode;
		},
		checkChange (value, key) {
			let item = this.item;
			item[key] = value;
		},
		numberChange (e, key) {
			const value = e.target.value;
			let item = this.item;
			item[key] = Number (value);
		},
		inputChange (e, key) {
			const value = e.target.value;
			let item = this.item;
			item[key] = value;
		}
	}
}
