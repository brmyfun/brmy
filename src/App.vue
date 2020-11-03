<template>
  <!-- <router-view /> -->
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script>
import locale from "ant-design-vue/es/locale/zh_CN";
export default {
  name: "App",
  data() {
    return {
      locale,
    };
  },
};
</script>
