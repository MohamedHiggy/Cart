<template>
  <header>
    <ul class="list-style">
      <li class="list">
        <router-link to="/" class="nav-link" active-class="active" exact>
          shop
        </router-link>
      </li>
      <li class="list">
        <router-link to="/cart" class="nav-link" active-class="active">
          cart
          <span class="badge badge-light">{{count}}</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    
  computed: {
    ...mapGetters({
      count: "cartCount"
    }),
  }
};
</script>

<style lang="scss" scoped>
header {
    color: #2c3e50;
    padding: 10px 0;
    background-color:#f1f1f1;
    .list-style {
        width: fit-content;
        margin: 0 auto;
        list-style: none;
        display: flex;
        padding: 5px 10px;
        .list {
            margin: 0 15px;
            border-radius: 5px;
            padding: 5px;
            .nav-link {
                text-decoration: none;
                font-weight: bold;
                font-size: 20px;
                color: #606060;
                position: relative;
                width: 80px;
                .badge {
                  position: absolute;
                  border-radius: 50%;
                  top: 0;
                  right: 0;
                  width: fit-content;
                }
                &.router-link-exact-active {
                    text-decoration: underline;
                    color: #333333;
                }
            }
        }
    }
}
</style>
