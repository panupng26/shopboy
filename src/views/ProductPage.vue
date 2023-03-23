<template>
    <div class="product-details">
      <div class="product-image">
        <img :src="product.imageUrl" :alt="product.name">
      </div>
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>ราคา {{ product.price }}</p>
        <button @click="addToCart()">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        // product: Object
    },
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
        product: {}
      };
    },
    methods: {
      addToCart() {
        // Add product to cart
      }
    },
    mounted() {
        const pageshow = this.$route.params.id
        const item = this.producttemplate.find(val => val.id == pageshow)
        console.log('item: ', item)
        this.product = item
    }
  };
  </script>
  
  <style>
  .product-details {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  
  .product-image img {
    max-width: 300px;
    max-height: 200px;
  }
  
  .product-info {
    margin-left: 20px;
  }
  </style>
  