<template>
  <div
    class="head-img"
    title="将头图拖至此处或点击上传"
    :class="{ active: ondrag }"
    @click="selectFile"
    @drop="ondrop"
    @dragover="ondragover"
    @dragenter="ondragover"
    @dragleave="ondragleave"
  >
    <img v-if="imageUrl" :src="imageUrl" />
    <div v-else>
      <LoadingOutlined
        :style="{ fontSize: '64px', color: '#dddddd' }"
        v-if="loading"
      />

      <div v-else>
        <CameraFilled :style="{ fontSize: '64px', color: '#dddddd' }" />
      </div>
    </div>

    <input
      type="file"
      accept=".jpg,.png"
      ref="fileinput"
      @change="handleFileSelect"
    />
  </div>
</template>
<script>
import { CameraFilled, LoadingOutlined } from "@ant-design/icons-vue";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  name: "CustomHeadImageUploader",
  components: {
    CameraFilled,
    LoadingOutlined,
  },
  data() {
    return {
      imageUrl: "",
      ondrag: false,
      loading: false,
      selectedFile: null,
    };
  },
  methods: {
    selectFile(e) {
      this.$refs.fileinput.click();
    },
    ondragover(e) {
      this.ondrag = true;
      e.preventDefault();
    },
    ondragleave(e) {
      this.ondrag = false;
      e.preventDefault();
    },
    ondrop(e) {
      if (this.checkFile(e.dataTransfer.files[0])) {
        this.imageUrl = "";
        this.selectedFile = e.dataTransfer.files[0];
        this.$nextTick(() => {
          this.handleFileUpload();
        });
      }
      e.preventDefault();
    },
    handleFileSelect(e) {
      // 获取已选择的文件
      if (this.checkFile(e.target.files[0])) {
        this.imageUrl = "";
        this.selectedFile = e.target.files[0];
        this.$nextTick(() => {
          this.handleFileUpload();
        });
      }
    },
    handleFileUpload() {
      this.loading = true;
      this.ondrag = false;
      // 模拟上传
      let loadTime = 2000;
      setTimeout(() => {
        getBase64(this.selectedFile, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }, loadTime);
    },
    checkFile(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("只能上传jpg或png格式的图片!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("图片大小不能超过2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
  },
};
</script>

<style scoped>
.head-img {
  height: 200px;
  line-height: 0;
  background: #f9f9f9;
  cursor: pointer;
  border-radius: 4px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.head-img.active {
  border: dashed 1px #1890ff;
}

.head-img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  max-height: inherit;
}

.head-img input {
  visibility: hidden;
}
</style>