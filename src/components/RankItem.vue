<template>
  <div class="rank-list">
    <ul>
      <li class="rank-item" v-for="(item, index) in rankList" :key="item.id">
        <a-row>
          <a-col :span="24">
            <h3>
              <a :href="item.Url" target="_blank" :title="item.Title">{{
                item.Title
              }}</a>
            </h3>
            <p class="rank-footer">
              <span>来自</span> {{ item.type ? item.type : tag.name }}
            </p>
          </a-col>
        </a-row>
      </li>
    </ul>
  </div>
</template>
<script>
import { hotRank, hotRankList } from "../api/api";
import {
  DownOutlined,
  UpOutlined,
  TagOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "RankItem",
  props: {
    tag: Object,
  },
  components: {
    LikeOutlined,
    MessageOutlined,
  },
  data() {
    return {
      loading: true,
      loadingMore: false,
      rankList: null,
      page: 0,
    };
  },
  watch: {
    tag(newVal, oldVal) {
      this.page = 0;
      this.loading = true;
      this.loadData((res) => {
        this.loading = false;
        this.rankList = res.data;
        this.$nextTick(() => {
          window.dispatchEvent(new Event("resize"));
        });
      });
    },
  },
  mounted() {
    this.loading = true;
    this.loadData((res) => {
      this.loading = false;
      this.rankList = res.data;
    });
  },
  methods: {
    loadData(callback) {
      hotRankList({
        id: this.tag.id,
        page: this.page,
      })
        .then((res) => {
          console.log(res.Data);
          callback(res.Data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadMore(callback) {
      this.loadingMore = true;
      this.page = this.page + 1;
      this.loadData((res) => {
        this.rankList = this.rankList.concat(res.data);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event("resize"));
        });
      });
    },
  },
};
</script>
<style scoped>
.rank-list {
  font-size: 14px;
  text-align: left;
  line-height: 36px;
}

.rank-list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.rank-item {
  border-top: 1px solid #ebebeb;
}

.rank-item .ant-row {
  padding: 0 24px;
}

.rank-item h3 {
  margin: 0;
  padding: 6px 0 0 0;
}

.rank-item a {
  color: #444444;
  text-decoration: none;
}

.rank-item a:hover {
  color: #0084ff;
}

.rank-footer {
  margin: 0;
  font-size: 12px;
  font-weight: 200;
  color: #595959;
  cursor: pointer;
}

.rank-footer span {
  color: #bebebe;
}
</style>