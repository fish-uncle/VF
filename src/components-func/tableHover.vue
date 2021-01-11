<template>
    <div class="vf-control">
        <label>{{$t('admin_right_btn38')}}</label>
        <RadioGroup :value="item.tableHover?1:0" type="button" size="large"
                    @on-change="value=>checkChange(!!value,'tableHover')">
            <Radio :label="1">{{$t('admin_right_btn13_1')}}</Radio>
            <Radio :label="0">{{$t('admin_right_btn13_2')}}</Radio>
        </RadioGroup>
    </div>
</template>
<script>
    import func from '../mixins/func'
    export default {
        mixins:[func],
    }
</script>
