<template>
    <div>
        <p class="showMsg">{{fetchData}}</p>
        <button @click="fetchEvent">点击我!!</button>
    </div>
</template>

<script>

    export default {
        name: 'Fetch',
        data() {
            return {
                fetchData: '点击按钮'
            }
        },
        methods: {
            fetchEvent() {
                console.log(23123);
                // wx.request({
                //     url: 'http://localhost/data',
                //     success(res) {
                //         console.log(res);
                //     },
                //     fail() {
                //         console.log('失败');
                //     }
                // })
            }
        }
    }
</script>

<style scoped>

</style>
