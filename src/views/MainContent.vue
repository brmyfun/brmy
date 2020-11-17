<template>
  <a-layout>
    <a-layout-header>
      <Navigation
        ref="navigation"
        :selectedKeys="selectedKeys"
        @selectMenu="onSelectMenu"
      />
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
export default {
  name: "MainContent",
  components: {
    Navigation,
  },
  data() {
    return {
      selectedKeys: ["HomeContent"],
      currentComponent: "HomeContent",
    };
  },
  mounted() {
    // 如果当前路由是根目录则选择HomeContent子组件
    if (this.$route.path === "/") {
      this.$router.push({
        name: this.currentComponent,
      });
    } else {
      // 刷新时根据路由信息确定当前子组件,并调用子组件方法改变菜单选项
      this.$refs.navigation.changeSelectedKey(this.$route.name);
    }
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

<style scoped>
.ant-layout-header {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>