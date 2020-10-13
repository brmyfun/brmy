<template>
  <a-upload-dragger
    name="file"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :multiple="true"
    :show-upload-list="false"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <div class="head-img">
      <img v-if="imageUrl" :src="imageUrl" />

      <div v-else>
        <LoadingOutlined
          :style="{ fontSize: '64px', color: '#dddddd' }"
          v-if="loading"
        />

        <div v-else>
          <CameraFilled :style="{ fontSize: '64px', color: '#dddddd' }" />
          <p>点击或拖拽图片至区域内上传</p>
          <p>支持最大不超过2MB的图片</p>
        </div>
      </div>
    </div>
  </a-upload-dragger>
</template>
<script>
import { CameraFilled, LoadingOutlined } from "@ant-design/icons-vue";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  name: "HeadImageUploader",
  components: {
    CameraFilled,
    LoadingOutlined,
  },
  data() {
    return {
      imageUrl:
        "https://desk-fd.zol-img.com.cn/t_s1366x768c5/g2/M00/06/0D/ChMlWV7DTQKIRsgmAAl4pEw_wA8AAPQbAHV4fkACXi8265.jpg",
      loading: false,
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
      if (info.file.status === "error") {
        this.loading = false;
      }
    },
    beforeUpload(file) {
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
  padding: 0 16px;
  background: #f9f9f9;
  cursor: pointer;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.head-img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  max-height: inherit;
}
</style>