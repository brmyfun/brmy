<template>
  <div class="rank" v-if="hotList">
    <div class="rank-title">
      <h4 style="margin-block: 0">精选文集</h4>
      <a href="javascript:void(0);"><span>更多</span></a>
    </div>

    <div class="hot-item">
      <ul>
        <li v-for="(hotItem, index) in hotList" :key="hotItem.uniquekey">
          <div>
            <span class="hot-index">{{ index + 1 }}</span>
          </div>
          <div>
            <p class="overflow-single">
              <a :href="hotItem.url" target="_blank" :title="hotItem.title">
                {{ hotItem.title }}
              </a>
            </p>
            <p class="hot-footer">
              <span>来自</span> {{ hotItem.author_name }}
            </p>
          </div>

          <div class="hot-cover">
            <img :src="hotItem.thumbnail_pic_s" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { hotRank } from "../api/api";

const hotList = [
  {
    uniquekey: "3d51e1797b8d80d77ce5e2ce6cfba3bd",
    title: "中国控制住疫情后 日本政府却加大支持企业搬离中国",
    date: "2020-10-16 09:14",
    category: "头条",
    author_name: "环球网",
    url: "https://mini.eastday.com/mobile/201016091413248.html",
    thumbnail_pic_s:
      "https://04imgmini.eastday.com/mobile/20201016/20201016091413_fa983ef43278acc22e397bf51aaae2bd_1_mwpm_03200403.jpg",
  },
  {
    uniquekey: "f49d26607258b690943423750b8333f3",
    title: "张镇麟坐稳主力 辽篮新赛季12人名单呼之欲出",
    date: "2020-10-16 09:10",
    category: "头条",
    author_name: "辽宁日报",
    url: "https://mini.eastday.com/mobile/201016091053530.html",
    thumbnail_pic_s:
      "https://02imgmini.eastday.com/mobile/20201016/20201016091053_0bcda15fdc1d3fbf058a54d98fa9ed69_1_mwpm_03200403.jpg",
  },
  {
    uniquekey: "e6ce7cf6f679f199427fc09f7c832baf",
    title: "这个蒸菜还是小时候的味道，我自己能吃一盘子",
    date: "2020-10-16 09:02",
    category: "头条",
    author_name: "乡土河南",
    url: "https://mini.eastday.com/mobile/201016090219949.html",
    thumbnail_pic_s:
      "https://07imgmini.eastday.com/mobile/20201016/20201016090219_f5981319236c1b5ed6e9b61d20ef40ec_4_mwpm_03200403.jpg",
    thumbnail_pic_s02:
      "http://07imgmini.eastday.com/mobile/20201016/20201016090219_f5981319236c1b5ed6e9b61d20ef40ec_3_mwpm_03200403.jpg",
    thumbnail_pic_s03:
      "http://07imgmini.eastday.com/mobile/20201016/20201016090219_f5981319236c1b5ed6e9b61d20ef40ec_11_mwpm_03200403.jpg",
  },
];

export default {
  name: "BannerRank",
  data() {
    return {
      hotList: hotList,
    };
  },
};
</script>
<style scoped>
.rank {
  line-height: 48px;
}

.rank-title {
  display: flex;
  align-items: center;
  padding: 0 8px 0 20px;
}

.rank-title h4 {
  margin: 0;
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
  margin: 0 8px 0 20px;
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
  display: flex;
}

.hot-item a {
  color: #444444;
  text-decoration: none;
}

.hot-item a:hover {
  color: #0084ff;
}

.hot-cover {
  padding: 12px 0;
}

.hot-cover img {
  max-height: 52px;
  border-radius: 3px;
}

.hot-footer {
  font-size: 12px;
  font-weight: 200;
  color: #595959;
  margin: 0;
  padding: 0 0 12px 0;
  line-height: 20px;
  cursor: pointer;
}

.hot-footer span {
  color: #bebebe;
}

.overflow-single {
  width: 218px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0;
  font-size: 13px;
}
</style>