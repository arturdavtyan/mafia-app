<template>
  <div class="rooms">
    <div v-if="!rooms.length" class="no-rooms">
      <h4 class="no-rooms__title">Այս պահին սենյակներ չկան</h4>
      <router-link class="no-rooms__link" :to="{ name: 'new-room' }">Ստեղծել նորը</router-link>
    </div>
    <div
      v-else
      class="room"
      v-for="room in rooms"
      :key="room.uuid">
      <div class="room__inner">
        <div class="card">
          <div class="oval">{{ room.number }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rooms']
}
</script>

<style lang="scss" scoped>
.rooms {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
  .no-rooms {
    width: 100%;
    padding: 30px 0;

    .no-rooms__title {
      font-size: 18px;
      text-align: center;
      margin-bottom: 20px;
    }
    .no-rooms__link {
      display: block;
      width: 100%;
      font-size: 14px;
      color: #0c398d;
      text-align: center;
    }
  }
  .room {
    flex-grow: 1;
    flex-basis: 25%;
    min-width: 120px;
    height: 180px;
    padding: 10px;

    .room__inner {
      width: 100%;
      height: 100%;
      padding: 12px;
      border-radius: $radius;
      background-image: repeating-linear-gradient(90deg, $red 0%, $red 50%, $black 50%, $black 100%);
      box-shadow: 0 0 10px 1px #303030;

      .card {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(-90deg, $red 0%, $red 50%, $black 50%, $black 100%);
        border-radius: $radius;

        .oval {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 12;
          transform: translate(-50%, -50%);
          width: 74%;
          height: 50px;
          line-height: 46px;
          text-align: center;
          background-color: rgb(241, 247, 158);
          border-radius: 50%;
          font-size: 10px;
          border-width: 3px;
          border-right-color: $black;
          border-left-color: $red;
          border-top-color: $red;
          border-style: solid;
        }
      }
    }
  }

  // @media screen and (max-width: 600px) {
  //   .room {
  //     flex-basis: 33.333%;
  //   }
  // }
}
</style>