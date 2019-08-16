<template>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="500px" @close="handleClose">
        
        <span slot="footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
        ep
    </el-dialog>
</template>
<script>
/**
 * @note 
 * @author chengzhenyu@corp.netease.com
 * @date 代码片段生成
 * @Last Modified by: chengzhenyu@corp.netease.com
 * @Last Modified time: 2019-07-16 16:39:26
 */
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            dialogVisible: false,
            onSubmit() {
                Object.assign(this.pageInfo, {
                    offset: 0
                });
                this.searchForm = Object.assign({},  this.form);
                // 只有查询时会同步到searchForm中，以免更改搜索条件，点击靠后的页码无数据
                this.search();
            },
            search() {
                let params = Object.assign({}, this.searchForm, this.pageInfo)
                // do search with params
                
            },
            sizeChange($event) {
                Object.assign(this.pageInfo, {
                    offset: 0,
                    limit: $event
                });
                this.search();
            },
            currentChange($event) {
                Object.assign(this.pageInfo, {
                    offset: ($event - 1) * this.pageInfo.limit
                });
                this.search();
            }
        }
    },
    created() {
        this.$mount();
        document.body.style.overflow = 'hidden';
        document.body.appendChild(this.$el);
    },
    methods: {
        confirm() {
            this.dialogVisible = false;
        },
        show() {
            this.dialogVisible = true;
        },
        close() {
            this.dialogVisible = false; //设置dialogVisible=false，会触发一次 el-dialog的close事件并由handleClose处理
        },
        handleClose() {
            this.$emit('close');
        },
    },
})
</script>