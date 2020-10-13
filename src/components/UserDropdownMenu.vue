<template>
  <ul class="dropdown-menu">
    <li class="dropdown-item" @click="$emit('close', 'MyContent')">
      <span class="dropdown-icon">
        <svg
          class="dropdown-item-icon"
          viewBox="0 0 1024 1024"
          width="16"
          height="16"
        >
          <path
            d="M896.034133 748.544a298.222933 298.222933 0 0 0-68.3008-93.149867c-58.641067-54.510933-136.942933-85.777067-214.971733-85.777066h-133.256533c-78.0288 0-156.330667 31.266133-214.971734 85.777066a300.1344 300.1344 0 0 0-68.3008 93.149867A267.946667 267.946667 0 0 0 170.666667 862.754133 92.945067 92.945067 0 0 0 263.509333 955.733333h565.248c51.268267 0 92.842667-41.642667 92.842667-92.9792a267.946667 267.946667 0 0 0-25.565867-114.210133zM546.133333 555.4176c124.757333 0 226.133333-101.6832 226.133334-226.440533C772.266667 204.253867 670.890667 102.4 546.133333 102.4S320 204.0832 320 328.8064c0 124.757333 101.376 226.6112 226.133333 226.6112z"
          ></path>
        </svg>
      </span>
      <span>我的主页</span>
    </li>
    <li class="dropdown-item" @click="$emit('close', 'CreationContent')">
      <span class="dropdown-icon">
        <svg
          class="dropdown-item-icon"
          viewBox="0 0 1024 1024"
          width="16"
          height="16"
        >
          <path
            d="M400.131426 252.695621l-257.272121 96.445047a43.262675 43.262675 0 0 0-27.647153 33.982959L0.01568 962.753876l257.592111-257.528114a129.916021 129.916021 0 1 1 61.246124 61.246125L61.197806 1024l579.630249-115.196472a43.326673 43.326673 0 0 0 33.918961-27.583155l96.509044-257.400117-371.188632-371.188633m611.181283 193.082087L578.30197 12.702971a43.262675 43.262675 0 0 0-61.246125 0L430.466497 99.356317a43.262675 43.262675 0 0 0 0 61.182127l433.010739 433.010739a43.198677 43.198677 0 0 0 61.182126 0l86.653347-86.589349a43.262675 43.262675 0 0 0 0-61.246124"
          ></path>
        </svg>
      </span>
      <span>创作中心</span>
    </li>
    <li class="dropdown-item" @click="$emit('close', 'logout')">
      <span class="dropdown-icon">
        <svg
          class="dropdown-item-icon"
          viewBox="0 0 1024 1024"
          width="16"
          height="16"
        >
          <path
            d="M511.9 487.3c42.7 0 78.2-34.5 78.2-77V140.9c0-42.5-35.5-77-78.2-77s-78.2 34.5-78.2 77v269.4c0 42.5 35.5 77 78.2 77zM679 130.5c-9.7-4-20.7-2.9-29.4 2.8-8.7 5.8-13.9 15.5-14 26v102.2c0 11.2 6 21.5 15.7 27.1 84.2 48.1 138.9 137.6 138.9 239.9 0 153-124.8 277.6-278.5 277.6S233.4 681.6 233.4 528.5c0-102.2 56.5-191.7 139.2-239.9 9.6-5.6 15.5-15.8 15.5-27V159.3C388 142 374 128 356.7 128.1c-4.1 0-8.2 0.8-11.9 2.4C187.7 195.8 79 349.4 79 528.5 79 766.9 272.8 960 512.2 960 751.4 960 945 766.9 945 528.5c-0.1-179.1-108.8-332.7-266-398z"
          ></path>
        </svg>
      </span>
      <span>退出登录</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "UserDropdownMenu",
  emits: ["close"],
};
</script>

<style scoped>
.dropdown-menu {
  margin: 0;
  padding: 0;
  list-style: none;
}

.dropdown-item {
  text-align: left;
  font-size: 13px;
  padding: 10px 15px;
  font-weight: 500;
  color: #909dc2;
  cursor: pointer;
  position: relative;
}

.dropdown-icon {
  vertical-align: middle;
  margin-right: 14px;
  transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -webkit-transition: all 0.4s;
}

.dropdown-item-icon {
  fill: #909dc2;
}

.dropdown-item:hover .dropdown-item-icon {
  fill: #0084ff;
}

.dropdown-item:hover {
  color: #0084ff;
}

.dropdown-item:before {
  content: "";
  position: absolute;
  width: 3px;
  height: 24px;
  background-color: #0084ff;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}

.dropdown-item:hover:before {
  display: block;
}
</style>