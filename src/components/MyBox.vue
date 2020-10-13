<template>
  <a-card>
    <a-card-grid class="list-item">
      <a-row>
        <a-col class="list-menu" :span="20">
          <span class="menu">
            <svg
              class="menu-icon"
              viewBox="0 0 1024 1024"
              width="16"
              height="16"
            >
              <path
                d="M752 939.2c-9.6 0-20.8-3.2-30.4-8l-208-104-209.6 104c-20.8 11.2-48 9.6-67.2-4.8-19.2-14.4-30.4-40-25.6-64l43.2-224L89.6 484.8C72 467.2 65.6 440 72 417.6c8-24 27.2-41.6 52.8-44.8l228.8-41.6 102.4-208c11.2-22.4 33.6-36.8 57.6-36.8s48 14.4 57.6 36.8l102.4 208 228.8 40c24 3.2 44.8 20.8 51.2 44.8 8 24 1.6 49.6-16 67.2L772.8 638.4l41.6 224c4.8 25.6-6.4 49.6-25.6 64-9.6 8-22.4 12.8-36.8 12.8z"
              ></path>
            </svg>
          </span>
          <span>我的收藏</span>
        </a-col>

        <a-col class="list-badge" :span="4">
          <a-badge count="109" :number-style="{ backgroundColor: '#52c41a' }" />
        </a-col>
      </a-row>
    </a-card-grid>
    <a-card-grid class="list-item">
      <a-row>
        <a-col class="list-menu" :span="20">
          <span class="menu">
            <svg
              class="menu-icon"
              viewBox="0 0 1204 1024"
              width="16"
              height="16"
            >
              <path
                d="M795.648 83.365647A269.552941 269.552941 0 0 0 596.329412 167.454118l-31.984941 39.936-31.924706-37.526589a271.781647 271.781647 0 0 0-199.619765-86.497882A296.598588 296.598588 0 0 0 122.398118 169.863529a294.249412 294.249412 0 0 0 0 417.912471l394.962823 395.625412a66.258824 66.258824 0 0 0 93.906824 0L1005.929412 587.836235a294.128941 294.128941 0 0 0 0-417.91247 296.598588 296.598588 0 0 0-210.401883-86.558118z"
              ></path>
            </svg>
          </span>
          <span>我的关注</span>
        </a-col>

        <a-col class="list-badge" :span="4">
          <a-badge count="109" :number-style="{ backgroundColor: '#52c41a' }" />
        </a-col>
      </a-row>
    </a-card-grid>
  </a-card>
</template>

<script>
export default {
  name: "MyBox",
};
</script>

<style scoped>
.ant-card {
  margin-left: 12px;
}

.list-item {
  width: 100%;
  cursor: pointer;
}

.list-menu {
  text-align: left;
}

.list-badge {
  text-align: right;
}

.menu {
  vertical-align: middle;
  margin-right: 14px;
}

.menu-icon {
  fill: #909dc2;
}

.list-item:hover .menu-icon {
  fill: #0084ff;
}

.list-item:hover {
  color: #0084ff;
}
</style>