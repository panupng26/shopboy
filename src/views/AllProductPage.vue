<template>
  <div class="d-flex justify-content-center align-items-center">
    <div
      v-for="item in producttemplate"
      :key="item.id"
      @click="pagetoProduct(item.id)"
      class="col-4"
    >
      <div class="card cursor-pointer">
        <div class="card-img">
          <img :src="item.imageUrl" alt="estate image" />
        </div>
        <div class="card-info">
          <div class="card-name">
            <p>{{ item.name }}</p>
          </div>
          <div class="card-price">
            <p>ราคา {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producttemplate: [
      {
          id: 1,
          name: "น้ำดื่มรสมิ้น แพ็คเกจ 1",
          description: "เป็นน้ำดื่มธรรมชาติดื่มแล้วสดชื่น แพ็คเกจ 1 มีจำนวน 1 ขวด",
          price: '80 บาท',
          imageUrl: "https://media.discordapp.net/attachments/1004374006058713138/1088339039989551124/58ed2e9aa6951405.png?width=956&height=676"
        },
        {
          id: 2,
          name: "น้ำดื่มรสมิ้น แพ็คเกจ 2",
          description: "เป็นน้ำดื่มธรรมชาติดื่มแล้วสดชื่น แพ็คเกจ 2 มีจำนวน 2 ขวด",
          price: '150 บาท',
          imageUrl: "https://media.discordapp.net/attachments/1004374006058713138/1088339025745678377/a2ac70d910f63407.png?width=956&height=676"
        },
        {
          id: 3,
          name: "น้ำดื่มรสมิ้น แพ็คเกจ 3",
          description: "เป็นน้ำดื่มธรรมชาติดื่มแล้วสดชื่น แพ็คเกจ 3 มีจำนวน 3 ขวด",
          price: '220 บาท',
          imageUrl: "https://media.discordapp.net/attachments/1004374006058713138/1088338827472551966/db2b528de47fee00.png?width=956&height=676"
        },
      ],
    };
  },
  methods: {
    pagetoProduct(itemkey) {
      // console.log('itemkey: ',itemkey)
      this.$router.push(`/product/${itemkey}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Mitr:wght@200&display=swap");

.cursor-pointer {
  cursor: pointer;
}
.picture-search .search-div {
  width: 70vh;
}

.picture-search .search-div .search-button {
  display: flex;
  align-items: center;
}

.picture-search .search-div .input-group {
  background-color: #fff;
  position: relative;
  display: flex;
  width: 100%;
  padding: 0.4em;
  border-radius: 0.7em;
  border: 1px solid #ebecf0;
  box-shadow: rgb(60 64 67 / 30%) 0px 0px 0px 0px,
    rgb(60 64 67 / 15%) 0px 0px 3px 0px;
  background-size: 50px;
}

.input-group-text {
  background-color: transparent;
  border: none;
}

.search-landing {
  width: 90%;
  font-size: 18px;
  border: none;
}

.fa {
  color: #000;
}

.button-search {
  height: 2.75rem;
  width: 8rem;
  background-color: #000;
  color: #fff;
  border-radius: 0.7em;
  border: 1px solid #000;
  transition: 250ms;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 10px;
}

.button-search:hover {
  border: 1px solid #fff;
  background-color: #fff;
  color: #000;
}

.picture-search .search-div .dropdown-wrapper {
  display: flex;
  margin-top: 10px;
}

.estate-pop {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.slider-estate {
  width: 100%;
  position: relative;
}

.card-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.card {
  margin: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1em;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-info {
  padding: 10px;
  text-align: start;
  align-items: center;
}

.card-info .card-name p {
  color: #000 !important;
  font-size: 17px;
  margin: 0 !important;
  font-weight: bold;
}

.card-info .card-price {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 3px !important;
}

.card-info .card-location {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 3px !important;
}

.card-info .card-bedroom {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 3px !important;
}

.card-info .card-bathroom {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 3px !important;
}

.card-info .card-floor {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 3px !important;
}

.card-info .card-area {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 3px !important;
}

.card-info .card-price p {
  color: #000 !important;
  font-size: 16px;
  margin: 0 !important;
}

.card-info .card-location p {
  color: #000 !important;
  font-size: 16px;
  margin: 0 !important;
}

.card-info .estate-room .card-bedroom p {
  color: #000 !important;
  font-size: 14px;
  margin: 0 !important;
}

.card-info .estate-room .card-bathroom p {
  color: #000 !important;
  font-size: 14px;
  margin: 0 !important;
}

.card-info .estate-area .card-floor p {
  color: #000 !important;
  font-size: 14px;
  margin: 0 !important;
}

.card-info .estate-area .card-area p {
  color: #000 !important;
  font-size: 14px;
  margin: 0 !important;
}

.card-info .estate-room i {
  color: #000 !important;
  font-size: 14px;
  margin-right: 5px;
}

.card-info .estate-area i {
  color: #000 !important;
  font-size: 14px;
  margin-right: 5px;
}

.card-info i {
  margin-right: 5px;
  color: #000;
  font-size: 16px;
}

.card-info .estate-room {
  display: flex;
  justify-content: space-between;
}

.card-info .estate-area {
  display: flex;
  justify-content: space-between;
}

.estate-pop h1 {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  margin-left: 10px;
}

.more-estate {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}

.more-estate a {
  text-decoration: underline;
  color: #000 !important;
}

.btn-condo {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.btn-condo .btn {
  border: none;
  background-color: transparent;
  color: #000;
  font-size: 1.8rem;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
}

.btn-condo .btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-condo .btn:focus {
  outline: none !important;
  box-shadow: none !important;
}

.btn-condo .left-btn {
  margin-right: 10px;
}

.btn-condo .right-btn {
  margin-left: 10px;
}

.btn-condo .left-btn:hover,
.btn-condo .right-btn:hover {
  cursor: pointer;
  color: #999;
}

.btn-condo .left-btn:active,
.btn-condo .right-btn:active {
  color: #555;
}

@media only screen and (max-width: 767px) {
  .picture-search {
    height: 60vh;
  }

  .picture-search .search-div {
    width: 90%;
  }

  .picture-search .search-div .input-group {
    flex-wrap: inherit;
    height: 2.5rem;
  }

  .button-search {
    height: 2.5rem;
    width: 5rem;
    margin-top: 2px;
  }

  .estate-pop h1 {
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    margin-left: 10px;
    font-size: 40px;
  }

  .card-container {
    flex-wrap: wrap;
  }

  .card-container .card {
    flex: 0 0 calc(50% - 10px);
  }

  .card-container .card-img img {
    object-fit: fill;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  /* styles for iPad */
  .picture-search .search-div {
    width: 90%;
  }
}
</style>
