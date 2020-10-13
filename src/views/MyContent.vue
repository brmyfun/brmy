<template>
  <a-row>
    <a-col :span="5"></a-col>
    <a-col :span="10"> 动态区域 </a-col>
    <a-col :span="5">
      <UserCard />
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import UserCard from "../components/UserCard.vue";
export default {
  name: "MyContent",
  components: {
    UserCard,
  },
};
</script>
