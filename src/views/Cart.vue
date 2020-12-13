<template>
  <div class="cart">
    <div class="container" v-if="this.$store.state.cart == 0">
      <div class="noitems">
      <h1 class="title">
        Your cart is empty! <br />
        <span>add more products Now</span>
      </h1>
      <router-link to="/" class="add-product">add product</router-link>
    </div>
    </div>
    <div class="container" v-else>
      <h1 class="title mb-5">Shopping Cart</h1>
      <table class="table borderless">
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td>
              <img
                :src="item.productImage"
                alt=""
                width="50px"
              />
            </td>
            <td><span class="product-title">{{ item.productTitle }}</span></td>
            <td>
              <ul class="list-style">
                <li class="list">
                  <span class="span"  @click.prevent="decreaseCounter(item)">-</span>
                </li>
                <li class="list number"><span>{{item.productQuantity}}</span></li>
                <li class="list">
                  <span class="span" @click.prevent="increaseCounter(item)">+</span>
                </li>
              </ul>
            </td>
            <td>
              <span class="price">{{ item.productprice }}</span>
              <span class="dolar">$</span>
            </td>
            <td>
              <button class="btn" @click="$store.commit('removeFromCart', item)">
                <svg
                  height="15pt"
                  viewBox="0 0 329.26933 329"
                  width="15pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <button class="continue" @click.prevent="goBack">
          <span>
            <svg width="15pt" height="15pt" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068
			l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
			l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
			c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g></svg>
          </span>
          <span class="text">Continue Shpping</span>
        </button>
        <div class="subtotal">
          <span class="text">Subtotal: <span class="number">${{Subtotaltotal}}</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    Subtotaltotal () {
      return this.cart.reduce((total, p) => {
        return total + p.productprice * p.productQuantity
      }, 0)
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Home' })
    },
    increaseCounter(item) {
      let found = this.cart.find((product) => product.productId == item.productId);
      found.productQuantity++
      this.$store.commit("saveData");
    },
    decreaseCounter(item) {
      let found = this.cart.find((product) => product.productId == item.productId);
      if(found.productQuantity === 1) {
        this.$store.commit('removeFromCart', found.productQuantityId); 
      } else {
        found.productQuantity--
      }
      this.$store.commit("saveData");
    },
  },
}
</script>


<style lang="scss">
.cart {
  background-color: #f1f1f1;
  border-radius: 10px;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  padding: 100px 0;
  .borderless td,
  .borderless th {
    border: none;
  }
  .title {
    color: #2c3e50;
  }
  table {
    border-bottom: 1px solid #dddddd;
    td {
      position: relative;
      .product-title {
        font-weight: bold;
        font-size: 18px;
        color: #2c3e50;
      }
      .price {
        font-weight: bold;
        font-size: 18px;
        color: #2c3e50;
      }
      .dolar {
        font-weight: bold;
        position: absolute;
        color: #2c3e50;
        top: 0;
        left: 0;
      }
      .list-style {
        list-style: none;
        display: flex;
        justify-content: center;
        .list {
          margin: 0 5px;
          span {
            font-weight: bold;
            font-size: 25px;
            color: #cccccc;
          }
          .span {
            cursor: pointer;
            color: #000000;
          }
        }
        .number {
          border: 1px solid #dddddd;
          border-radius: 5px;
          width: 40px;
          text-align: center;
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    .continue {
      border: none;
      background-color: transparent;
      span {
        margin: 0 5px;
      }
      .text {
        color: #0D26C6;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .subtotal {
      .text {
        font-size: 20px;
        color:  #aaaaaa;
        font-weight: bold;
        .number {
          color: #333333;
          font-size: 25px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
