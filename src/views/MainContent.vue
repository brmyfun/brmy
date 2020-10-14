<template>
  <a-layout>
    <a-layout-header>
      <Navigation @selectMenu="onSelectMenu" />
    </a-layout-header>
    <a-layout-content>
      <div style="margin-top: 12px">
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "MainContent",
  components: {
    Navigation,
  },
  data() {
    return {
      currentComponent: "HomeContent",
    };
  },
  watch: {
    $route(to, from) {
      if (to.path === "/") {
        this.$router.push({
          name: this.currentComponent,
        });
      }
    },
  },
  methods: {
    onSelectMenu(selectedMenu) {
      this.currentComponent = selectedMenu;
      this.$router.push({
        name: this.currentComponent,
      });
    },
  },
};
</script>