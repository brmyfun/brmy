<template>
  <a-modal
    title="上传文件"
    v-model:visible="visible"
    :afterClose="onClose"
    :footer="null"
    :bodyStyle="{ padding: '0' }"
  >
    <div>
      <div
        class="up-body"
        :class="{ active: ondrag }"
        @drop="ondrop"
        @dragover="ondragover"
        @dragenter="ondragover"
        @dragleave="ondragleave"
        v-if="!hasFiles"
      >
        <FileOutlined :style="{ fontSize: '48px', color: '#dddddd' }" />
        <p>
          将文件<b>拖至</b>此处，或<a href="" @click="selectFiles">点击上传</a>
        </p>
        <input
          ref="fileinput"
          type="file"
          accept=".jpg,.png"
          multiple="multiple"
          @change="handleFileSelect"
        />
      </div>

      <div class="up-footer" :class="{ hasFiles: hasFiles }" v-if="hasFiles">
        <div class="file-list">
          <div class="file-item" v-for="(item, index) in files" :key="index">
            <div class="filename">
              <span>{{ item.name }}</span>
            </div>
            <div class="progress" :class="{ active: !item.uploaded }"></div>
            <div class="up-done" :class="{ anim: item.uploaded }">
              <a href="" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                  <path
                    id="path"
                    d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M500,967.7C241.7,967.7,32.3,758.3,32.3,500C32.3,241.7,241.7,32.3,500,32.3c258.3,0,467.7,209.4,467.7,467.7C967.7,758.3,758.3,967.7,500,967.7z M748.4,325L448,623.1L301.6,477.9c-4.4-4.3-11.4-4.3-15.8,0c-4.4,4.3-4.4,11.3,0,15.6l151.2,150c0.5,1.3,1.4,2.6,2.5,3.7c4.4,4.3,11.4,4.3,15.8,0l308.9-306.5c4.4-4.3,4.4-11.3,0-15.6C759.8,320.7,752.7,320.7,748.4,325z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="upload-more">
            <button :class="{ active: uploaded }" @click="resetUpload">
              继续上传
            </button>
          </div>
        </div>
      </div>
    </div>
  </a-modal>
</template>
<script>
import { FileOutlined } from "@ant-design/icons-vue";
export default {
  name: "UploadCard",
  components: { FileOutlined },
  data() {
    return {
      visible: false,
      ondrag: false,
      selectedFiles: [],
      files: [],
      hasFiles: false,
      uploaded: false,
    };
  },
  watch: {
    selectedFiles(newValue, oldValue) {
      if (newValue) {
        Array.prototype.forEach.call(newValue, (selectedFile) => {
          let file = {};
          file.uploaded = false;
          file.name = selectedFile.name;
          file.size = selectedFile.size;
          file.type = selectedFile.type;
          this.files.push(file);
        });
      }
    },
  },
  methods: {
    onClose(e) {
      this.resetUpload();
    },
    selectFiles(e) {
      e.preventDefault();
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
      this.selectedFiles = e.dataTransfer.files;
      this.$nextTick(() => {
        this.handleFileUpload();
      });
      e.preventDefault();
    },
    handleFileSelect(e) {
      // 获取已选择的文件
      this.selectedFiles = e.target.files;
      this.$nextTick(() => {
        this.handleFileUpload();
      });
    },
    handleFileUpload() {
      this.hasFiles = true;
      this.ondrag = false;
      // 模拟上传
      let loadTime = 2000;
      this.files.forEach((file, index) => {
        let loadTime = 2000 + index * 2000;
        setTimeout(() => {
          file.uploaded = true;
          if (index === this.files.length - 1) {
            this.uploaded = true;
          }
        }, loadTime);
      });
    },
    resetUpload() {
      this.selectedFiles = [];
      this.files = [];
      this.hasFiles = false;
      this.uploaded = false;
    },
  },
};
</script>

<style scoped>
.up-body {
  padding: 50px 0;
  text-align: center;
  background-color: #fff;
}

.up-body i {
  color: #bebebe;
  font-size: 60px;
  margin: 10px 0;
}

.up-body p {
  margin-top: 24px;
  letter-spacing: 2px;
}

.up-body p a {
  text-decoration: none;
}

.up-body p b,
a {
  color: #0084ff;
}

.up-body input {
  visibility: hidden;
}

.up-body.active {
  border: dashed 2px #0084ff;
}

.up-body.active span {
  box-shadow: 0 0 0 -3px #fff, 0 0 0 lightgray, 0 0 0 -3px #fff, 0 0 0 lightgray;
  -webkit-animation: file 0.5s ease both;
  animation: file 0.5s ease both;
}

