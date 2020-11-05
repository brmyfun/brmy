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
        <a-calendar
          v-model:value="value"
          :fullscreen="false"
          @panelChange="onPanelChange"
        />
      </div>
    </a-col>
    <a-col :span="12"></a-col>
  </a-row>
</template>
<script>
import moment from "moment";
export default {
  name: "MarketCalendar",
  data() {
    return {
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