<template>
    <table-component :table-data="tableData"></table-component>
</template>
<script>
import TableComponent from '@c/table'
export default {
    components:{
        TableComponent
    },
    data(){
        return {
            tableData:[{
                name: "测试",
                number: "1211111",
                mechNo: "01",
                account: "0001",
                province: "11",
                startTime: 1563592399000,
                creator:'logmei',
                title: "测试"
                },
                {
                name: "测试1",
                number: "1211221",
                mechNo: "02",
                account: "0002",
                province: "12",
                startTime: 1563592399000,
                creator:'logmei',
                title: "测试2"
                } 
            ]
        }
    }
}
</script>

