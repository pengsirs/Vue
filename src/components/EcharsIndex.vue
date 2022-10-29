<template>
  <div id="main" style="width: 97%" class="echars"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  components: {},
  name: "EcharsIndex",
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.find();
  },
  watch: {},
  computed: {},
  methods: {
    find() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        color: "rgb(50,76,205)",
        title: {
          text: "总下载量:",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        grid: {
          x: 20,
          y: 40,
          x2: 20,
          y2: 20,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
<style  scoped>
.echars {
  height: 140px;
  background: #fff;
  box-shadow: #ddd 1px 1px 5px;
  margin-bottom: 5px;
  padding: 5px;
}
</style>