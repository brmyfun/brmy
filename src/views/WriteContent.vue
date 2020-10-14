<template>
  <a-layout>
    <a-layout-header>
      <WriteNavigation
        @selectMenu="onSelectMenu"
        @clickPreview="onClickPreview"
        @clickUpload="onClickUpload"
      />
    </a-layout-header>
    <a-layout-content>
      <UploadCard ref="uploadCard" />
      <div style="margin-top: 12px">
        <component ref="currentComponent" :is="currentComponent"></component>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import WriteNavigation from "../components/WriteNavigation.vue";
import WriteArticle from "../components/WriteArticle.vue";
import UploadCard from "../components/UploadCard.vue";
export default {
  name: "WriteContent",
  components: {
    WriteNavigation,
    WriteArticle,
    UploadCard,
  },
  data() {
    return {
      currentComponent: "WriteArticle",
    };
  },
  methods: {
    onSelectMenu(selectedMenu) {
      this.currentComponent = selectedMenu;
      if (this.currentComponent === "MyContent") {
        this.$router.push("/my");
      }
      if (this.currentComponent === "CreationContent") {
        this.$router.push("/creation");
      }
    },
    onClickPreview(previewType) {
      this.$refs.currentComponent.preview();
    },
    onClickUpload(selectedMenu) {
      this.$refs.uploadCard.visible = true;
    },
  },
};
</script>