<template>
  <a-row>
    <a-col :span="5"></a-col>
    <a-col :span="3">
      <a-menu
        mode="inline"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        @openChange="onOpenChange"
        @select="onSelect"
        class="side-menu"
      >
        <a-sub-menu key="creation">
          <template v-slot:title>
            <span><FormOutlined /><span>创作中心</span></span>
          </template>
          <a-menu-item key="CreationHome">主页</a-menu-item>
          <a-menu-item key="CreationWorkbench">工作台</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="knowledge">
          <template v-slot:title>
            <span><BulbOutlined /><span>知识库</span></span>
          </template>
          <a-menu-item key="CreationDoc">文档</a-menu-item>
          <a-menu-item key="CreationPic">图片</a-menu-item>
          <a-menu-item key="CreationVid">视频</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="other">
          <template v-slot:title>
            <span><SettingOutlined /><span>其他</span></span>
          </template>
          <a-menu-item key="CreationRecycle">回收站</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-col>
    <a-col :span="12">
      <component :is="currentComponent"></component>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import {
  FormOutlined,
  BulbOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

import CreationHome from "../components/CreationHome.vue";
import CreationWorkbench from "../components/CreationWorkbench.vue";
import CreationDoc from "../components/CreationDoc.vue";
import CreationPic from "../components/CreationPic.vue";
import CreationVid from "../components/CreationVid.vue";
import CreationRecycle from "../components/CreationRecycle.vue";
export default {
  name: "CreationContent",
  components: {
    FormOutlined,
    BulbOutlined,
    SettingOutlined,
    CreationHome,
    CreationWorkbench,
    CreationDoc,
    CreationPic,
    CreationVid,
    CreationRecycle,
  },
  data() {
    return {
      rootSubmenuKeys: ["creation", "knowledge", "other"],
      openKeys: ["creation", "knowledge", "other"],
      selectedKeys: ["CreationHome"],
      currentComponent: "CreationHome",
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    onSelect(selected) {
      this.currentComponent = selected.key;
    },
  },
};
</script>

<style scoped>
.side-menu {
  text-align: left;
  border: 1px solid rgb(240, 240, 240);
}
</style>