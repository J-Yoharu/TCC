<template>
  <div>
    <canvas id="graphic" width="500" max-height="500"></canvas>
  </div>
</template>

<script>
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from "chart.js";
export default {
  mounted() {
    this.initChart();
  },
  data() {
    return {
      chart: null
    };
  },
  methods: {
    initChart() {
      Chart.register(
        ArcElement,
        LineElement,
        BarElement,
        PointElement,
        BarController,
        BubbleController,
        DoughnutController,
        LineController,
        PieController,
        PolarAreaController,
        RadarController,
        ScatterController,
        CategoryScale,
        LinearScale,
        LogarithmicScale,
        RadialLinearScale,
        TimeScale,
        TimeSeriesScale,
        Decimation,
        Filler,
        Legend,
        Title,
        Tooltip,
        SubTitle
      );
      const labels = ["s", "t", "q"];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [1, 2, 3]
          }
        ]
      };
      const config = {
        type: "line",
        data,
        options: {}
      };

      let ctx = document.getElementById("graphic").getContext("2d");
      this.chart = new Chart(ctx, config);
      setInterval(() => {
        console.log(this.chart.data);
        this.chart.data.datasets[0].data.push(15);
        this.chart.data.labels.push("q");
        this.chart.update();
      }, 5000);
    }
  }
};
</script>

<style>
</style>