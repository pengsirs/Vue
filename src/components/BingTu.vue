<template>
  <div id="bintu" class="bt"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  components: {},
  name: "BingTu",
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
      var chartDom = document.getElementById("bintu");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "歌曲播放量:",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: [
            "若把你",
            "在你的身边",
            "武家坡2021",
            "唯一",
            "忏悔录",
            "苦茶子",
          ],
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 1548, name: "北京榜" },
              { value: 775, name: "达人榜" },
              { value: 679, name: "专属榜", selected: true },
            ],
          },
          {
            name: "歌曲信息",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#F6F8FC",
              borderColor: "#8C8D8E",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 13564, name: "若把你" },
              { value: 10795, name: "在你的身边" },
              { value: 15003, name: "武家坡2021" },
              { value: 10352, name: "唯一" },
              { value: 12604, name: "忏悔录" },
              { value: 11396, name: "苦茶子" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
<style  scoped>
.bt {
  height: 500px;
  background: #fff;
  box-shadow: #ddd 1px 1px 5px;
  margin-top: 10px;
  padding: 5px;
}
</style>