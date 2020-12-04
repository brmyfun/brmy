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
    <a-col :span="4">
      <a-drawer
        title="我的素材"
        width="360"
        placement="right"
        :mask="false"
        v-model:visible="visible"
        :after-visible-change="afterVisibleChange"
        :bodyStyle="{ padding: 0 }"
      >
        <div class="res-content">
          <figure class="snip">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
              alt="sample87"
            />
            <figcaption>
              <h3>图片简介</h3>
              <h5>插入</h5>
            </figcaption>
            <a href="#"></a>
          </figure>
        </div>
      </a-drawer>
    </a-col>
  </a-row>
</template>

<script>
import wangEditor from "wangeditor";
import CustomHeadImageUploader from "../components/CustomHeadImageUploader.vue";
const { $, BtnMenu } = wangEditor;
class ResourceMenu extends BtnMenu {
  constructor(editor) {
    const $elem = wangEditor.$(
      `<div class="w-e-menu">
          <i class="w-e-icon-image"></i>
       </div>`
    );
    super($elem, editor);
  }
  // 菜单点击事件
  clickHandler() {
    changeDrawerVisible();
  }
  // 菜单激活状态
  tryChangeActive() {
    // this.active(); // 菜单激活
    // this.unActive(); // 菜单不激活
  }
}

export default {
  name: "WriteArticle",
  components: {
    CustomHeadImageUploader,
  },
  data() {
    return {
      editor: null,
      editorData: "",
      visible: false,
    };
  },
  mounted() {
    this.editor = new wangEditor(`#editor`);

    this.customEditorConfig();
    // 定制编辑器样式
    this.customEditorStyle();
    // 暴露内部方法
    window.changeDrawerVisible = this.changeDrawerVisible;
  },
  methods: {
    customEditorConfig() {
      // 注册扩展菜单
      this.editor.menus.extend("resourceLibrary", ResourceMenu);
      // 自定义菜单
      this.editor.config.menus = [
        "head",
        "bold",
        "fontSize",
        "fontName",
        "italic",
        "underline",
        "strikeThrough",
        "indent",
        "lineHeight",
        "foreColor",
        "backColor",
        "link",
        "list",
        "justify",
        "quote",
        "emoticon",
        "resourceLibrary",
        "table",
        "code",
        "splitLine",
        "undo",
        "redo",
      ];
      // 配置 onchange 回调函数，将数据同步到 vue 中
      this.editor.config.onchange = (latestHtml) => {
        this.editorData = latestHtml;
      };
      // 取消自动 focus
      this.editor.config.focus = false;
      // 设置zindex
      this.editor.config.zIndex = 10;
      // 创建编辑器
      this.editor.create();
    },
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
    changeDrawerVisible() {
      this.visible = !this.visible;
    },
  },
  beforeUnmount() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    // this.editor.destroy();
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

.res-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.snip {
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 10px;
  min-width: 256px;
  max-width: 312px;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  text-align: left;
}

.snip * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.snip:before {
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  top: 100%;
  content: "";
  background-color: rgba(51, 51, 51, 0.6);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
}
.snip img {
  vertical-align: top;
  max-width: 100%;
  backface-visibility: hidden;
}
.snip figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.snip h3,
.snip h5 {
  margin: 0;
  opacity: 0;
  letter-spacing: 1px;
  color: #fff;
}
.snip h3 {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  text-transform: uppercase;
  font-weight: 400;
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  margin-bottom: 5px;
}
.snip h5 {
  font-weight: normal;
  background-color: #0084ff;
  padding: 3px 10px;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
.snip a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.snip:hover:before,
.snip.hover:before {
  top: 10px;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
.snip:hover h3,
.snip.hover h3,
.snip:hover h5,
.snip.hover h5 {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}
.snip:hover h3,
.snip.hover h3 {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
.snip:hover h5,
.snip.hover h5 {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
</style>
