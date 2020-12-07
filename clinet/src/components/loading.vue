<template>
  <div class="loading">
    <div class="box box-1"></div>
    <div class="box box-2"></div>
    <div class="box box-3"></div>
    <div class="box box-4"></div>
    <!-- <div class="loading__inner">
      <div class="box top">

      </div>
      <div class="box bottom"></div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
$from: 2px;
$to: 8px;

.loading {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  
  .box {
    flex-grow: 1;
    flex-basis: 50%;
    background-color: #141414;

    &.box-1 {
      background-image: repeating-linear-gradient(
        -45deg,
        transparent 0px,
        transparent $from,
        #842113 $from,
        #842113 $to
      );
    }
    &.box-2 {
      background-image: repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent $from,
        #842113 $from,
        #842113 $to
      );
    }
    &.box-3 {
      background-image: repeating-linear-gradient(
        -135deg,
        transparent 0px,
        transparent $from,
        #842113 $from,
        #842113 $to
      );
    }
    &.box-4 {
      background-image: repeating-linear-gradient(
        135deg,
        transparent 0px,
        transparent $from,
        #842113 $from,
        #842113 $to
      );
    }
  }

  // .loading__inner {
  //   position: relative;
  //   width: 100%;
  //   height: 100%;
    
  //   .box {
  //     width: 100%;
  //     height: 50%;
  //   }
  //   .top {
  //     background: #000;
  //   }
  //   .bottom {
  //     background: red;
  //   }
  // }
}
</style>