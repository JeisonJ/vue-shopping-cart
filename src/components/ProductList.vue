<template lang="pug">
  el-row
    //- el-col( :span="12" v-for="product, index) in products" :key="product.sku")
    //-   el-card
    //-     img( :src="product.images[0]" class="image")
    //-     span( v-text="product.name")
    //-     span {{ product.price | currency }}
    //-     .bottom.clearfix
    //-       el-button(type="info" @click="addToCart(product)") Add to cart

    el-col( :span="8" v-for="product, index) in products" :key="product.sku")
      el-card( :body-style="{ padding: '0px' }")
        img( :src="product.images[0]" class="image")
        div(style="padding: 14px")
          span( v-text="product.name")
          .bottom.clearfix
            span(class="price") {{ product.price | currency }}
            el-button(type="info" @click="addToCart(product)") Add to cart

</template>

<script>
import { Store } from "../store/store"

export default {
  data () {
    return {
      products: Store.$data.products
    }
  },
  methods: {
    addToCart(product) {
      Store.addToCart(product)
    }
  },
}
</script>

<style scoped>

.image {
  width: 100%;
  display: block;
}

.el-card__body span {
  font-size: 0.7rem;
}

.price {
  font-size: 13px;
  color: #999;
}

.button {
  padding: 0;
  float: right;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

</style>