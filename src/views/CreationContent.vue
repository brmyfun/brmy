<template>
  <a-row>
    <a-col :span="4"></a-col>
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
    <a-col :span="10">
      <component :is="currentComponent"></component>
    </a-col>
    <a-col :span="3">
      <a-card
        title="快捷导航"
        :headStyle="{ textAlign: 'left', fontSize: '14px' }"
        :bodyStyle="{ textAlign: 'left', padding: '8px 0' }"
      >
        <template v-slot:extra
          ><a href="javascript:void(0);" @click="addNavi">添加</a></template
        >
        <a-modal
          v-model:visible="visible"
          title="添加快捷导航"
          ok-text="确定"
          cancel-text="取消"
          @ok="handleOk"
          :bodyStyle="{ padding: '24px 24px 0 24px' }"
        >
          <a-form layout="vertical">
            <a-form-item label="标题">
              <a-input placeholder="请输入导航标题" />
            </a-form-item>
            <a-form-item label="URL地址">
              <a-input placeholder="请输入URL地址" />
            </a-form-item>
          </a-form>
        </a-modal>
        <ul class="nav-menu">
          <li>
            <GoogleOutlined :style="menuIconStyle" />
            <span>谷歌</span>
            <a-tooltip placement="right">
              <template v-slot:title>
                <span>删除</span>
              </template>
              <DeleteOutlined class="trash" />
            </a-tooltip>
          </li>
          <li>
            <GithubOutlined :style="menuIconStyle" />
            <span>GitHub</span>
            <a-tooltip placement="right">
              <template v-slot:title>
                <span>删除</span>
              </template>
              <DeleteOutlined class="trash" />
            </a-tooltip>
          </li>
        </ul>
      </a-card>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import {
  FormOutlined,
  BulbOutlined,
  SettingOutlined,
  GoogleOutlined,
  GithubOutlined,
  DeleteOutlined,
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
    GoogleOutlined,
    GithubOutlined,
    DeleteOutlined,
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
      menuIconStyle: {
        fontSize: "20px",
        marginRight: "12px",
      },
      visible: false,
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
    addNavi() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.side-menu {
  text-align: left;
  border: 1px solid rgb(240, 240, 240);
}

.nav-menu {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu li {
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-menu li:hover {
  background: #e6f7ff;
  color: #1890ff;
}

.nav-menu li .trash {
  opacity: 0;
  margin-left: auto;
}

.nav-menu li:hover .trash {
  opacity: 1;
}
</style>