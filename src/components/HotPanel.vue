<template>
  <div style="margin-top: 12px">
    <a-row type="flex" justify="space-between" :gutter="[12, 12]">
      <a-col :span="8">
        <HotCard hot="百度" :hotStyle="{ color: '#0090FE' }" :data="hotBaidu" />
      </a-col>

      <a-col :span="8">
        <HotCard
          hot="豆瓣"
          :hotStyle="{ color: '#228A31' }"
          :data="hotDouban"
        />
      </a-col>

      <a-col :span="8">
        <HotCard hot="微博" :hotStyle="{ color: '#FFBD43' }" :data="hotWeibo" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { hotEvents } from "../api/api";
import HotCard from "./HotCard.vue";
export default {
  name: "HotPanel",
  components: {
    HotCard,
  },
  data() {
    return {
      hotData: null,
      hotBaidu: null,
      hotDouban: null,
      hotWeibo: null,
    };
  },
  mounted() {
    this.loadHotEvents();
  },
  methods: {
    loadHotEvents() {
      hotEvents()
        .then((res) => {
          this.hotData = res.data;
          this.hotBaidu = this.hotData.baidu.slice(0, 5);
          this.hotDouban = this.hotData.douban.slice(0, 5);
          this.hotWeibo = this.hotData.weibo.slice(0, 5);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>