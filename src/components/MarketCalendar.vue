<template>
  <a-row>
    <a-col :span="12">
      <div
        :style="{
          border: '1px solid rgb(240,240,240)',
          borderRadius: '4px',
          margin: '0 12px 0 12px',
        }"
      >
        <a-calendar
          v-model:value="value"
          :fullscreen="false"
          @panelChange="onPanelChange"
          @select="onSelect"
        />
      </div>
    </a-col>
    <a-col :span="12">
      <a-card size="small" title="今日事件">
        <a-alert
          v-for="event in events"
          :key="event._id"
          :show-icon="false"
          :message="event.name"
          banner
        />
      </a-card>
    </a-col>
  </a-row>
</template>
<script>
import { calendarEvents } from "../api/api";
import moment from "moment";
export default {
  name: "MarketCalendar",
  data() {
    return {
      moment,
      value: moment(),
      selectedValue: moment(),
      events: null,
    };
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
    onSelect(value) {
      console.log(value.unix());
      this.value = value;
      this.selectedValue = value;
      this.loadEvents();
    },
    loadEvents() {
      calendarEvents({
        categories: "16,15,14,13,12,11,10,8,7,6,5,4,17,9,20,21",
        startTime: this.selectedValue.unix(),
        endTime: this.selectedValue.unix(),
      })
        .then((res) => {
          console.log(res);
          this.events = res.events;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
::v-deep(.ant-fullcalendar.ant-fullcalendar-full) {
  border-top-color: rgb(240, 240, 240);
}

.ant-card {
  text-align: left;
  height: 320px;
}

::v-deep(.ant-card-head-wrapper) {
  height: 46px;
}

.ant-alert {
  margin-bottom: 12px;
}
</style>