<template>
  <div class="rank ant-card-bordered" v-if="data">
    <div class="rank-title">
      <h4 style="margin-block: 0" :style="hotStyle">{{ hot }}</h4>
      <a href="javascript:void(0);"
        ><span style="font-size: 12px">更多</span></a
      >
    </div>

    <div class="hot-item">
      <ul>
        <li v-for="(hotItem, index) in data" :key="index">
          <a-row>
            <a-col>
              <p class="overflow-single">
                <span class="hot-index">{{ index + 1 }}</span>
                <a :title="hotItem.title">{{ hotItem.title }}</a>
              </p>
            </a-col>
          </a-row>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "HotCard",
  props: {
    hot: String,
    hotStyle: Object,
    data: Array,
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
  color: #8a8a8a;
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

.hot-item ul li:nth-child(1) span {
  color: #ff000c;
}

.hot-item ul li:nth-child(2) span {
  color: #ff6500;
}

.hot-item ul li:nth-child(3) span {
  color: #ffb100;
}

.hot-item a {
  color: #444444;
  text-decoration: none;
}

.hot-item a:hover {
  color: #0084ff;
}

.overflow-single {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0;
  font-size: 13px;
}
</style>