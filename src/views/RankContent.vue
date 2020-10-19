<template>
  <a-row>
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <a-card
        v-if="allTypes"
        :bordered="false"
        :tab-list="tabList"
        :active-tab-key="activeTabKey"
        :bodyStyle="{ padding: '0' }"
        @tabChange="(key) => onTabChange(key)"
      >
        <div
          :class="{ 'tab-content': tagExpand }"
          v-if="allTypes[activeTabKey]"
        >
          <a-button
            style="float: right; margin-top: 12px"
            size="small"
            type="link"
            v-if="tagExpand"
            @click="changeExpand"
            >展开<DownOutlined
          /></a-button>
          <a-button
            style="float: right; margin-top: 12px"
            size="small"
            type="link"
            v-if="!tagExpand"
            @click="changeExpand"
            >收起<UpOutlined
          /></a-button>
          <div class="tab-tag">
            <div
              v-for="tag in allTypes[activeTabKey]"
              :key="tag.id"
              :class="{ active: tag.id == activeTagId }"
              @click="onTagClick(tag)"
            >
              <TagOutlined /> <span>{{ tag.name }}</span>
            </div>
          </div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import { hotRank, hotRankList, hotRankType } from "../api/api";
import { DownOutlined, UpOutlined, TagOutlined } from "@ant-design/icons-vue";
export default {
  name: "RankContent",
  components: {
    DownOutlined,
    UpOutlined,
    TagOutlined,
  },
  data() {
    return {
      allTypes: null,
      tabList: [],
      activeTabKey: null,
      tagExpand: true,
      activeTagId: null,
    };
  },
  mounted() {
    hotRankType()
      .then((res) => {
        if (res) {
          console.log(res.Data);

          for (const key in res.Data) {
            const value = res.Data[key];
            const tab = { key: key, tab: key, length: value.length };
            this.tabList.push(tab);
          }
          this.tabList.sort(function (a, b) {
            return b.length - a.length;
          });
          this.activeTabKey = this.tabList[0].key;
          this.activeTagId = res.Data[this.activeTabKey][0].id;
          this.allTypes = res.Data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    activeTagId(newVal, oldVal) {
      console.log(newVal);
      hotRankList({
        id: newVal,
        page: 0,
      })
        .then((res) => {
          console.log(res.Data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  methods: {
    onTabChange(key) {
      console.log(key);
      this.activeTabKey = key;
      this.activeTagId = this.allTypes[key][0].id;
    },
    changeExpand() {
      this.tagExpand = !this.tagExpand;
    },
    onTagClick(tag) {
      this.activeTagId = tag.id;
    },
  },
};
</script>

<style scoped>
.tab-content {
  height: 48px;
  overflow: hidden;
}

.tab-tag {
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px;
  margin-bottom: 8px;
}

.tab-tag div {
  padding: 4px 8px;
  margin: 8px 8px 0 0;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  border-radius: 2px;
}

.tab-tag div:hover {
  color: #40a9ff;
  border-color: #40a9ff;
}

.tab-tag .active {
  color: #40a9ff;
  border-color: #40a9ff;
  background: #e6f7ff;
}
</style>