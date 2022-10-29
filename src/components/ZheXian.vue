<template>
  <div id="zhexian" style="width: 97%" class="echars"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  components: {},
  name: "ZheXian",
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
      var chartDom = document.getElementById("zhexian");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        color: "rgb(50,76,205)",
        title: {
          text: "总访问量:",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },        
        grid: {
          x: 0,
          y: 40,
          x2: 0,
          y2: 0,
        },
        yAxis: {
          type: "value",
          show:false
        },
        series: [
          {
            data: [820,1100, 901, 934, 1290, 1130, 1320],
            type: "line",
            smooth: true,
            areaStyle:{
              color:echarts.graphic.LinearGradient(0,1,0,0,[
                {
                  offset:0.4,
                  color:"#fff"
                },
                {
                  offset:1,
                  color:"rgb(50,76,205)"
                }
              ])
            }
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