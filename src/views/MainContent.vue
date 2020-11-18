<template>
  <a-layout>
    <a-layout-header>
      <Navigation ref="navigation" @selectMenu="onSelectMenu" />
    </a-layout-header>
    <a-layout-content>
      <div style="margin-top: 76px">
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import Navigation from "../components/Navigation.vue";
const coms = [
  "HomeContent",
  "BrmyContent",
  "RankContent",
  "GoodsContent",
  "AboutContent",
];
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
  mounted() {
    this.$refs.navigation.selectedKeys = ["HomeContent"];
  },
  methods: {
    onSelectMenu(selectedMenu) {
      this.currentComponent = selectedMenu;
      this.$router.push({
        name: this.currentComponent,
      });
    },
  },
  watch: {
    $route(to, from) {
      if (coms.indexOf(to.name) === -1) {
        this.$refs.navigation.selectedKeys = [""];
      }
    },
  },
};
</script>

<style scoped>
.ant-layout-header {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>