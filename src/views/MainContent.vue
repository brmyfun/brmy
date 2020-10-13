<template>
  <a-layout>
    <a-layout-header>
      <Navigation @selectMenu="onSelectMenu" />
    </a-layout-header>
    <a-layout-content>
      <div style="margin-top: 12px">
        <component :is="currentComponent"></component>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import Navigation from "../components/Navigation.vue";
import HomeContent from "./HomeContent.vue";
import BrmyContent from "./BrmyContent.vue";
import RankContent from "./RankContent.vue";
import GoodsContent from "./GoodsContent.vue";
import AboutContent from "./AboutContent.vue";
import CreationContent from "./CreationContent.vue";
import MyContent from "./MyContent.vue";

export default {
  name: "MainContent",
  components: {
    Navigation,
    HomeContent,
    BrmyContent,
    RankContent,
    GoodsContent,
    AboutContent,
    CreationContent,
    MyContent,
  },
  data() {
    return {
      currentComponent: "HomeContent",
    };
  },
  methods: {
    onSelectMenu(selectedMenu) {
      this.currentComponent = selectedMenu;
    },
  },
};
</script>