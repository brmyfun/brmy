<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-row>
      <a-col :span="16">
        <a-carousel autoplay :autoplaySpeed="5000">
          <div v-for="(bannerImg, index) in bannerImgs" :key="index">
            <img class="banner-img" :src="bannerImg" />
          </div>
        </a-carousel>
      </a-col>
      <a-col :span="8">
        <div class="brmy-today">
          <a-card
            title="今日梦语"
            :bordered="false"
            :headStyle="{ fontWeight: '200' }"
          >
            <template v-slot:extra>
              <a href="javascript:void(0);" style="color: #bebebe">往期</a>
            </template>

            <div class="brmy-content">
              <h2>和我一起动起来吧！</h2>
              <p>
                或许在办公室里的小运动没法让你快速拥有马甲线，却可以让你一点点远离小肚腩，可以让你减少神经压迫所带来的头晕眼花，甚至可以让你不用去健身房，依旧能保持一点小翘臀。
              </p>
              <div class="brmy-tags">
                <p>
                  <a-tag>
                    <TagOutlined />
                    <span style="margin-left: 5px">#办公室</span>
                  </a-tag>

                  <a-tag>
                    <TagOutlined />
                    <span style="margin-left: 5px">#锻炼</span>
                  </a-tag>

                  <a-tag>
                    <TagOutlined />
                    <span style="margin-left: 5px">#减肥</span>
                  </a-tag>
                </p>
              </div>
            </div>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
const bgImgs = [
  "https://cdn.sspai.com/article/68449009-38e3-1bb1-2e38-df18cf6ab8d3.jpg",
  "https://cdn.sspai.com/article/38bb142a-867c-6da2-fcf8-cb24932136d5.jpg",
  "https://cdn.sspai.com/article/a4d53a98-3925-b174-eaa3-67d9f27c32f5.jpg",
  "https://cdn.sspai.com/article/7180c9a5-9d31-8b03-5bc6-507f15e5b16b.jpg",
];

import { TagOutlined } from "@ant-design/icons-vue";
export default {
  name: "Banner",
  components: { TagOutlined },
  data() {
    return {
      bannerImgs: bgImgs,
    };
  },
};
</script>

<style scoped>
.ant-carousel ::v-deep(.slick-slide) {
  text-align: center;
  height: 320px;
  overflow: hidden;
}

.ant-carousel ::v-deep(.slick-slide h3) {
  color: #fff;
}

.banner-img {
  width: 100%;
  height: 100%;
  max-height: 320px;
  object-fit: cover;
  cursor: pointer;
}

.brmy-today {
  text-align: left;
}

.brmy-today .ant-card {
  height: 320px;
  margin-left: 20px;
}

.brmy-content h2 {
  font-weight: 500;
  cursor: pointer;
}
</style>