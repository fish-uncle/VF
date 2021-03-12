import Hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night.css'

const Highlight = {}
Highlight.install = function (Vue) {
	Vue.directive('highlight', {
		inserted: function (el) {
			const blocks = el.querySelectorAll('pre code')
			for (let i = 0; i < blocks.length; i++) {
				Hljs.highlightBlock(blocks[i])
			}
		},
		componentUpdated: function (el) {
			const blocks = el.querySelectorAll('pre code')
			for (let i = 0; i < blocks.length; i++) {
				Hljs.highlightBlock(blocks[i])
			}
		}
	})
}
export default Highlight
