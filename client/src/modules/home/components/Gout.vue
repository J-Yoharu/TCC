<template>
  <div class="tw-relative">
    <div class="shape">
      <div class="frame">
        <div class="wave" :style="'top:70'"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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