<template>
  <a-row>
    <a-col :span="12">
      <div
        :style="{
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          marginLeft: '12px',
        }"
      >
        <a-config-provider :locale="locale">
          <a-calendar
            v-model:value="value"
            :fullscreen="false"
            @panelChange="onPanelChange"
          />
        </a-config-provider>
        <!-- <a-calendar
          v-model:value="value"
          :fullscreen="false"
          @panelChange="onPanelChange"
        /> -->
      </div>
    </a-col>
    <a-col :span="12"></a-col>
  </a-row>
</template>
<script>
import locale from "ant-design-vue/es/locale/zh_CN";
import moment from "moment";
// import "moment/locale/zh-cn";
// moment.locale("zh-cn");
export default {
  name: "MarketCalendar",
  data() {
    return {
      locale,
      moment,
      value: "",
    };
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
};
</script>