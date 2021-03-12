<template>
	<div
		class="vf-image"
		:class="[currentVal.className,currentVal.disabled ? 'f-image-disabled' : '',
			currentVal.className,error ? 'vf-error' : '']"
		:style="{width:`${currentVal.widthRatio}%`}"
	>
		<div class="vf-image-upload-list" v-for="item in parent.data[currentVal.key]" :key="item.url">
			<img :src="item.url"/>
			<div class="vf-image-upload-list-cover">
				<Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
				<Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
			</div>
		</div>
		<Upload
			ref="upload"
			v-bind="currentVal.props"
			:action="currentVal.action"
			type="drag"
			:max-size="currentVal.maxSize"
			:show-upload-list="false"
			:format="fileFormat"
			:accept="currentVal.fileAccept"
			:multiple="true"
			:on-success="handleSuccess"
			:on-format-error="handleFormatError"
			:on-exceeded-size="handleExceededError"
			:disabled="currentVal.disabled"
			style="display: inline-block;width:58px;"
		>
			<div style="width: 58px;height:58px;line-height: 58px;">
				<Icon type="ios-camera" size="20"></Icon>
			</div>
		</Upload>
		<Modal title="View Image" v-model="visible">
			<img :src="imgUrl" v-if="visible" style="width: 100%"/>
		</Modal>
	</div>
</template>
<script>
	import func from '../../../mixins/component'

	export default {
		mixins: [func],
		data () {
			return {
				visible: false,
				uploadList: [],
				imgUrl: ''
			}
		},
		computed: {
			fileFormat () {
				return this.currentVal.fileFormat.split(',')
			}
		},
		mounted () {
			this.init()
		},
		methods: {
			init () {
				this.uploadList = this.parent.data[this.currentVal.key]
			},
			update () {
				this.parent.changeData({
					value: [],
					key: this.currentVal.key
				})
			},
			handleExceededError () {
				this.$Message.error(`当前文件大小超出${this.currentVal.maxSize}kb`)
			},
			handleFormatError () {
				this.$Message.error('当前文件格式不符合要求')
			},
			handleRemove (file) {
				const fileList = this.$refs.upload.fileList
				this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
				const list = fileList.map(item => {
					return { url: item.url, name: item.name }
				})
				this.parent.changeData({
					value: list,
					key: this.currentVal.key
				})
			},
			handleView (url) {
				this.imgUrl = url
				this.visible = true
			},
			handleSuccess (response, file, fileList) {
				file.url = response.data
				file.name = response.data
				this.parent.data[this.currentVal.key].push({ url: response.data, name: response.data })
				if (this.error) {
					this.parent.errorHide(this.currentVal.id)
				}
				this.eventsOnChange()
			}
		}
	}
</script>
<style lang="less">
	@import "../../../less/conf";

	.vf-image.vf-error {
		.ivu-upload {
			border-color: @error-color;
			outline: 0;
			box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
		}
	}

	.vf-image-upload-list {
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;

		&:hover {
			.vf-image-upload-list-cover {
				opacity: 1;
			}
		}

		img {
			width: 100%;
			height: 100%;
		}
	}

	.vf-image-upload-list-cover {
		opacity: 0;
		transition: all .3s;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);

		i {
			color: #fff;
			font-size: 20px;
			cursor: pointer;
			margin: 0 2px;
		}
	}

</style>
