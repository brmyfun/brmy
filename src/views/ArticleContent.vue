<template>
  <div style="margin-top: 12px">
    <a-row>
      <a-col :span="4"></a-col>
      <a-col :span="1">
        <a-affix :offset-top="top">
          <div class="category">
            <ul>
              <li>去旅行</li>
              <li>其他</li>
            </ul>
          </div>
        </a-affix>
      </a-col>
      <a-col :span="10"></a-col>
      <a-col :span="5"></a-col>
      <a-col :span="4"></a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: "ArticleContent",
  data() {
    return {
      top: 88,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.ant-layout-header {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}

.ant-layout-content {
  height: 1000px;
}

.category ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.category li:first-child {
  color: white;
  background: black;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.category li:first-child::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  left: -10px;
  top: -10px;
  transform: rotate(45deg);
  background: white;
}

.category li {
  height: 32px;
  font-size: 12px;
  color: rgb(38, 38, 38);
  margin-bottom: 2px;
  line-height: 32px;
  text-align: right;
  padding-right: 6px;
  box-sizing: border-box;
  cursor: pointer;
  background: #f4f6ff;
}
</style>