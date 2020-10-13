<template>
  <a-card hoverable :bodyStyle="{ textAlign: 'left', padding: '0' }">
    <template v-slot:cover>
      <img
        alt="example"
        src="https://desk-fd.zol-img.com.cn/g2/M00/0A/07/ChMlWl7MlGaIFWqbABCdcTo-UEkAAPe8AGqUoMAEJ2J441.jpg"
      />
    </template>
    <div class="card-body">
      <img
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      <div class="name">白日梦语</div>
      <div class="description">爱做梦的蓝孩子运气都不会太差</div>
      <div class="location">
        <div style="padding-right: 4px">
          <EnvironmentOutlined />
        </div>

        <div>江苏 苏州</div>
      </div>
    </div>
    <template class="ant-card-actions" v-slot:actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
  </a-card>
</template>
<script>
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "UserCard",
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    EnvironmentOutlined,
  },
};
</script>
<style scoped>
.ant-card {
  margin-left: 12px;
}

.card-body {
  position: relative;
}

.card-body img {
  height: 96px;
  width: 96px;
  border-radius: 5px;
  border: 4px solid rgba(255, 255, 255, 0.8);
  position: absolute;
  top: -48px;
  left: 50%;
  margin-left: -48px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2);
  background: ghostwhite;
}

.name {
  font-size: 24px;
  text-align: center;
  padding-top: 64px;
  margin-bottom: 12px;
}

.description {
  line-height: 1.5;
  text-align: center;
  margin-bottom: 12px;
}

.location {
  font-size: 12px;
  padding: 8px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>