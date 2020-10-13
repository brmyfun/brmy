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
        <a-menu-item key="HomeContent">首页</a-menu-item>
        <a-menu-item key="BrmyContent">梦语</a-menu-item>
        <a-menu-item key="RankContent">热榜</a-menu-item>
        <a-menu-item key="GoodsContent">好物</a-menu-item>
        <a-menu-item key="AboutContent">关于</a-menu-item>
      </a-menu>
    </a-col>
    <a-col :span="4">
      <a-input-search placeholder="请输入搜索内容" />
    </a-col>
    <a-col :span="5">
      <a-dropdown-button type="primary" @click="writeArticle">
        写文章
        <template v-slot:overlay>
          <a-menu>
            <a-menu-item key="write-brmy"><EditOutlined />写梦语</a-menu-item>
          </a-menu>
        </template>
        <template v-slot:icon><DownOutlined /></template>
      </a-dropdown-button>
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
  UserOutlined,
  EditOutlined,
  PoweroffOutlined,
} from "@ant-design/icons-vue";
import UserDropdownMenu from "../components/UserDropdownMenu.vue";
export default {
  name: "Navigation",
  components: {
    DownOutlined,
    UserOutlined,
    EditOutlined,
    PoweroffOutlined,
    UserDropdownMenu,
  },
  data() {
    return {
      selectedKeys: ["HomeContent"],
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
    writeArticle(e) {
      this.$router.push("/write");
    },
  },
  emits: ["selectMenu"],
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