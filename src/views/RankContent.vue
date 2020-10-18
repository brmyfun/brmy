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
            <a-button
              v-for="(item, index) in allTypes[activeTabKey]"
              :key="index"
            >
              <TagOutlined /> {{ item.name }}
            </a-button>
          </div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import { hotRank, hotRankType } from "../api/api";
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
          this.allTypes = res.Data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onTabChange(key) {
      console.log(key);
      this.activeTabKey = key;
    },
    changeExpand() {
      this.tagExpand = !this.tagExpand;
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
}

.tab-tag .ant-btn {
  margin: 8px 8px 0 0;
}
</style>