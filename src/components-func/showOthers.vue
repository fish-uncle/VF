<template>
    <div class="vf-control">
        <label>{{$t('admin_right_btn33')}}</label>
        <RadioGroup v-model="item.showStyle" type="button" size="large"
    
                    @on-change="value=>checkChange(!!value,'showText')">
            <Radio label="count">{{$t('admin_right_btn33_1')}}</Radio>
            <Radio label="string">{{$t('admin_right_btn33_2')}}</Radio>
        </RadioGroup>
        <editor v-model="item.code"
                @init="editorInit" theme="chrome" height="400"></editor>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
