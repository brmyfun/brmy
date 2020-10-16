<template>
  <div class="rank ant-card-bordered" v-if="hotList">
    <div class="rank-title">
      <h4 style="margin-block: 0">实时热榜</h4>
      <a href="javascript:void(0);"><span>更多</span></a>
    </div>

    <div class="hot-item">
      <ul>
        <li v-for="(hotItem, index) in hotList" :key="hotItem.uniquekey">
          <p class="overflow-single">
            <span class="hot-index">{{ index + 1 }}</span>
            <a :href="hotItem.url" target="_blank">{{ hotItem.title }}</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { hotRank } from "../api/api";
export default {
  name: "HotRank",
  data() {
    return {
      hotList: null,
    };
  },
  mounted() {
    hotRank({
      key: "6da65d306970802ae407f442f1e54d02",
      type: "top",
    })
      .then((res) => {
        if (res.result) {
          this.hotList = res.result.data.slice(0, 5);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.rank {
  margin-left: 12px;
  line-height: 48px;
}

.rank-title {
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.rank-title h4 {
  margin: 0;
  color: #ff7e67;
  font-size: 18px;
  font-weight: 700;
}

.rank-title a {
  color: #bebebe;
  margin-left: auto;
  text-decoration: none;
}

.hot-item {
  font-size: 14px;
  text-align: left;
  margin: 0 20px;
}

.hot-index {
  font-size: 16px;
  font-weight: 700;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
}

.hot-item ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.hot-item ul li {
  border-top: 1px solid #ebebeb;
}

.hot-item a {
  color: #444444;
  text-decoration: none;
}

.hot-item a:hover {
  color: #0084ff;
}

.overflow-single {
  width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  margin-bottom: 0;
}
</style>