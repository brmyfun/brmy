<template>
  <a-row>
    <a-col :span="4"></a-col>
    <a-col :span="2">
      <a-affix :offset-top="top">
        <div class="sidebar">
          <div class="category">
            <ul>
              <li>去旅行</li>
              <li>其他</li>
            </ul>
          </div>

          <div class="tool-menu">
            <div class="icon-wrap">
              <svg width="24" height="24" class="icon">
                <path d="M14.05 9V3H11L8 9v13h12l2-13zM2 9h4v13H2z"></path>
              </svg>
              <span class="like-count">1</span>
            </div>
            <a href="#commentAchor">
              <div class="icon-wrap">
                <svg width="24" height="24" class="icon">
                  <path
                    d="M2 5h20v15H11l-6 3v-3H2V5zm3 4v2h14V9H5zm0 5v2h8v-2H5z"
                  ></path>
                </svg>
              </div>
            </a>
            <div class="icon-wrap">
              <svg width="24" height="24" class="icon">
                <path
                  d="M16.288 8.892c.276 0 .549.02.82.05C16.37 5.532 12.703 3 8.516 3 3.834 3 0 6.17 0 10.195c0 2.325 1.276 4.232 3.408 5.712l-.852 2.546 2.977-1.483c1.065.209 1.92.424 2.983.424.267 0 .532-.013.795-.033a6.263 6.263 0 01-.263-1.773c0-3.696 3.195-6.696 7.24-6.696zm-4.639-2.466c.727 0 1.317.586 1.317 1.308 0 .723-.59 1.309-1.317 1.309a1.312 1.312 0 01-1.316-1.309c0-.722.589-1.308 1.316-1.308zM5.691 9.07A1.312 1.312 0 014.374 7.76c0-.723.59-1.308 1.317-1.308s1.317.585 1.317 1.308c0 .722-.59 1.308-1.317 1.308zM24 15.514c0-3.383-3.407-6.14-7.233-6.14-4.052 0-7.243 2.757-7.243 6.14 0 3.388 3.191 6.14 7.243 6.14.848 0 1.703-.213 2.555-.425l2.336 1.271-.64-2.114C22.726 19.11 24 17.422 24 15.514zm-9.458-.949a.935.935 0 01-.938-.931c0-.515.42-.932.938-.932.517 0 .937.417.937.932 0 .514-.42.931-.937.931zm4.681.053a.935.935 0 01-.937-.931c0-.515.42-.932.937-.932.518 0 .938.417.938.932 0 .514-.42.931-.938.931z"
                ></path>
              </svg>
            </div>
            <div class="icon-wrap">
              <svg width="24" height="24" class="icon">
                <path
                  d="M23.693 10.027v.002a.93.93 0 01-.802.661.913.913 0 01-.891-.52 1 1 0 01-.056-.73h-.003a4.87 4.87 0 00-.945-4.618c-1.079-1.251-2.719-1.808-4.3-1.455a.886.886 0 01-.692-.132.965.965 0 01-.4-.605c-.105-.517.212-1.028.709-1.138 2.144-.477 4.471.22 6.047 2.045 1.58 1.821 2.004 4.307 1.333 6.49zm-6.366-3.59a.76.76 0 01-.596-.116.826.826 0 01-.343-.52c-.091-.446.18-.883.61-.98a3.013 3.013 0 012.946.995c.77.89.974 2.101.647 3.163a.805.805 0 01-.392.48.765.765 0 01-.604.05.83.83 0 01-.507-1.038h-.003a1.637 1.637 0 00-.314-1.548 1.487 1.487 0 00-1.444-.486zm.703 4.685c1.377.447 2.91 1.526 2.91 3.423 0 3.147-4.343 7.109-10.87 7.109C5.091 21.654 0 19.132 0 14.986c0-2.169 1.315-4.674 3.578-7.04C6.6 4.787 10.126 3.35 11.452 4.736c.585.61.642 1.67.266 2.931-.196.636.572.283.572.286 2.442-1.07 4.576-1.133 5.354.03.413.62.376 1.49-.008 2.497-.177.464.054.534.394.641zm-7.95 9.046c3.973-.41 6.987-2.951 6.73-5.68-.258-2.722-3.688-4.6-7.66-4.19-3.973.41-6.987 2.954-6.73 5.676.259 2.729 3.689 4.604 7.66 4.194zm.398-7.769c1.956.528 2.955 2.457 2.155 4.33-.81 1.917-3.143 2.937-5.12 2.27-1.912-.644-2.72-2.615-1.882-4.391.821-1.74 2.957-2.723 4.847-2.209zm-1.444 4.533c.378-.647.18-1.387-.443-1.664-.614-.268-1.412.009-1.79.63-.384.624-.204 1.37.408 1.658.62.296 1.441.014 1.825-.624z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </a-affix>
    </a-col>
    <a-col :span="9">
      <div class="article-main"></div>
    </a-col>
    <a-col :span="5"></a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
export default {
  name: "ArticleContent",
  data() {
    return {
      top: 88,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.sidebar {
  width: 92px;
}

.category ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.category li:first-child {
  color: white;
  background: black;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.category li:first-child::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  left: -10px;
  top: -10px;
  transform: rotate(45deg);
  background: white;
}

.category li {
  height: 36px;
  font-size: 12px;
  color: rgb(38, 38, 38);
  margin-bottom: 2px;
  line-height: 36px;
  text-align: right;
  padding-right: 6px;
  box-sizing: border-box;
  cursor: pointer;
  background: #f4f6ff;
}

.tool-menu {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
}

.icon-wrap {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 2px;
  font-size: 0px;
  background: rgb(247, 250, 255);

  cursor: pointer;
  position: relative;
  transition: color 0.3s ease-in-out 0s;
}

.icon-wrap:hover .icon {
  fill: #5c6e91;
}

.icon {
  fill: #a3aacc;
}

.like-count {
  font-size: 10px;
  color: rgb(179, 179, 179);
}

.article-main {
  margin-top: 12px;
}
</style>