<template>
  <div id="app" :class="{ 'theme-dark': nightMode }">
    <TheHeader />
    <nav>
      <i
        class="fas fa-sun icon-sun"
        v-if="nightMode"
        @click="nightMode = !nightMode"
      ></i>
      <i
        class="fas fa-moon icon-moon"
        v-else
        @click="nightMode = !nightMode"
      ></i>
    </nav>
    <router-view />
  </div>
</template>


<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      nightMode: false,
    };
  },
  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  color: #333;
  nav {
    position: relative;
    height: 50px;
    i {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.6rem;
      cursor: pointer;
    }
    .icon-sun {
      color: #fcda5f;
    }
    .icon-moon {
      color: #041b37;
    }
  }
  .card {
    border: 1px solid #dddddd;
    -webkit-box-shadow: 3px 10px 5px -2px rgba(143,132,143,0.74);
    -moz-box-shadow: 3px 10px 5px -2px rgba(143,132,143,0.74);
    box-shadow: 3px 10px 5px -2px rgba(143,132,143,0.74);
  }
  &.theme-dark {
    background-color: #333;
    .card {
      border: none;
      box-shadow: none;
      .card-body {
        .card-title,.card-text {
          color: #041b37;
        }
      }
    }
    article {
      background-color: #222;
      border: 1px solid #555;
    }
  }
}
</style>
</style>
