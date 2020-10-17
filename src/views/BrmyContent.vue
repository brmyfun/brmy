<template>
  <a-row>
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <BrmyBanner />
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>

  <a-row>
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <BrmyFeatured />
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import BrmyBanner from "../components/BrmyBanner.vue";
import BrmyFeatured from "../components/BrmyFeatured.vue";
export default {
  name: "BrmyContent",
  components: {
    BrmyBanner,
    BrmyFeatured,
  },
};
</script>