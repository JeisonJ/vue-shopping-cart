import Vue from 'vue'
import products from '../products'


export const Store = new Vue({
  data() {
    return {
      products,
      cart: []
    }
  },
  computed: {
    totalCost() {
      return this.cart.reduce((accum, product) => {
        return accum + product.details.price * product.quantity
      }, 0) 
    }
  },
  methods: {
    addToCart(product) {
      // El sku significa Stock Keeping Unit y es único para cada producto.
      const locationInCart = this.cart.findIndex(p => {
        return p.details.sku === product.sku
      })

      // Si locationInCart devuelve -1 indica que no encontro una coincidencia
      if (locationInCart === -1) {
        this.cart.push({
          details: product,
          quantity: 1
        })
      } else {
        this.cart[locationInCart].quantity++
      }

    },
    removeFromCart(sku) {
      const locationInCart = this.cart.findIndex(p => {
        return p.details.sku === product.sku
      })

      if (this.cart[locationInCart].quantity <= 1) {
        this.cart.splice(locationInCart, 1)
      } else {
        this.cart[locationInCart].quantity--
      }

    }
  },
})