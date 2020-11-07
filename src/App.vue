<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script>
import locale from "ant-design-vue/es/locale/zh_CN";
import moment from "moment";
import "moment/dist/locale/zh-cn";
moment.locale("zh-cn");
export default {
  name: "App",
  data() {
    return {
      locale,
      moment,
    };
  },
};
</script>
