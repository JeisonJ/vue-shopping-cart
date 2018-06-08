<template lang="pug">
  el-table( :data="cart" stripe style="width: 100%")
    el-table-column( :prop="details.name" label="Item Name")
    el-table-column( label="Price")
      template(slot-scope="scope") {{ scope.row.details.price | currency }}
    el-table-column( :prop="quantity" label="Quantity")
    el-table-column( label="")
      template(slot-scope="scope")
        el-button(type="danger" icon="minus" @click="addToCart(scope.row.details)" size="mini")

</template>

<script>
import { Store } from '../store/store'

export default {
  computed: {
    cart() {
      return Store.$data.cart
    }
  },
  methods: {
    removeFromCart(sku) {
      Store.removeFromCart(sku)
    },
    addToCart(product) {
      Store.addToCart(product)
    }
  },
}
</script>

<style scoped>

</style>