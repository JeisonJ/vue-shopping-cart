<template lang="pug">
  #app
    nav-bar
    el-row( :gutter="20")
      el-col( :span="16")
        h1 Product List
        product-list
      el-col( :span="8")
        h2 Shopping Cart
        shopping-cart
        p: b Total Cost: {{ totalCost | currency }}
      
</template>

<script>
import { Store } from "./store/store"

export default {
  name: 'app',
  computed: {
    totalCost() {
      return Store.totalCost 
    }
  },
}
</script>

<style lang="scss">

body{ 
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

</style>
