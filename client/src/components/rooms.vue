<template>
  <div
    class="rooms"
    :class="{ 'flex': !rooms.length }">
    <!-- Modal -->
    <m-modal
      v-if="isOpenModal"
      @close="isOpenModal = false"
    >
      <m-enter-password
      :data="data" />
    </m-modal>

    <div v-if="!rooms.length" class="no-rooms">
      <h4 class="no-rooms__title">Այս պահին սենյակներ չկան</h4>
      <router-link class="no-rooms__link" :to="{ name: 'new-room' }">Ստեղծել նորը</router-link>
    </div>
    <div
      v-else
      class="room"
      v-for="room in trnasformedRooms"
      :key="room.uuid" >
      <div
        class="room__inner"
        :class="{ 'clicked': room.isClicked }"
        @click="ClickToCard(room)" >
        <div class="card">
          <div class="oval">{{ room.number }}</div>
        </div>
      </div>
      <div class="room__inner__back">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    mEnterPassword: () => import('@/components/enterPassword.vue')
  },
  props: ['rooms'],
  data () {
    return {
      trnasformedRooms: [],
      password: '',

      isOpenModal: false,
      data: {},
    }
  },
  watch: {
    rooms (arr) {
      this.trnasformedRooms = arr.map(this.TransformRoom)
    }
  },
  created () {
    this.trnasformedRooms = this.rooms.map(this.TransformRoom)
    // this.socket.on('wrongPassword', () => alert('wrong pass'))
  },
  // beforeDestroy () {
  //   this.socket.off('wrongPassword')
  // },
  methods: {
    ClickToCard ({ number }) {
      // console.log(number)
      // this.trnasformedRooms = this.trnasformedRooms.map(this.TransformRoom)
      // this.Click(e)
      // console.log(e)
      const nickname = this.$store.getters['Game/GetNickName']
      // this.socket.emit('joinRoom', { nickname, room: number, password: this.password })
      this.isOpenModal = true
      this.data = { nickname, room: number }
    },

    // Click (id) {
    //   const findedRoom = this.trnasformedRooms.find(item => item.uuid === id)
    //   if (findedRoom) {
    //     findedRoom.isClicked = true
    //   }
    // },
    
    // Transform functions
    TransformRoom (item) {
      return {
        ...item,
        isClicked: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rooms {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  width: 100%;

  &.flex { display: flex; }
  
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
    // position: relative;
    // flex-grow: 1;
    // flex-basis: 25%;
    // min-width: 130px;
    height: 180px;
    padding: 10px;

    // .room__inner__back {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   z-index: 9;
    //   width: 100%;
    //   height: 100%;
    //   background-color: #fff;
    // }
    .room__inner {
      // position: absolute;
      // top: 0;
      // left: 0;
      // z-index: 10;
      width: 100%;
      height: 100%;
      padding: 12px;
      border-radius: $radius;
      background-image: repeating-linear-gradient(90deg, $red 0%, $red 50%, $black 50%, $black 100%);
      box-shadow: 0 0 10px 1px #303030;
      transition: 0.8s ease;

      &.clicked {
        transform: rotateY(180deg);
      }
      .card {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(-90deg, $red 0%, $red 50%, $black 50%, $black 100%);
        border-radius: $radius;
        pointer-events: none;

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
          pointer-events: none;
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