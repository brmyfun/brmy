<template>
  <a-modal
    title="上传文件"
    v-model:visible="visible"
    @ok="handleOk"
    :footer="null"
  >
  </a-modal>
</template>
<script>
export default {
  name: "UploadCard",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>