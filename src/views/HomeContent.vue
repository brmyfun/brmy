<template>
  <a-row>
    <a-col :span="4"></a-col>
    <a-col :span="11">
      <Banner />
      <BlogCard :articles="articles"></BlogCard>
    </a-col>
    <a-col :span="5">
      <a-row class="sider-row">
        <a-col :span="24">
          <ToolBox></ToolBox>
        </a-col>
      </a-row>

      <a-row class="sider-row">
        <a-col :span="24">
          <MyBox></MyBox>
        </a-col>
      </a-row>

      <a-row class="sider-row">
        <a-col>
          <HotRankV3></HotRankV3>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="24">
          <div class="wechat"></div>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import Banner from "../components/Banner.vue";
import BlogCard from "../components/BlogCard.vue";
import ToolBox from "../components/ToolBox.vue";
import MyBox from "../components/MyBox.vue";
import HotRankV3 from "../components/HotRankV3.vue";
export default {
  name: "HomeContent",
  components: {
    Banner,
    BlogCard,
    ToolBox,
    MyBox,
    HotRankV3,
  },
  data() {
    return {
      articles: [
        {
          id: "1",
          category: "穿搭",
        },
        {
          id: "2",
          category: "旅游",
        },
        {
          id: "3",
          category: "风景",
        },
        {
          id: "4",
          category: "地理",
        },
        {
          id: "5",
          category: "杂谈",
        },
        {
          id: "6",
          category: "感悟",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sider-row {
  margin-bottom: 12px;
}

.wechat {
  color: #428077;
  background: #d8ebe4
    url(https://gw.alipayobjects.com/zos/basement_prod/6cdd01ca-008e-47f9-a72e-710402ab4589.svg)
    100% 100% no-repeat;
  border-radius: 4px;
  padding: 12px;
  margin-left: 12px;
  height: 120px;
}
</style>