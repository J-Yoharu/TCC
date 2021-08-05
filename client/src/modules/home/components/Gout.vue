<template>
  <div style="max-width: 200px; height: 250px" class="d-flex align-end">
    <div class="display-1 white--text center-absolute">{{ porcent }}%</div>
    <div class="shape">
      <div class="frame">
        <div class="wave" :style="`top:${100 - porcent - 20}%`"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    porcent: {
      required: true
    }
  },
  data() {
    return {
      volume: -30
    };
  },
  mounted() {
    //   70 = 0 70
    //   60 = 10 50
    //   50 = 20  30
    //   40 = 30 10
    //   30 = 40 -10
    //   20 = 50 -30
    //   10 = 60 -50
    //   0 = 70 -70
    // -10 = 80 -90
    // -20 = 90 -110
    // -30 = 100 -130
    console.log(this.porcent - 30);
  }
};
</script>

<style scoped>
.center-absolute {
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translate(-50%);
  z-index: 2;
}
.shape {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-top-right-radius: 0;
  transform: rotate(-45deg);
  border: 5px solid #fff;
  overflow: hidden;
  position: relative;
}

.frame {
  position: absolute;
  transform: rotate(45deg);
  background-color: rgba(0, 234, 255, 0.5);
  bottom: -8px;
  left: 15px;
  right: 0;
  height: 245px;
  width: 200px;
}

.wave {
  position: absolute;
  /*top: 72%;  equivale a 0%  */
  top: 50%;
  left: 0;
  width: 200%;
  height: 200%;
  transform: translate(-25%, 0);
  background: #4973ff;
}

.wave:before,
.wave:after {
  content: "";
  position: absolute;
  width: 80%;
  height: 80%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  background: #000;
}

.wave:before {
  border-radius: 55%;
  background: rgba(1, 88, 113, 1);
  animation: animate 3s linear infinite;
}

.wave:after {
  border-radius: 45%;
  background: rgba(1, 88, 113, 0.5);
  animation: animate 3s linear infinite;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>