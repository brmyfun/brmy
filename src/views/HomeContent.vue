<template>
  <a-row>
    <a-col :span="5"></a-col>
    <a-col :span="10">
      <BlogCard :articles="articles"></BlogCard>
    </a-col>
    <a-col :span="5">
      <a-row class="sider-row">
        <a-col>
          <ToolBox></ToolBox>
        </a-col>
      </a-row>

      <a-row class="sider-row">
        <a-col>
          <MyBox></MyBox>
        </a-col>
      </a-row>

      <a-row class="sider-row">
        <a-col>
          <HotRank></HotRank>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import BlogCard from "../components/BlogCard.vue";
import ToolBox from "../components/ToolBox.vue";
import MyBox from "../components/MyBox.vue";
import HotRank from "../components/HotRank.vue";
export default {
  name: "HomeContent",
  components: {
    BlogCard,
    ToolBox,
    MyBox,
    HotRank,
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
</style>