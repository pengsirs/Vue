<template>
  <div>
    <div class="block">
      <el-carousel
        style="width: 60%; background: #fff; box-shadow: #ddd 1px 1px 5px"
      >
        <el-carousel-item v-for="item in imgArray" :key="item">
          <el-image class="lb-img" :src="item"></el-image>
        </el-carousel-item>
      </el-carousel>
      <div class="shu">
        <echars></echars>
        <zhe-xian></zhe-xian>
      </div>
    </div>
    <BingTu></BingTu>
  </div>
</template>

<script>
import Echars from "../components/EcharsIndex.vue";
import ZheXian from "@/components/ZheXian.vue";
import BingTu from "../components/BingTu.vue";
export default {
  name: "LunboView",
  components: {
    Echars,
    ZheXian,
    BingTu,
  },
  data() {
    return {
      imgArray: [
        require("../assets/1.png"),
        require("../assets/2.png"),
        require("../assets/3.png"),
      ],
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style  scoped>
.block {
  display: flex;
  justify-content: space-between;
}
.shu {
  display: flex;
  flex-direction: column;
  width: 39%;
}
.lb-img {
  padding: 5px;
  height: 300px;
  background: #fff;
  box-shadow: #ddd 1px 1px 5px;
}
.el-carousel {
  height: 305px;
}
.el-carousel__container {
  height: 305px;
}
</style>