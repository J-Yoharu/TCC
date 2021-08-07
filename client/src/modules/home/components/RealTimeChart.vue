<template>
  <apexchart
    height="400px"
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
      values.push(data.value);
      texts.push(data.text);
    });
    // this.series = values;
    // this.texts = texts;
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
    console.log(this.$refs.realTimeChart);
    // console.log(this.options.xaxis.categories.concat(["a", "b", "c"]));
    // console.log(this.series[0].data.concat([100, 200, 300]));
    // setTimeout(() => {
    //   console.log("ativado modo mortifero");
    //   this.$refs.realTimeChart.updateOptions({
    //     xaxis: {
    //       categories: this.options.xaxis.categories.concat(["a", "b", "c"])
    //     }
    //   });
    //   this.$refs.realTimeChart.updateSeries([
    //     {
    //       data: this.series[0].data.concat([100, 200, 300])
    //     }
    //   ]);
    // }, 5000);
  }
};
</script>

<style>
</style>