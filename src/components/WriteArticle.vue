<template>
  <a-row>
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <CustomHeadImageUploader />
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>

  <a-row style="margin-top: 20px">
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <label class="title-input-group">
        <input class="title-input-field" type="text" placeholder="请输入标题" />
      </label>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>

  <a-row style="margin-top: 20px">
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <div id="editor"></div>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>

<script>
import wangEditor from "wangeditor";
import CustomHeadImageUploader from "../components/CustomHeadImageUploader.vue";
export default {
  name: "WriteArticle",
  components: {
    CustomHeadImageUploader,
  },
  data() {
    return {
      editor: null,
      editorData: "",
    };
  },
  mounted() {
    const editor = new wangEditor(`#editor`);

    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (latestHtml) => {
      this.editorData = latestHtml;
    };

    // 取消自动 focus
    editor.config.focus = false;

    // 创建编辑器
    editor.create();

    // 定制编辑器样式
    this.customEditorStyle();

    this.editor = editor;
  },
  methods: {
    customEditorStyle() {
      var et = document.getElementById("editor");
      var toolbar = et.getElementsByClassName("w-e-toolbar");
      toolbar[0].style.borderTop = "0";
      toolbar[0].style.borderLeft = "0";
      toolbar[0].style.borderRight = "0";
      toolbar[0].style.borderBottom = "0";
      var textContainer = et.getElementsByClassName("w-e-text-container");
      textContainer[0].style.borderLeft = "0";
      textContainer[0].style.borderRight = "0";
      textContainer[0].style.borderBottom = "0";
    },
    preview() {
      // 通过代码获取编辑器内容
      alert(this.editorData);
    },
  },
  beforeUnmount() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
  },
};
</script>
<style scoped>
#editor {
  color: black;
  text-align: left;
}

.title-input-group {
  background: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dee6ea;
}

.title-input-field {
  width: 100%;
  line-height: 3;
  font-size: 24px;
  padding: 0 0.3em;
  background: none;
  border: none;
  appearance: none;
  color: black;
}

.title-input-field:focus {
  border-bottom: 2px solid #0084ff;
  margin-bottom: -2px;
  outline: none;
}
</style>
