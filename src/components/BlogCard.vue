<template>
  <a-card
    hoverable
    :loading="loading"
    :bodyStyle="{ padding: '8px' }"
    v-for="article in articles"
    :key="article.id"
  >
    <div class="blog-card">
      <div class="blog-cover">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          alt="card"
        />
      </div>
      <div class="blog-content">
        <div>
          <h4 class="blog-category">{{ article.category }}</h4>
          <h3 class="blog-title overflow-single">
            让风格与穿搭都了然于心：极简实践者的「胶囊衣橱」你值得拥有
          </h3>
          <p class="blog-description overflow-multi">
            2020年，作为一个十年的开端，已经蓬勃发展的互联网经济和在线购物平台虽然给我们生活带来了无尽的便利，「动动手指便可得」的便利让我们在购买时思考得更少。衣物作为我们日常消费品中的一个大类，也为我们的生活制造了难题。我们越来越轻易地拥有新衣服，却也陷入了同质化的困境，被迫在穿衣这件事上花掉大量的精力和时间，还造成了不必要的浪费。
          </p>
        </div>
        <div style="border-top: 1px solid #ebebeb"></div>

        <div class="blog-extra">
          <div class="blog-author">
            <img src="../assets/avatar.jpg" alt="" />
            <span>By 白日梦语</span>
          </div>

          <div class="blog-analysis">
            <LikeOutlined :style="{ fontSize: '16px' }"></LikeOutlined>
            <span style="margin-left: 8px">200</span>
            <StarOutlined :style="{ fontSize: '16px' }"></StarOutlined>
            <span style="margin-left: 8px">50</span>
            <CommentOutlined :style="{ fontSize: '16px' }"></CommentOutlined>
            <span style="margin-left: 8px">14</span>
          </div>
        </div>
      </div>
    </div>
  </a-card>
</template>
<script>
import {
  CommentOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "BlogCard",
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  components: {
    CommentOutlined,
    LikeOutlined,
    StarOutlined,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style scoped>
.ant-card {
  margin-bottom: 12px;
}

.blog-card {
  height: 160px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
}

.blog-cover img {
  width: 100%;
  height: 100%;
  max-height: 160px;
  object-fit: cover;
}

.blog-content {
  text-align: left;
  padding-left: 8px;
}

.blog-category {
  margin: 0;
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 2px;
  display: inline-block;
  text-transform: uppercase;
  border-bottom: 2px solid #ebebeb;
}

.blog-title {
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.2;
  color: #121212;
  font-weight: 700;
}

.blog-title:hover {
  color: #1b6ca8;
  transition: color 0.3s ease;
}

.blog-description {
  margin: 8px 0;
  line-height: 2;
  font-size: 12px;
}

.overflow-single {
  width: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.overflow-multi {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.blog-extra {
  display: flex;
  padding-top: 14px;
  text-align: center;
  align-items: center;
}

.blog-extra span {
  line-height: 1;
  font-size: 10px;
  margin-left: 10px;
}

.blog-author {
  display: flex;
  align-items: center;
}

.blog-author img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.blog-analysis {
  display: flex;
  align-items: center;
  margin-left: auto;
}
</style>