.up-body.active a {
  color: #0084ff;
}

.up-footer {
  width: 100%;
  height: 0;
  margin: 0 auto;
  background-color: #fff;
}

.up-footer .divider {
  width: 0;
  margin: 0 auto;
  border-top: solid 4px #0084ff;
  text-align: center;
  overflow: hidden;
  transition: width 0.5s ease;
  -webkit-transition: width 0.5s ease;
}

.up-footer.hasFiles {
  height: auto;
}

.up-footer.hasFiles .divider {
  width: 100%;
}

.up-footer .file-list {
  margin: 0 20px;
  padding: 20px 0;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 450px;
}

.up-footer .file-list::-webkit-scrollbar-track {
  background-color: rgba(211, 211, 211, 0.25);
}

.up-footer .file-list::-webkit-scrollbar {
  width: 4px;
  background-color: rgba(211, 211, 211, 0.25);
}

.up-footer .file-list::-webkit-scrollbar-thumb {
  background-color: rgba(24, 144, 255, 0.5);
}

.up-footer .file-list .file-item {
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 50px;
  animation: fade 1s ease both;
  -webkit-animation: fade 1s ease both;
}

.up-footer .file-list .file-item .filename {
  width: 150px;
  font-size: 12px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.up-footer .file-list .file-item .progress {
  width: 65%;
  height: 5px;
  border: solid 1px lightgray;
  border-radius: 2px;
  background: linear-gradient(
      to left,
      rgba(24, 144, 255, 0.2),
      rgba(24, 144, 255, 0.8)
    )
    no-repeat;
  background-size: 100% 100%;
}

.up-footer .file-list .file-item .progress.active {
  -webkit-animation: up-progress 30s linear;
  animation: up-progress 30s linear;
}

@-webkit-keyframes up-progress {
  from {
    background-size: 0 100%;
  }
  to {
    background-size: 100% 100%;
  }
}

@keyframes up-progress {
  from {
    background-size: 0 100%;
  }
  to {
    background-size: 100% 100%;
  }
}

.up-footer .file-list .file-item .up-done {
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #0084ff;
  border-radius: 50%;
  -webkit-transform: scale(0);
  transform: scale(0);
  position: relative;
}

.up-footer .file-list .file-item .up-done:before {
  content: "查看";
  position: absolute;
  top: 0;
  font-size: 19px;
  opacity: 0;
}

.up-footer .file-list .file-item .up-done:hover:before {
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  top: -30px;
  opacity: 1;
}

.up-footer .file-list .file-item .up-done.anim {
  -webkit-animation: done1 0.5s ease forwards;
  animation: done1 0.5s ease forwards;
}

.up-footer .file-list .file-item .up-done.anim #path {
  -webkit-animation: done2 2.5s 0.5s ease forwards;
  animation: done2 2.5s 0.5s ease forwards;
}

.up-footer .file-list .file-item .up-done #path {
  stroke-dashoffset: 7387.59423828125;
  stroke-dasharray: 7387.59423828125;
  stroke: #fff;
  fill: transparent;
  stroke-width: 50px;
}

.upload-more button {
  width: 96px;
  padding: 6px;
  outline: none;
  cursor: pointer;
  color: #0084ff;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #0084ff;

  -webkit-transform: translateY(15px);
  transform: translateY(15px);
  opacity: 0;
  visibility: hidden;
}

.upload-more button.active {
  transition: transform 0.5s 1.5s ease, opacity 0.5s 1.5s ease, background,
    -webkit-transform 0.5s 1.5s ease;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.upload-more button:hover {
  color: #fff;
  background: #0084ff;
}

@-webkit-keyframes done1 {
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }
  80% {
    -webkit-transform: scale(0.25);
    transform: scale(0.25);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }
}

@keyframes done1 {
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }
  80% {
    -webkit-transform: scale(0.25);
    transform: scale(0.25);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }
}

@-webkit-keyframes done2 {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes done2 {
  to {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes fade {
  to {
    opacity: 1;
  }
}

@keyframes fade {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadeup {
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeup {
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes faderight {
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes faderight {
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes file {
  50% {
    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray, -8px 8px 0 -3px #fff,
      -8px 8px 0 lightgray;
  }
  75%,
  100% {
    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray,
      -16px 16px 0 -3px #fff, -16px 16px 0 lightgray;
  }
}

@keyframes file {
  50% {
    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray, -8px 8px 0 -3px #fff,
      -8px 8px 0 lightgray;
  }
  65%,
  100% {
    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray,
      -16px 16px 0 -3px #fff, -16px 16px 0 lightgray;
  }
}
</style>