<template>
  <apexchart
    height="400px"
    style="min-height: 400px"
    type="area"
    :options="options"
    :series="series"
    ref="realTimeChart"
  ></apexchart>
</template>

<script>
export default {
  props: {
    chartData: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      options: {
        stroke: {
          curve: "smooth"
        },
        fill: {
          type: "gradient"
        },
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          type: "category",
          categories: []
        }
      },
      texts: [],
      series: [
        {
          name: "series-1",
          data: []
        }
      ]
    };
  },
  mounted() {
    let texts = [];
    let values = [];
    this.chartData.forEach(data => {
      values.push(data.porcent);
      texts.push(this.moment(data.time * 1000).format("HH:mm"));
    });

    this.$refs.realTimeChart.updateOptions({
      xaxis: {
        categories: texts
      }
    });
    this.$refs.realTimeChart.updateSeries([
      {
        data: values
      }
    ]);
  }
};
</script>

<style>
</style>