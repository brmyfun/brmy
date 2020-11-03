<template>
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
</template>
<script>
import {
  GoogleOutlined,
  GithubOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "QuickNavigation",
  components: {
    GoogleOutlined,
    GithubOutlined,
    DeleteOutlined,
  },
  data() {
    return {
      menuIconStyle: {
        fontSize: "20px",
        marginRight: "12px",
      },
      visible: false,
    };
  },
  methods: {
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