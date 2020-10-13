<template>
  <a-card hoverable :bodyStyle="{ padding: '8px' }">
    <template v-slot:cover>
      <img :alt="title" :src="img" />
    </template>
    <h4 style="font-weight: 700" class="overflow-single" :title="title">
      {{ title }}
    </h4>

    <p>
      <span style="color: red">{{ currentPrice }}</span>
      <span
        style="text-decoration: line-through; color: grey; margin-left: 8px"
        >{{ originalPrice }}</span
      >
    </p>
    <div style="border-top: 1px solid #ebebeb; margin: 8px"></div>
    <p style="color: grey">{{ desc }}</p>
  </a-card>
</template>
<script>
export default {
  name: "GoodsCard",
  props: {
    img: String,
    title: String,
    currentPrice: String,
    originalPrice: String,
    desc: String,
  },
};
</script>
<style scoped>
.ant-card {
  margin: 0 8px;
}

.ant-divider {
  margin: 8px 0;
}

.overflow-single {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>