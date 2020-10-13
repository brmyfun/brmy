<template>
  <a-row style="margin-top: 20px">
    <a-col :span="4"></a-col>
    <a-col :span="4" v-for="(goods, index) in goodsList" :key="index">
      <GoodsCard
        :img="goods.img"
        :title="goods.title"
        :currentPrice="goods.currentPrice"
        :originalPrice="goods.originalPrice"
        :desc="goods.desc"
      />
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>
<script>
import GoodsCard from "../components/GoodsCard.vue";
export default {
  name: "GoodsContent",
  components: {
    GoodsCard,
  },
  data() {
    return {
      goodsList: [
        {
          img:
            "https://yanxuan-item.nosdn.127.net/812ee05d3781d9975dd9715b9e380596.png?type=webp&imageView&quality=95",
          title: "鲜灵芬芳，唇齿留香，茉莉花茶 100克",
          currentPrice: "￥98",
          originalPrice: "￥199",
          desc: "鲜灵甘醇，香而不浮",
        },
        {
          img:
            "https://yanxuan-item.nosdn.127.net/e3aca8d4c735e54286333c93f28bce47.png?type=webp&imageView&quality=95",
          title: "宫廷普洱（熟茶）150克",
          currentPrice: "￥98",
          originalPrice: "￥199",
          desc: "汤中带糯，特级品质",
        },
        {
          img:
            "https://yanxuan-item.nosdn.127.net/980045bdf85925fb659605cc5d868237.png?type=webp&imageView&quality=95",
          title: "邂逅笑脸，茶圈新宠，玲珑柠红120克（8颗）",
          currentPrice: "￥98",
          originalPrice: "￥199",
          desc: "一级古树红茶，一颗一泡",
        },
        {
          img:
            "https://yanxuan-item.nosdn.127.net/43d0078b43a6a3cd9f49e8ba7cdc8539.png?type=webp&imageView&quality=95",
          title: "云南红茶（滇红） 110克",
          currentPrice: "￥98",
          originalPrice: "￥199",
          desc: "茶味浓厚，具蜜韵果甜香",
        },
      ],
    };
  },
};
</script>