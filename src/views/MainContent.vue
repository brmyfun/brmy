<template>
  <a-layout>
    <a-layout-header>
      <Navigation ref="navigation" @selectMenu="onSelectMenu" />
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