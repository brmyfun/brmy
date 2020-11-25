<template>
  <MarketCalendar />
  <HotPanel />
</template>
<script>
import MarketCalendar from "./MarketCalendar.vue";
import HotPanel from "./HotPanel.vue";
export default {
  name: "CreationHome",
  components: {
    MarketCalendar,
    HotPanel,
  },
};
</script>