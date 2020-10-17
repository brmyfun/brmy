<template>
  <a-card hoverable>
    <template v-slot:cover> <img :src="cover" /> </template>
    <div class="featured-content">
      <h2 class="overflow-single">{{ title }}</h2>
      <p style="font-size: 12px; font-weight: 300">
        <span>2020-10-17 23:15:41 更新</span>
        <span style="margin: 0 8px">·</span>
        <span>209 浏览</span>
      </p>
      <div class="featured-user">
        <a-avatar
          v-for="(avatar, index) in participants"
          :key="index"
          :src="avatar"
        />
        <span style="margin-left: 4px">{{ participants.length }} 人参与</span>
        <span style="padding: 0 8px">|</span>
        <span>{{ followers }} 人关注</span>
      </div>
      <p>
        {{ desc }}
      </p>

      <p>
        <a-tag v-for="(tag, index) in tags" :key="index">
          <TagOutlined />
          <span style="margin-left: 5px">#{{ tag }}</span>
        </a-tag>
      </p>
    </div>
  </a-card>
</template>
<script>
import { UserOutlined } from "@ant-design/icons-vue";
export default {
  name: "BrmyFeaturedCard",
  props: {
    cover: String,
    title: String,
    desc: String,
    participants: Array, // 参与人数
    followers: Number, // 关注人数
    tags: Array, // 标签
  },
  components: {
    UserOutlined,
  },
};
</script>

<style scoped>
.ant-card {
  text-align: left;
}

.featured-content {
  height: 240px;
}

.featured-content h2 {
  font-weight: 600;
}

.featured-user {
  margin: 12px 0;
}

.featured-user .ant-avatar {
  margin-right: 4px;
}

.overflow-single {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0;
}
</style>