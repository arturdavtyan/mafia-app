<template>
  <div class="loading">
    <div class="box box-1"></div>
    <div class="box box-2"></div>
    <div class="box box-3"></div>
    <div class="box box-4"></div>
    <img class="app-logo" src="../assets/images/Mafia_logo.png" alt="logo">
  </div>
</template>

<style lang="scss" scoped>
$colorRed: #4d120a;
$from: 2px;
$to: 9px;

.loading {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  
  .app-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2000;
    transform: translate(-50%, -50%);
    width: 60%;
    height: auto;
  }
  .box {
    flex-grow: 1;
    flex-basis: 50%;
    background-color: #141414;

    &.box-1 {
      background-image: repeating-linear-gradient(
        -45deg,
        transparent 0px,
        transparent $from,
        $colorRed $from,
        $colorRed $to
      );
    }
    &.box-2 {
      background-image: repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent $from,
        $colorRed $from,
        $colorRed $to
      );
    }
    &.box-3 {
      background-image: repeating-linear-gradient(
        -135deg,
        transparent 0px,
        transparent $from,
        $colorRed $from,
        $colorRed $to
      );
    }
    &.box-4 {
      background-image: repeating-linear-gradient(
        135deg,
        transparent 0px,
        transparent $from,
        $colorRed $from,
        $colorRed $to
      );
    }
  }
}
</style>