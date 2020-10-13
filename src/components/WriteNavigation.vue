<template>
  <a-row id="nav" type="flex" align="middle">
    <a-col :span="4" align="right">
      <a href="/" id="logo">
        <img src="../assets/logo.png" height="36" alt="logo" />
      </a>
    </a-col>
    <a-col :span="1"></a-col>
    <a-col :span="6" align="left">
      <a-menu
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        @select="onSelect"
        style="border-width: 0px; font-size: 15px"
      >
        <a-menu-item key="WriteArticle">写文章</a-menu-item>
        <a-menu-item key="WriteBrmy">写梦语</a-menu-item>
        <a-menu-item key="MaterialLibrary">素材库</a-menu-item>
        <a-menu-item key="DraftBox">草稿箱</a-menu-item>
      </a-menu>
    </a-col>
    <a-col :span="4"></a-col>
    <a-col :span="5">
      <a-dropdown-button
        type="primary"
        @click="preview"
        v-if="
          selectedKeys[0] === 'WriteArticle' || selectedKeys[0] === 'WriteBrmy'
        "
      >
        预览
        <template v-slot:overlay>
          <a-menu>
            <a-menu-item key="publish-public"
              ><UnlockOutlined />公开发布</a-menu-item
            >
            <a-menu-item key="publish-private"
              ><LockOutlined />私有发布</a-menu-item
            >
          </a-menu>
        </template>
        <template v-slot:icon><DownOutlined /></template>
      </a-dropdown-button>

      <a-button
        type="primary"
        @click="upload"
        v-if="selectedKeys[0] === 'MaterialLibrary'"
        >上传</a-button
      >
    </a-col>
    <a-col :span="4" align="left">
      <a-popover placement="bottom" v-model:visible="visible" trigger="click">
        <template v-slot:content>
          <UserDropdownMenu @close="onCloseUserDropdownMenu"></UserDropdownMenu>
        </template>
        <div style="height: 100%; width: 40px; cursor: pointer">
          <a-avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
      </a-popover>
    </a-col>
  </a-row>
</template>

<script>
import {
  DownOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons-vue";
import UserDropdownMenu from "../components/UserDropdownMenu.vue";
export default {
  name: "WriteNavigation",
  components: {
    DownOutlined,
    LockOutlined,
    UnlockOutlined,
    UserDropdownMenu,
  },
  data() {
    return {
      selectedKeys: ["WriteArticle"],
      visible: false,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    onSelect(selected) {
      this.selectedKeys[0] = selected.key;
      this.$emit("selectMenu", this.selectedKeys[0]);
    },
    onCloseUserDropdownMenu(closedMenu) {
      this.visible = false;
      // 1. 赋值
      this.selectedKeys[0] = closedMenu;
      // 2. 通知
      this.$emit("selectMenu", this.selectedKeys[0]);
    },
    preview(e) {
      // 预览,通知父组件调用子组件的preview方法
      this.$emit("clickPreview", this.selectedKeys[0]);
    },
    upload(e) {
      // 上传,通知父组件调用上传方法
      this.$emit("clickUpload", this.selectedKeys[0]);
    },
  },
  emits: ["selectMenu", "clickPreview", "clickUpload"],
  watch: {
    current(newVal, oldVal) {
      this.$emit("selectMenu", this.selectedKeys[0]);
    },
  },
};
</script>

<style scoped>
#nav {
  height: 64px;
}
</style>