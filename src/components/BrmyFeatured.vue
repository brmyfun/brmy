<template>
  <a-row>
    <a-col>
      <h2 style="line-height: 72px; margin: 0">梦语精选</h2>
    </a-col>
  </a-row>
  <a-row type="flex" justify="space-between" :gutter="[12, 12]">
    <a-col :span="8" v-for="(item, index) in featureds" :key="index">
      <BrmyFeaturedCard
        :cover="item.cover"
        :title="item.title"
        :desc="item.desc"
        :participants="participants"
        :followers="120"
        :tags="item.tags"
      />
    </a-col>
  </a-row>
</template>
<script>
import BrmyFeaturedCard from "../components/BrmyFeaturedCard.vue";
const featureds = [
  {
    cover: "https://cdn.sspai.com/editor/u_nicholaszhang/15921386876469.jpg",
    title: "妈妈再也不用担心我的脖子酸了",
    desc:
      "想必你也会经常有「长时间低头看手机」和「长时间仰头看电脑」两种情况，他们都会导致颈部后侧的酸痛。",
    tags: ["办公室", "减肥", "健身"],
  },
  {
    cover:
      "https://cdn.sspai.com/article/07f68a07-f318-81b1-78a8-0d8554368e4b.jpg",
    title: "我的英语学习之路",
    desc: "我来自一个小县城，从我记事起，就觉得这个县城被英语诅咒了。",
    tags: ["学习", "英语", "坚持"],
  },
  {
    cover:
      "https://cdn.sspai.com/article/1880455f-3264-1603-aa51-ed53bf458f84.jpg",
    title: "现在开始整理文件吧",
    desc:
      "我们每天都要接触许多文件——不同时间、不同类型、不同用途的文件。Windows 作为 PC 占有率最高的系统，也是生产力的代名词。",
    tags: ["文件", "技巧", "整理"],
  },
  {
    cover:
      "https://cdn.sspai.com/article/cb15b009-d17b-f670-63b0-e9cd5b751f6e.jpg",
    title: "如何用 Markdown 写论文？",
    desc:
      "自从我学会了如何在数字文档上用红笔写写画画，跟学生合写文章和指导毕业论文的工作就变得轻松多了。",
    tags: ["学习", "技巧", "论文"],
  },
];
export default {
  name: "BrmyFeatured",
  components: {
    BrmyFeaturedCard,
  },
  data() {
    return {
      featureds: featureds,
      participants: [
        "https://www.beihaiting.com/uploads/allimg/140110/10723-1401101559212F.jpg",
        "https://tse3-mm.cn.bing.net/th/id/OIP.gA_mYYykcavjaPNZbn3i2QAAAA?pid=Api&rs=1",
        "https://tse2-mm.cn.bing.net/th/id/OIP._v2nsVYWJfArMRbzgCFe6AAAAA?pid=Api&rs=1",
      ],
    };
  },
};
</script>

<style scoped>
.ant-row {
  text-align: left;
}
</style>