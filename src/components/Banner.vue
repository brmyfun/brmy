<template>
  <a-card :bodyStyle="{ padding: '0' }">
    <a-row>
      <a-col :span="14">
        <div
          class="banner-left"
          :style="{
            backgroundImage: 'url(' + bgBanner + ')',
            backgroundSize: 'cover',
          }"
        >
          <div class="banner-content">
            <div class="bg-content">
              <h2>树形控件在生产力工具中的设计</h2>
              <p>白日梦语 发布于 语梦录 2020-10-16 11:23:40</p>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="10">
        <BannerRank />
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
import BannerRank from "../components/BannerRank.vue";
export default {
  name: "Banner",
  components: {
    BannerRank,
  },
  data() {
    return {
      bgBanner:
        "https://desk-fd.zol-img.com.cn/t_s1366x768c5/g3/M02/0E/0A/ChMlV17oL8mIEkuKADll2sOJKRgAAUz_QKvNd8AOWXy445.jpg",
    };
  },
};
</script>

<style scoped>
.ant-card {
  border: none;
}

.banner-left {
  width: 100%;
  height: 100%;
  min-height: 290px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;

  z-index: -10;
}

.banner-content {
  height: 290px;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.bg-content {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

.banner-content h2 {
  font-weight: 700;

  color: #fff;
  margin: 0;
  padding: 0 12px;
}

.banner-content p {
  color: ivory;
  margin: 0;
  padding: 0 12px 8px;
}
</style>