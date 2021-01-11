<template>
    <div>
        <template v-for="child in list">
            <component :key="child"
                       :is="currentComponent[child]"
                       v-if="item.changeList.indexOf(child)!==-1"/>
        </template>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {obj2Str} from '../../utils'

    export default {
        props: ['list'],
        data() {
            return {
                currentComponent: {},
            }
        },
        computed: {
            ...mapState(["center"]),
            item() {
                if (this.center.list.length > 0) {
                    return this.center.list[this.center.currentScale][this.center.current] ?
                        this.center.list[this.center.currentScale][this.center.current] : {changeList: []}
                } else {
                    return {changeList: []}
                }
            }
        },
        mounted() {
            const components = require.context(`../../components-func`, true, /\.(vue)$/)
            components.keys().forEach(child => {
                const name = child.split('/')[1].replace('.vue', '')
                this.currentComponent[name] = components(child).default
            })
        }
    }
</script>
<style lang="less">
    @import "../../less/conf";

    .vf-right {
        width: 440px;
        margin-top: 10px;
        padding-right: 10px;
        height: calc(100vh - 130px);
        overflow-y: auto;

        .tenant-select {
            width: 200px;
            top: 0;
            right: 10px;
        }

        h2 {
            font-size: 16px;
            height: 40px;
            margin-right: 10px;
            color: rgba(0, 0, 0, .3);
            user-select: none;

            &:hover, &.active {
                color: rgba(0, 0, 0, .65);
            }
        }

        .vf-control {
            > label {
                display: block;
                font-size: 14px;
                margin-bottom: 10px;
            }
        }


        .ivu-input, .ivu-input-group-append {
            height: 36px;
        }

        .vf-code {
            textarea {
                height: auto;
            }
        }

        .ivu-input-wrapper, .ivu-select {
            margin-bottom: 10px;
        }

        .ivu-radio-group-button {
            display: block;
            margin-bottom: 10px;
        }

        .ivu-radio-wrapper {
            width: 50%;
            text-align: center;
        }

        .ivu-radio-group-button .ivu-radio-wrapper-checked {
            background: #2d8cf0;
            color: #fff;
        }
    }

    .vf-select-list {
        margin-top: 10px;

        .ivu-input {
            height: 36px;
        }

        .ivu-input-wrapper {
            margin-bottom: 10px;
        }
    }

    .vf-select-del, .vf-select-add {
        height: 36px;
        line-height: 36px;
        border: 1px solid @themeColor;
        transition: all .3s;
        color: @themeColor;
        width: 36px;
        user-select: none;
        font-size: 18px;
        border-radius: 4px;

        &:hover {
            background: @themeColor;
            color: #fff;
        }

        &.disabled {
            border: 1px solid #ddd;
            color: #ddd;
            background: @disabledColor;
            cursor: not-allowed;
        }
    }

    .vf-select-del {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
